import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export const metadata = {
  title: 'Edison, NJ Center | Subodh Yoga',
  description:
    'Information about the Edison, NJ Little Yogi Academy center, including schedule, location, and registration.',
};

const locationDetails = [
  {
    label: 'Schedule',
    value: 'Sunday 10:00 - 11:00 AM',
    href: null,
  },
  {
    label: 'Address',
    value: 'MSquare Studio, 216 Tingley Ln, Edison, NJ 08820',
    href: null,
  },
  {
    label: 'Phone',
    value: '848-336-5126',
    href: 'tel:8483365126',
  },
  {
    label: 'Email',
    value: 'info@subodhyoga.org',
    href: 'mailto:info@subodhyoga.org',
  },
];

export default function EdisonNjPage() {
  return (
    <div>
      <PageHero
        eyebrow='Little Yogi Academy'
        title='Edison, NJ Center'
        description='Program details, schedule, and registration information for our Edison location.'
      />

      <Section className='bg-white'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10'>
          <article className='rounded-[28px] border border-subodhBlue/10 bg-white p-7 shadow-sm sm:p-9'>
            <h2 className='text-2xl font-bold text-subodhBlue sm:text-3xl'>
              Academic Calendar for 2026-27
            </h2>
            <p className='mt-4 text-sm leading-7 text-subodhText/70 sm:text-base'>
              *Aligned with Edison &amp; Woodbridge, NJ school district calendar
              for 2026-27 academic year.
            </p>

            <div className='mt-7 rounded-[24px] border border-subodhBlue/10 bg-gradient-to-br from-subodhBackground/80 to-white p-6 sm:p-8'>
              <div className='rounded-[20px] border border-subodhBlue/10 bg-white p-5 shadow-sm'>
                <div className='flex items-center justify-between border-b border-subodhBlue/10 pb-4'>
                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.18em] text-subodhOrange'>
                      2026–27 Academic Calendar
                    </p>
                    <p className='mt-1 text-lg font-bold text-subodhBlue'>
                      Edison &amp; Woodbridge Alignment
                    </p>
                  </div>

                  <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-subodhBackground text-subodhBlue'>
                    <svg
                      className='h-5 w-5'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.8'
                      aria-hidden='true'
                    >
                      <path
                        d='M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2Z'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </div>

                <div className='mt-5 grid grid-cols-7 gap-2 text-center text-xs font-medium text-subodhText/60'>
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                    <div key={day} className='py-2'>
                      {day}
                    </div>
                  ))}
                </div>

                <div className='mt-2 grid grid-cols-7 gap-2'>
                  {Array.from({ length: 35 }).map((_, i) => {
                    const isHighlighted = [2, 6, 11, 15, 20, 24, 29, 32].includes(i);
                    const isMuted = [0, 1, 33, 34].includes(i);

                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-xl border p-2 text-left text-[11px] font-medium transition ${isHighlighted
                            ? 'border-subodhOrange/30 bg-subodhOrange/10 text-subodhBlue'
                            : isMuted
                              ? 'border-subodhBlue/5 bg-subodhBackground/20 text-subodhText/30'
                              : 'border-subodhBlue/8 bg-subodhBackground/40 text-subodhText/55'
                          }`}
                      >
                        <div>{(i % 31) + 1}</div>
                        {isHighlighted && (
                          <div className='mt-1 h-1.5 w-6 rounded-full bg-subodhOrange/60' />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className='mt-6 flex flex-wrap gap-3 border-t border-subodhBlue/10 pt-4 text-xs text-subodhText/65'>
                  <div className='inline-flex items-center gap-2'>
                    <span className='h-2.5 w-2.5 rounded-full bg-subodhOrange/60' />
                    Important dates
                  </div>
                  <div className='inline-flex items-center gap-2'>
                    <span className='h-2.5 w-2.5 rounded-full bg-subodhBackground border border-subodhBlue/10' />
                    Weekly schedule view
                  </div>
                </div>
              </div>
            </div>
          </article>

          <aside className='rounded-[28px] border border-subodhBlue/10 bg-gradient-to-b from-subodhBackground/70 to-white p-7 shadow-sm sm:p-9'>
            <h2 className='text-2xl font-bold text-subodhBlue'>Register Here</h2>
            <p className='mt-4 leading-7 text-subodhText/75'>
              Click Register to complete registration for the 2026-27 academic
              year.
            </p>
            <p className='mt-2 font-medium text-subodhText/85'>
              Age Limit: 8-13 years old.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <a
                href='https://forms.gle/44B9tCx8x8kSV4WVA'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center rounded-full bg-subodhBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-subodhOrange'
              >
                Register
              </a>
              <Link
                href='/pricing-nj'
                className='inline-flex items-center justify-center rounded-full border border-subodhBlue/20 bg-white px-6 py-3 text-sm font-semibold text-subodhBlue transition hover:border-subodhOrange hover:bg-subodhOrange hover:text-white'
              >
                Price Details
              </Link>
            </div>

            <div className='mt-8 border-t border-subodhBlue/10 pt-7'>
              <h3 className='text-xl font-bold text-subodhBlue'>Location</h3>
              <ul className='mt-5 space-y-4'>
                {locationDetails.map((item) => (
                  <li key={item.label} className='flex items-start gap-3'>
                    <span
                      className='mt-2 h-2.5 w-2.5 rounded-full bg-subodhOrange'
                      aria-hidden='true'
                    />
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wide text-subodhBlue/70'>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className='mt-1 inline-block leading-7 text-subodhText/80 transition hover:text-subodhOrange'
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className='mt-1 leading-7 text-subodhText/80'>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section className='bg-white pt-0'>
        <div className='mx-auto max-w-5xl rounded-[28px] border border-subodhBlue/10 bg-gradient-to-r from-subodhBackground to-white p-7 shadow-sm sm:p-9'>
          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
            <p className='max-w-3xl text-base leading-7 text-subodhText/75 sm:text-lg'>
              Questions about placement, pricing, or class details? Contact us
              and we&apos;ll be happy to help.
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
