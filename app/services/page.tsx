import Link from 'next/link';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: "Services | Subodh Yoga",
  description: "Explore yoga classes, workshops, teacher training, research, and community offerings from Subodh Yoga.",
};

export default function Services() {
  const offerings = [
    {
      title: "Yoga Classes for Adults",
      subtitle: "Weekly Yoga Classes for Adults",
      description:
        "Join our weekly classes dedicated to exploring the rich philosophy of yoga. These sessions offer a deep dive into the principles and teachings that form the foundation of yoga practice. Whether you're new to yoga or looking to deepen your understanding, our classes provide valuable insights and guidance for all ages.",
      cta: "Register Now",
      href: "/adult-registration",
      featured: true,
    },
    {
      title: "Yoga Classes for Children",
      subtitle: "Little Yogi Academy",
      description:
        "Our flagship program for child development through yoga.",
      cta: "Learn More",
      href: "/little-yogi-academy",
      featured: true,
    },
    {
      title: "Research in Yoga",
      subtitle: "Yoga Research for Community Wellness",
      description:
        "Our yoga research initiatives are dedicated to exploring the impact of yoga on community wellness. By conducting studies and gathering data, we aim to deepen the understanding of how yoga practices can enhance physical, mental, and emotional health within diverse populations. Our research supports the development of effective yoga programs that promote overall well-being and foster a healthier, more resilient community.",
      linkLabel: "Effect of Sun Salutations in Weight Management (2021)",
      linkHref:
        "https://dd2d9bdb-5f32-4269-8234-afbc6b75c7cf.usrfiles.com/ugd/071d3d_fdec1d403fa14f45a7e9b29fc1d1994f.pdf",
    },
    {
      title: "Workshops for Āsana, Prāṇāyāma, and Meditation",
      subtitle: "Yoga Workshops Tailored to Your Needs",
      description:
        "We offer a variety of specialized yoga workshops designed to address different needs and interests. Whether you're looking to manage a health condition or deepen your practice, our workshops provide the tools and knowledge you need.",
      bullets: [
        "Therapeutic Yoga focused on specific conditions like back pain, diabetes, and more",
        "Asanas to deepen understanding and practice of yoga postures",
        "Meditation techniques to enhance mindfulness and inner peace",
        "Pranayama practices that explore the power of breath control",
      ],
    },
    {
      title: "Yoga Teacher Certification",
      subtitle: "Yoga Teacher Training Certification Based on Yoga Philosophy",
      description:
        "Our Yoga Teacher Training Certification program is deeply rooted in the philosophy of yoga, offering a comprehensive and immersive learning experience. This program goes beyond the physical practice, delving into the ancient teachings, ethics, and principles that form the heart of yoga. Whether you’re aspiring to become a certified yoga teacher or seeking to enrich your personal practice, our training provides the knowledge and skills to teach with authenticity and wisdom.",
    },
    {
      title: "Special Events for Nonprofits",
      subtitle: "Special Yoga Events for Non-Profit Organizations",
      description:
        "We proudly offer tailored yoga events for non-profit organizations, designed to support your mission and enhance the well-being of your community. These events can be customized to suit the specific needs and goals of your organization, whether you're looking to promote wellness, raise awareness, or simply provide a calming and restorative experience for your participants.",
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="What We Offer"
        title="Services"
        description="Thoughtfully designed yoga offerings rooted in authentic philosophy, practical learning, and community well-being."
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {offerings.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[28px] border border-subodhBlue/10 bg-gradient-to-br from-white to-subodhBackground p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-full border border-subodhOrange/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-subodhOrange">
                  Featured Program
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-subodhBlue md:text-3xl">
                  {item.title}
                </h2>

                <p className="mt-3 text-base font-semibold text-subodhText/80">
                  {item.subtitle}
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-subodhText/75">
                  {item.description}
                </p>

                <div className="mt-8">
                  <Link
                    href={item.href!}
                    className="inline-flex items-center rounded-full bg-subodhBlue px-5 py-3 text-sm font-semibold text-white transition hover:bg-subodhOrange"
                  >
                    {item.cta}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-subodhBlue/10 pt-10">
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-subodhOrange">
              Additional Programs
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {offerings.slice(2).map((item, i) => (
                <div
                  key={i}
                  className="flex h-full flex-col rounded-[28px] border border-subodhBlue/8 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-subodhBackground text-subodhOrange">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6l4 2M12 3a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-subodhBlue">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-subodhOrange/80">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 leading-7 text-subodhText/75">{item.description}</p>

                  {item.bullets && (
                    <ul className="mt-6 space-y-3">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-subodhOrange">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="text-subodhText/75">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.linkHref && item.linkLabel && (
                    <div className="mt-6">
                      <a
                        href={item.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-subodhOrange transition hover:text-subodhBlue"
                      >
                        {item.linkLabel}
                        <span className="ml-2">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}