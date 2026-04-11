import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata = {
  title: 'Little Yogi Academy | Subodh Yoga',
  description:
    'Learn about Little Yogi Academy, Subodh Yoga’s flagship yoga program for children ages 8–13.',
};

const programHighlights = [
  {
    title: 'Weekly Hourly In-person Class',
    description:
      'Join us for our in-person, hour-long weekly classes, offered from September through June. These sessions provide a consistent and structured environment to deepen practice and knowledge over the course of the academic year.',
  },
  {
    title: 'Multiple Proficiency Levels',
    description:
      'Our children’s programs are designed to cater to various proficiency levels, ensuring that every child receives the appropriate level of instruction and challenge.',
  },
  {
    title: 'Philosophy Based Syllabus',
    description:
      'Our programs follow a structured syllabus grounded in the rich tradition of yoga philosophy, guiding children through meaningful personal growth and learning.',
  },
  {
    title: 'Quarterly Progress Assessment',
    description:
      'Our program includes quarterly progress assessments to monitor development and growth, with regular feedback to support each child’s journey.',
  },
  {
    title: 'Annual Evaluation Level Certification',
    description:
      'At the end of each year, children undergo a comprehensive assessment and receive a certification reflecting their proficiency and accomplishments.',
  },
];

const academyOffers = [
  'Teach authentic yoga practices to the new generation',
  'Expose children to foundational yoga philosophy',
  'Equip children with tools and techniques to manage stress',
  'Enable children to adopt and maintain a healthy lifestyle',
];

const yogaTypes = [
  'Raja Yoga: The Royal Path',
  'Bhakti Yoga: The Path of Devotion',
  'Jnana Yoga: The Path of Knowledge',
  'Karma Yoga: The Path of Selfless Action',
];

const syllabusSources = [
  'Patanjali Yoga Sutra',
  'Hatha Yoga Pradipika',
  'Gheranda Samhita',
  'Bhagavad Gita',
  'Upanishads',
  'Yoga Vasistha',
];

const levels = [
  {
    title: 'Beginner',
    description:
      'Our Beginner level is designed for those who are new to yoga or looking to build a strong foundation. Classes focus on basic postures, breathing techniques, and the fundamentals of yoga philosophy.',
  },
  {
    title: 'Intermediate',
    description:
      'The Intermediate level is perfect for practitioners who have a basic understanding of yoga and are ready to deepen their practice. These classes introduce more challenging postures, advanced breathing techniques, and a deeper exploration of yoga philosophy.',
  },
  {
    title: 'Advanced',
    description:
      'Our Advanced level is tailored for experienced practitioners looking to master complex asanas, refine their alignment, and delve deeply into the spiritual aspects of yoga.',
  },
];

const locations = [
  {
    label: 'Edison, NJ',
    href: '/edison-nj',
    note: 'View schedule, pricing, and registration details for Edison.',
  },
];

export default function LittleYogiAcademyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Children’s Program"
        title="Little Yogi Academy"
        description="Flagship program for child development through yoga for ages 8–13."
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-subodhBlue/10 bg-subodhBackground p-8 text-center shadow-sm sm:p-10 md:p-12">
          <p className="text-base leading-8 text-subodhText/80 sm:text-lg">
            Introducing our flagship program designed to support and nurture child
            development through yoga. This comprehensive program combines physical
            postures, mindfulness practices, and age-appropriate philosophical
            teachings to promote the holistic growth of children. Our approach
            enhances physical strength, flexibility, emotional balance, and mental
            focus, laying a strong foundation for overall well-being and personal
            development. Tailored to meet the unique needs of children, this
            program is an ideal way to foster healthy habits and life skills from
            an early age.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-6xl">
          <div className="mx-auto w-full max-w-4xl">
            {locations.map((location) => (
              <Link
                key={location.label}
                href={location.href}
                className="group block rounded-[32px] border border-subodhBlue/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-subodhOrange/30 hover:shadow-xl sm:p-10 lg:p-12"
              >
                <div className="flex h-full flex-col justify-between gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <span className="inline-flex rounded-full bg-subodhBackground px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-subodhOrange">
                      Center Location
                    </span>
                    <h3 className="mt-5 text-3xl font-bold text-subodhBlue sm:text-4xl">
                      {location.label}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-subodhText/75 sm:text-lg">
                      {location.note}
                    </p>
                  </div>

                  <div className="inline-flex items-center self-center text-lg font-semibold text-subodhOrange transition group-hover:text-subodhBlue">
                    View Details
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-white pt-0"
        title="Program Highlights"
        subtitle="A thoughtfully structured learning journey built for steady growth throughout the year."
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programHighlights.map((highlight) => (
            <article
              key={highlight.title}
              className="h-full rounded-[24px] border border-subodhBlue/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-subodhBlue">{highlight.title}</h3>
              <p className="mt-4 leading-7 text-subodhText/75">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-subodhBackground/60 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-subodhBlue/10 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-subodhBlue sm:text-3xl">
            What Does Little Yogi Academy Offer?
          </h2>
          <ul className="mt-6 space-y-4">
            {academyOffers.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-subodhOrange">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-subodhText/80">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-white" title="Typical Activities Covered in Class">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-[24px] border border-subodhBlue/10 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-subodhBlue">Syllabus Coverage</h3>
            <p className="mt-3 text-subodhText/75">
              Syllabus covers the critical aspects of the following types of Yoga
            </p>
            <ul className="mt-5 space-y-3 text-subodhText/80">
              {yogaTypes.map((type) => (
                <li key={type} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-subodhOrange" />
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[24px] border border-subodhBlue/10 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-subodhBlue">Syllabus Material</h3>
            <p className="mt-3 text-subodhText/75">
              Syllabus is prepared based on the following sources.
            </p>
            <ul className="mt-5 space-y-3 text-subodhText/80">
              {syllabusSources.map((source) => (
                <li key={source} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-subodhOrange" />
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {levels.map((level) => (
            <article
              key={level.title}
              className="h-full rounded-[24px] border border-subodhBlue/10 bg-gradient-to-b from-subodhBackground/60 to-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-subodhBlue">{level.title}</h3>
              <p className="mt-4 leading-7 text-subodhText/75">{level.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white pt-0">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-subodhBlue/10 bg-gradient-to-r from-subodhBackground to-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-subodhBlue">
                Curious if Little Yogi Academy is right for your child?
              </h2>
              <p className="mt-3 leading-7 text-subodhText/75">
                Reach out to learn more about class expectations, placement, and
                how we can support your child’s growth through yoga.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-subodhBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-subodhOrange"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

