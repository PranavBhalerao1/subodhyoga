import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    id?: string;
}

const Section = ({ children, className = "", title, subtitle, id }: SectionProps) => {
    return (
        <section id={id} className={`py-20 sm:py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {title && <h2 className="text-3xl md:text-4xl font-bold text-subodhBlue mb-4">{title}</h2>}
                        {subtitle && <p className="text-lg text-subodhText opacity-60 max-w-xl mx-auto">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
