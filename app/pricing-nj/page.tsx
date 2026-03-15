import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata = {
  title: 'Pricing | Edison, NJ Center | Subodh Yoga',
  description:
    'Pricing options for the Edison, NJ Little Yogi Academy program.',
};

const plans: {
  title: string;
  price: string;
  period: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  href: string;
  featured: boolean;
  badge?: string;
}[] = [
    {
      title: 'Monthly Plan',
      price: '$70',
      period: 'Monthly',
      description: 'From September 2026 through June 2027',
      bullets: [
        'Price per month / person',
        '10% discount on each sibling',
        'Low-cost flexible option',
        'No refund policy',
      ],
      ctaLabel: 'Register Now',
      href: 'https://forms.gle/44B9tCx8x8kSV4WVA',
      featured: false,
    },
    {
      title: 'Yearly Plan',
      price: '$500',
      period: 'Yearly',
      description: 'From September 2026 through June 2027',
      badge: 'Best Value',
      bullets: [
        'Annual price / person',
        '10% discount on each sibling',
        '20% overall savings',
        'No refund policy',
      ],
      ctaLabel: 'Register Now',
      href: 'https://forms.gle/44B9tCx8x8kSV4WVA',
      featured: true,
    },
  ];

export default function PricingNjPage() {
  return (
    <div>
      <PageHero
        eyebrow='Little Yogi Academy'
        title='Pricing'
        description='Choose the plan that works best for your family for the Edison, NJ center.'
      />

      <Section className='bg-white'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`relative flex h-full flex-col rounded-[28px] border p-7 shadow-sm sm:p-9 ${plan.featured
                  ? 'border-subodhOrange/30 bg-gradient-to-b from-subodhBackground/70 to-white shadow-[0_14px_36px_rgba(40,52,114,0.10)]'
                  : 'border-subodhBlue/10 bg-white'
                }`}
            >
              {plan.badge && (
                <div className='absolute right-6 top-6'>
                  <span className='inline-flex rounded-full border border-subodhOrange/30 bg-subodhOrange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-subodhOrange'>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h2 className='text-2xl font-bold text-subodhBlue sm:text-3xl'>
                  {plan.title}
                </h2>
                <div className='mt-4 flex items-end gap-2'>
                  <p className='text-4xl font-bold tracking-tight text-subodhBlue'>
                    {plan.price}
                  </p>
                  <p className='pb-1 text-sm font-medium uppercase tracking-[0.12em] text-subodhText/60'>
                    {plan.period}
                  </p>
                </div>
                <p className='mt-4 text-sm leading-7 text-subodhText/70 sm:text-base'>
                  {plan.description}
                </p>
              </div>

              <ul className='mt-7 space-y-3 border-t border-subodhBlue/10 pt-6'>
                {plan.bullets.map((item) => (
                  <li key={item} className='flex items-start gap-3 text-subodhText/80'>
                    <span
                      className='mt-2 h-2.5 w-2.5 rounded-full bg-subodhOrange'
                      aria-hidden='true'
                    />
                    <span className='leading-7'>{item}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-8'>
                <a
                  href={plan.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition sm:w-auto ${plan.featured
                      ? 'bg-subodhOrange text-white hover:bg-subodhBlue'
                      : 'bg-subodhBlue text-white hover:bg-subodhOrange'
                    }`}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className='bg-white pt-0'>
        <div className='mx-auto max-w-5xl rounded-[28px] border border-subodhBlue/10 bg-gradient-to-r from-subodhBackground to-white p-7 shadow-sm sm:p-9'>
          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
            <p className='max-w-3xl text-base leading-7 text-subodhText/75 sm:text-lg'>
              Sibling discounts are available. Please contact us with any
              questions about registration or pricing.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center rounded-full bg-subodhBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-subodhOrange'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
