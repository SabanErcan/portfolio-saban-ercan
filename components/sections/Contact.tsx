'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full px-6 md:px-12 lg:px-24 py-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            TRAVAILLONS ENSEMBLE
          </h2>
          <div className="h-px bg-current opacity-20 w-full mb-6" />
          <p className="text-xl opacity-70">
            Une idée de projet ? Discutons-en !
          </p>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-opacity-5 bg-gray-500 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="space-y-6">
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2 opacity-70">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-current border-opacity-20 py-3 px-2 focus:border-opacity-100 outline-none transition-all"
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2 opacity-70">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-current border-opacity-20 py-3 px-2 focus:border-opacity-100 outline-none transition-all"
                placeholder="votre@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm mb-2 opacity-70">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border-b-2 border-current border-opacity-20 py-3 px-2 focus:border-opacity-100 outline-none transition-all resize-none"
                placeholder="Parlez-moi de votre projet..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
              whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
            >
              {status === 'idle' && 'Envoyer le message'}
              {status === 'sending' && 'Envoi en cours...'}
              {status === 'success' && '✓ Message envoyé !'}
              {status === 'error' && 'Erreur, réessayez'}
            </motion.button>
          </div>
        </motion.form>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl mb-8 opacity-70">OU RETROUVEZ-MOI SUR</p>
          <div className="h-px bg-current opacity-20 w-full mb-8" />

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {/* GitHub */}
            <motion.a
              href="https://github.com/SabanErcan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
            >
              <FiGithub className="w-12 h-12 group-hover:text-accent-cyan transition-colors" />
              <span className="text-sm opacity-70 group-hover:opacity-100">
                GitHub
              </span>
              <span className="text-xs opacity-50">@SabanErcan</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/saban-ercan-5223b538b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
            >
              <FiLinkedin className="w-12 h-12 group-hover:text-accent-cyan transition-colors" />
              <span className="text-sm opacity-70 group-hover:opacity-100">
                LinkedIn
              </span>
              <span className="text-xs opacity-50">Saban ERCAN</span>
            </motion.a>
          </div>

          {/* Email direct */}
          <div className="mt-12">
            <p className="text-sm opacity-50 mb-2">Email</p>
            <a
              href="mailto:saban-can.ERCAN@etu.univ-amu.fr"
              className="text-lg hover:text-accent-cyan transition-colors flex items-center justify-center gap-2"
            >
              <FiMail className="w-5 h-5" />
              saban-can.ERCAN@etu.univ-amu.fr
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
