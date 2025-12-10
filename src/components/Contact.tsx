import React, { useState, useRef } from 'react';
import { Send, Twitter, Mail, CheckCircle, Copy, Check, AlertCircle } from 'lucide-react';

// Formspree Configuration - Replace with your form ID from formspree.io
const FORMSPREE_FORM_ID = 'xanrpald'; // Get from formspree.io (e.g., 'xyzabcde')

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = 'orbitstudios.dev@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
        formRef.current.reset();
        setTimeout(() => setFormState('idle'), 4000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Formspree error:', error);
      setFormState('error');
      setErrorMessage('Failed to send message. Please try again or email directly.');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch?</h2>
        <p className="text-xl text-slate-400 mb-12">
          Have a project in mind? Let's build something epic together.
          Limited spots available for beta pricing.
        </p>

        <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-sm mb-12">
          {formState === 'success' ? (
            <div className="py-12 flex flex-col items-center justify-center text-green-400">
              <CheckCircle className="w-16 h-16 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold">Message Transmitted!</h3>
              <p className="text-slate-300 mt-2">I'll get back to you at warp speed.</p>
            </div>
          ) : formState === 'error' ? (
            <div className="py-12 flex flex-col items-center justify-center text-red-400">
              <AlertCircle className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold">Transmission Failed</h3>
              <p className="text-slate-300 mt-2">{errorMessage}</p>
              <a
                href={`mailto:${email}`}
                className="mt-4 text-purple-400 hover:text-purple-300 underline"
              >
                Click here to email directly
              </a>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white outline-none transition-all"
                  placeholder="Tell me about your idea... (e.g., 'I need a landing page for my startup')"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {formState === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <a
            href="https://x.com/DevBrie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <div className="p-3 bg-slate-800 rounded-full group-hover:bg-blue-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </div>
            <span className="font-medium">DM me on X</span>
          </a>

          <div className="flex items-center justify-center gap-2 text-slate-400 group">
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <div className="p-3 bg-slate-800 rounded-full group-hover:bg-purple-500 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-medium">
                {showEmail ? email : 'Show Email'}
              </span>
            </button>

            {showEmail && (
              <button
                onClick={handleCopyEmail}
                className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;