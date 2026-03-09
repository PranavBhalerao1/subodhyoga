import React from 'react';
import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle: string;
    showCTA?: boolean;
}

const Hero = ({ title, subtitle, showCTA }: HeroProps) => {
    return (
        <div className="relative py-32 sm:py-40 bg-[url('/hero-yoga.jpg')] bg-cover bg-center overflow-hidden">
            {/* Soft white overlay for readability */}
            <div className="absolute inset-0 bg-white/55"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-900">
                <h1 className="text-5xl md:text-7xl font-bold text-subodhBlue tracking-tight mb-6">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-subodhOrange font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>

                {showCTA && (
                    <div className="mt-10 flex justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-subodhOrange text-white font-bold rounded-xl hover:bg-subodhOrange-dark transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;
