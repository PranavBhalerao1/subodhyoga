import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-bold text-subodhBlue">Subodh Yoga</span>
            <p className="text-sm text-subodhText opacity-60 mt-2 max-w-xs">
              Cultivating health, balance, and inner awareness through modern yoga practice.
            </p>
            <p className="text-sm text-subodhOrange mt-4 font-semibold">
              <a href="mailto:info@subodhyoga.org">info@subodhyoga.org</a>
            </p>
          </div>

          <div className="flex gap-8">
            <Link href="/about" className="text-sm text-subodhText opacity-70 hover:text-subodhOrange transition-colors font-semibold">About</Link>
            <Link href="/services" className="text-sm text-subodhText opacity-70 hover:text-subodhOrange transition-colors font-semibold">Services</Link>
            <Link href="/blog" className="text-sm text-subodhText opacity-70 hover:text-subodhOrange transition-colors font-semibold">Blog</Link>
            <Link href="/contact" className="text-sm text-subodhText opacity-70 hover:text-subodhOrange transition-colors font-semibold">Contact</Link>
          </div>

          <div className="text-sm text-subodhText opacity-40">
            © {new Date().getFullYear()} Subodh Yoga. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
