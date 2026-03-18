'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const AdultRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: '',
    interest: '',
    healthNotes: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'loading'>('idle');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!captchaToken) {
      alert('Please complete the CAPTCHA.');
      setStatus('idle');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xbdzapgv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          'g-recaptcha-response': captchaToken,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          experienceLevel: '',
          interest: '',
          healthNotes: '',
        });
        setCaptchaToken(null);
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        alert('Oops! There was a problem submitting your registration.');
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      alert('Oops! There was a problem submitting your registration.');
      setStatus('idle');
    }
  };

  return (
    <div>
      {status === 'success' ? (
        <div className="animate-in fade-in zoom-in py-12 text-center duration-500">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-subodhOrange/10 text-subodhOrange">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mb-2 text-2xl font-bold text-subodhBlue">Registration Submitted!</h3>
          <p className="text-subodhText/60">
            Thank you for registering. We&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-subodhBlue"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-subodhBlue">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-subodhBlue">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
              />
            </div>

            <div>
              <label
                htmlFor="experienceLevel"
                className="mb-2 block text-sm font-semibold text-subodhBlue"
              >
                Experience Level
              </label>
              <select
                id="experienceLevel"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
              >
                <option value="" disabled>
                  Select your level
                </option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-subodhBlue">
              Why are you interested in joining?
            </label>
            <textarea
              id="interest"
              name="interest"
              rows={5}
              placeholder="Tell us a little about your goals and what you hope to learn."
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
            />
          </div>

          <div>
            <label
              htmlFor="healthNotes"
              className="mb-2 block text-sm font-semibold text-subodhBlue"
            >
              Any health concerns or notes?
            </label>
            <textarea
              id="healthNotes"
              name="healthNotes"
              rows={4}
              placeholder="Share any injuries, limitations, or notes we should know about."
              value={formData.healthNotes}
              onChange={(e) => setFormData({ ...formData, healthNotes: e.target.value })}
              className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
            />
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LdhIo4sAAAAAMMQNqcBGXXjydOjKV7TQ8mGS3oD"
              onChange={(token: string | null) => setCaptchaToken(token)}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex w-full items-center justify-center rounded-full bg-subodhBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-subodhOrange disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      )}
    </div>
  );
};

export default AdultRegistrationForm;