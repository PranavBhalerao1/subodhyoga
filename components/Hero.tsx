import React from 'react';

interface HeroProps {
    title: string;
    subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
    return (
        <div className="relative py-24 sm:py-32 overflow-hidden bg-white">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-b from-subodhBackground to-transparent" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-subodhBlue tracking-tight mb-6">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-subodhOrange opacity-80 max-w-2xl mx-auto font-light leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default Hero;
