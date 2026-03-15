import Section from '@/components/Section';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: "About | Subodh Yoga",
  description: "Learn about the vision, mission, and objectives of Subodh Yoga.",
};

export default function About() {
  const objectives = [
    "Simplify yoga philosophy for easy understanding",
    "Teach holistic yoga philosophy",
    "Increase awareness of holistic yoga philosophy beyond just physical exercise",
    "Integrate yoga into daily life to keep a healthy body, healthy mind, and to have peace and happiness at all times",
  ];

  return (
    <div>
      <PageHero
        eyebrow="Who we are"
        title="About Us"
        description="Making yoga easy and simple to understand for everyone."
      />

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto space-y-8">

          <p className="text-subodhText opacity-80 leading-relaxed text-lg">
            One of the meanings of <strong>Subodh</strong> is simple or easy to understand.
            At Subodh Yoga, we have the following vision and mission:
          </p>

          <p className="text-subodhText opacity-80 leading-relaxed text-lg">
            <strong>Vision:</strong> Yoga Made Simpler!
          </p>

          <p className="text-subodhText opacity-80 leading-relaxed text-lg">
            <strong>Mission:</strong> To make yoga easy and simple to understand for everyone so they can live a yogic way of life.
          </p>

          <p className="text-subodhText opacity-80 leading-relaxed">
            Subodh Yoga is a <strong>501(c)(3) nonprofit organization</strong> that aims
            to promote, preserve, and protect true yoga philosophy based on traditional
            yogic scriptures.
          </p>

          <div className="bg-subodhBackground p-10 rounded-3xl border border-subodhBlue/5">
            <h3 className="text-2xl font-bold text-subodhBlue mb-6">
              Our Key Objectives
            </h3>

            <ul className="space-y-4">
              {objectives.map((item, i) => (
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