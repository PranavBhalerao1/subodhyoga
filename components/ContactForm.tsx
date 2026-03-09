'use client';

import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'success' | 'loading'>('idle');
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        if (!captchaToken) {
            alert("Please complete the CAPTCHA.");
            setStatus("idle");
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/xreyegyj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    "g-recaptcha-response": captchaToken
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setCaptchaToken(null);
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                alert('Oops! There was a problem submitting your form');
                setStatus('idle');
            }
        } catch (error) {
            alert('Oops! There was a problem submitting your form');
            setStatus('idle');
        }
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            {status === 'success' ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                    <div className="bg-subodhOrange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-subodhOrange">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-subodhBlue mb-2">Message Sent!</h3>
                    <p className="text-subodhText/60">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-subodhBlue mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-subodhOrange/20 focus:border-subodhOrange outline-none transition-all"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-subodhBlue mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-subodhOrange/20 focus:border-subodhOrange outline-none transition-all"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-subodhBlue mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-subodhOrange/20 focus:border-subodhOrange outline-none transition-all resize-none"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>
                    <ReCAPTCHA
                        sitekey="6LeKLIQsAAAAAH0h3m5eoZOU3dYWEbNrm8c2pzI1"
                        onChange={(token: string | null) => setCaptchaToken(token)}
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-4 bg-subodhOrange text-white font-bold rounded-xl hover:bg-subodhOrange-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
