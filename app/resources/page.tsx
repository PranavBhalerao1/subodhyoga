import Section from '@/components/Section';
import PageHero from '@/components/PageHero';

export const metadata = {
    title: "Resources | Subodh Yoga",
    description: "Free guides, yoga routines, and mindfulness tools.",
};

export default function Resources() {
    const resources = [
        {
            title: "Morning Routine PDF",
            type: "Guide",
            desc: "A 15-minute sequence to energize your body and focus your mind for the day ahead."
        },
        {
            title: "Breathing Basics",
            type: "Video",
            desc: "A video walkthrough of three essential Pranayama techniques for stress relief."
        },
        {
            title: "Meditation Timer",
            type: "Tool",
            desc: "A simple, distraction-free timer for your daily mindfulness practice."
        },
        {
            title: "Yoga Anatomy 101",
            type: "Article",
            desc: "Understanding how your joints and muscles work together in foundational poses."
        }
    ];

    return (
        <div>
            <PageHero
                eyebrow="Library"
                title="Resources"
                description="A curated collection of guides, routines, and tools to support your mindfulness practice beyond the mat."
            />

            <Section className="bg-white">
                <div className="max-w-4xl mx-auto space-y-8">
                    {resources.map((item, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-8 p-10 bg-subodhBackground rounded-3xl border border-subodhBlue/5 items-center">
                            <div className="flex-1">
                                <span className="text-xs font-bold text-subodhOrange px-3 py-1 bg-white rounded-full uppercase tracking-widest mb-4 inline-block">
                                    {item.type}
                                </span>
                                <h3 className="text-2xl font-bold text-subodhBlue mb-3">{item.title}</h3>
                                <p className="text-subodhText opacity-70 leading-relaxed">{item.desc}</p>
                            </div>
                            <button className="whitespace-nowrap px-8 py-4 bg-subodhOrange text-white font-bold rounded-xl hover:bg-subodhOrange-dark transition-all">
                                Download / View
                            </button>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
