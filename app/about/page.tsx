import Section from '@/components/Section';
import PageHero from '@/components/PageHero';

export const metadata = {
    title: "About | Subodh Yoga",
    description: "Learn about the mission, philosophy, and history of Subodh Yoga.",
};

export default function About() {
    return (
        <div>
            <PageHero
                eyebrow="Our Journey"
                title="About Subodh Yoga"
                description="Bringing ancient wisdom to modern lives through authentic practice and community."
            />

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-subodhBlue">Philosophy</h2>
                        <p className="text-subodhText opacity-80 leading-relaxed text-lg">
                            At Subodh Yoga, we believe that &apos;Subodh&apos;—meaning right understanding or deep knowledge—is the foundation of a meaningful life. Yoga is not just about the poses we strike on the mat, but the awareness we carry off it.
                        </p>
                        <p className="text-subodhText opacity-80 leading-relaxed">
                            Our approach is holistic, integrating the physical (Asana), the energetic (Pranayama), and the mental (Dhyana) to help you achieve a state of &apos;Samatva&apos; or equanimity.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-subodhBlue">Mission</h2>
                        <p className="text-subodhText opacity-80 leading-relaxed text-lg">
                            Our mission is to make yoga accessible and transformative for everyone, regardless of age, flexibility, or experience. We strive to create a peaceful environment where community members can support each other in their journey toward health and self-realization.
                        </p>
                    </div>

                    <div className="bg-subodhBackground p-10 rounded-3xl border border-subodhBlue/5">
                        <h3 className="text-2xl font-bold text-subodhBlue mb-4">Why Yoga?</h3>
                        <ul className="space-y-4">
                            {[
                                'Reduced stress and anxiety through conscious breathing.',
                                'Improved flexibility, balance, and core strength.',
                                'Enhanced focus and mental clarity for daily tasks.',
                                'Cultivation of self-compassion and inner peace.'
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 text-subodhOrange">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-subodhText opacity-80">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    );
}
