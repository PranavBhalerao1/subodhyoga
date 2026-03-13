import React from 'react';

interface PageHeroProps {
    title: string;
    description: string;
    eyebrow?: string;
}

const PageHero = ({ title, description, eyebrow }: PageHeroProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-subodhBackground">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] rounded-full bg-subodhOrange/5 blur-[120px]" />
                <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[60%] rounded-full bg-subodhBlue/5 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Centered Panel/Card */}
                    <div className="bg-white/80 backdrop-blur-sm p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(40,52,114,0.06)] border border-white/50 relative overflow-hidden group">
                        {/* Accent border/glow on hover or static */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-subodhOrange/30 to-transparent" />
                        
                        {eyebrow && (
                            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-subodhOrange mb-4">
                                {eyebrow}
                            </span>
                        )}
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-subodhBlue tracking-tight mb-6">
                            {title}
                        </h1>
                        
                        <div className="w-12 h-1 bg-subodhOrange/10 mx-auto mb-8 rounded-full" />
                        
                        <p className="text-lg md:text-xl text-subodhText/70 max-w-2xl mx-auto leading-relaxed font-light">
                            {description}
                        </p>

                        {/* Subtle decorative elements for that "premium" feel */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-subodhBlue/5 rounded-full blur-2xl group-hover:bg-subodhBlue/10 transition-colors" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHero;
