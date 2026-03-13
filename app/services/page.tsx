import Section from '@/components/Section';
import PageHero from '@/components/PageHero';

export const metadata = {
    title: "Services | Subodh Yoga",
    description: "Explore our yoga classes, meditation sessions, and private coaching.",
};

export default function Services() {
    const services = [
        {
            title: "Foundational Yoga",
            desc: "Ideal for beginners, focusing on basic asanas, alignment, and simple breathwork.",
            duration: "60 Minutes",
            level: "Beginner"
        },
        {
            title: "Flow & Vitality",
            desc: "A dynamic Vinyasa-style class that links movement with breath to build heat and stamina.",
            duration: "75 Minutes",
            level: "Intermediate"
        },
        {
            title: "Mindfulness & Meditation",
            desc: "Guided sessions focused solely on Pranayama and seated meditation to calm the mind.",
            duration: "45 Minutes",
            level: "All Levels"
        },
        {
            title: "Restorative Healing",
            desc: "Passive poses held for longer periods to release deep tension and support the nervous system.",
            duration: "90 Minutes",
            level: "All Levels"
        },
        {
            title: "Private Coaching",
            desc: "One-on-one sessions tailored to your specific physical needs or spiritual goals.",
            duration: "Flexible",
            level: "Custom"
        },
        {
            title: "Workshops & Retreats",
            desc: "Deep-dive sessions into specific topics like anatomy, philosophy, or intensive practice.",
            duration: "Multi-day",
            level: "Varied"
        }
    ];

    return (
        <div>
            <PageHero
                eyebrow="What We Offer"
                title="Our Services"
                description="Holistic practices tailored to your unique journey toward physical health and spiritual growth."
            />

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="group p-8 rounded-3xl border border-subodhBlue/5 bg-white hover:border-subodhOrange/20 transition-all hover:shadow-lg hover:shadow-subodhBlue/5">
                            <div className="w-12 h-12 bg-subodhBackground rounded-2xl flex items-center justify-center text-subodhOrange mb-6 group-hover:bg-subodhOrange group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-subodhBlue mb-3">{service.title}</h3>
                            <p className="text-subodhText opacity-60 text-sm mb-6 leading-relaxed">
                                {service.desc}
                            </p>
                            <div className="flex justify-between items-center pt-6 border-t border-subodhBackground mt-auto">
                                <span className="text-xs font-bold px-3 py-1 bg-subodhBackground rounded-full text-subodhText/40 uppercase tracking-tighter">{service.level}</span>
                                <span className="text-xs text-subodhOrange font-bold">{service.duration}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
