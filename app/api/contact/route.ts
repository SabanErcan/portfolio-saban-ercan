import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message }: ContactFormData = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Configuration du transporteur email (vous devrez configurer vos propres paramètres SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true pour 465, false pour les autres ports
      auth: {
        user: process.env.SMTP_USER, // Votre email
        pass: process.env.SMTP_PASS, // Votre mot de passe d'application
      },
    });

    // Contenu de l'email à vous envoyer
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Votre email de réception
      subject: `Nouveau message de ${name} - Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22d3ee; border-bottom: 2px solid #22d3ee; padding-bottom: 10px;">
            Nouveau message depuis votre portfolio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2b2d42;">Informations du contact :</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #22d3ee; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2b2d42;">Message :</h3>
            <p style="line-height: 1.6; color: #4a5568;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 14px; color: #718096;">
            <p>Ce message a été envoyé depuis votre portfolio personnel.</p>
            <p>Répondez directement à ${email} pour contacter cette personne.</p>
          </div>
        </div>
      `,
    };

    // Email de confirmation à l'expéditeur
    const confirmationOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Confirmation de réception de votre message',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22d3ee; border-bottom: 2px solid #22d3ee; padding-bottom: 10px;">
            Merci pour votre message !
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #4a5568;">
            Bonjour ${name},
          </p>
          
          <p style="line-height: 1.6; color: #4a5568;">
            J'ai bien reçu votre message et je vous remercie de l'intérêt que vous portez à mon travail. 
            Je m'efforce de répondre à tous les messages dans les plus brefs délais, généralement sous 24-48 heures.
          </p>
          
          <div style="background-color: #f0fcff; padding: 20px; border-radius: 8px; border-left: 4px solid #22d3ee; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0891b2;">Votre message :</h3>
            <p style="line-height: 1.6; color: #4a5568; font-style: italic;">
              "${message}"
            </p>
          </div>
          
          <p style="line-height: 1.6; color: #4a5568;">
            En attendant, n'hésitez pas à explorer mes autres projets sur 
            <a href="https://github.com/SabanErcan" style="color: #22d3ee; text-decoration: none;">GitHub</a> 
            ou à me suivre sur 
            <a href="https://www.linkedin.com/in/saban-ercan-5223b538b/" style="color: #22d3ee; text-decoration: none;">LinkedIn</a>.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #1e293b; border-radius: 8px; text-align: center;">
            <p style="color: #e2e8f0; margin: 0; font-weight: 500;">
              Saban ERCAN - Développeur Full Stack
            </p>
            <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 14px;">
              Étudiant en BUT Informatique - IUT Aix-Marseille
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #718096; text-align: center;">
            <p>Cet email est envoyé automatiquement. Veuillez ne pas répondre directement à cette adresse.</p>
          </div>
        </div>
      `,
    };

    // Envoi des emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationOptions);

    return NextResponse.json(
      { 
        message: 'Message envoyé avec succès',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.',
        success: false
      },
      { status: 500 }
    );
  }
}

// Méthode OPTIONS pour CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}