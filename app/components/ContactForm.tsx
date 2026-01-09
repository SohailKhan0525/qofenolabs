'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'Starter - $150',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const emailConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  };

  const isConfigured = Boolean(
    emailConfig.serviceId?.length &&
    emailConfig.templateId?.length &&
    emailConfig.publicKey?.length &&
    !emailConfig.publicKey.includes('YOUR_PUBLIC_KEY')
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      if (!isConfigured) {
        throw new Error('Email service not configured');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'qofenolabs@gmail.com',
        plan: formData.plan,
        message: formData.message,
      };

      const response = await emailjs.send(
        emailConfig.serviceId!,
        emailConfig.templateId!,
        templateParams,
        emailConfig.publicKey!
      );

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', plan: 'Starter - $150', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Email service returned an error');
      }
    } catch (error: any) {
      console.error('Failed to send email:', error);
      setStatus('error');

      if (error?.message?.includes('not configured')) {
        setErrorMessage('Email service not set up. Please email us at qofenolabs@gmail.com');
      } else if (error?.text) {
        setErrorMessage(`Failed to send: ${error.text}. Please email us at qofenolabs@gmail.com`);
      } else {
        setErrorMessage('Failed to send message. Please email us directly at qofenolabs@gmail.com');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="plan" className="block text-sm font-medium text-gray-900 mb-2">
          Interested Plan
        </label>
        <select
          id="plan"
          name="plan"
          value={formData.plan}
          onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
          className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
        >
          <option>Starter - $150</option>
          <option>Growth - $250</option>
          <option>Pro Launch - $350</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
          placeholder="Tell us about your SaaS and what you're looking for..."
        />
      </div>

      {status === 'success' && (
        <div className="rounded-md bg-green-50 p-4">
          <p className="text-sm text-green-800">
            ✓ Message sent successfully! We'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-800">
            {errorMessage}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
