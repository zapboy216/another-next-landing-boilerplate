// src/components/ContactForm.tsx

'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const ContactForm = () => {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 w-full max-w-lg">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-white"
          htmlFor="name"
        >
          {t('form_name_label')}
        </label>
        <input
          className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-white"
          htmlFor="email"
        >
          {t('form_email_label')}
        </label>
        <input
          className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-white"
          htmlFor="message"
        >
          {t('form_message_label')}
        </label>
        <textarea
          className="w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          {t('form_submit_button')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
