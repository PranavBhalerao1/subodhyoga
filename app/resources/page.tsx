import Section from '@/components/Section';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: "Resources | Subodh Yoga",
  description: "Free guides, yoga routines, and mindfulness tools.",
};

export default function Resources() {
  const resources = [
    {
      title: "Surya Namaskars Tips",
      type: "PDF Guide",
      desc: "A downloadable resource with tips and guidance for practicing Surya Namaskars.",
      href: "/surya-namaskars-tips.pdf",
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="Library"
        title="Resources"
        description="Helpful guides and downloadable materials to support your yoga practice beyond the mat."
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-5xl space-y-8">
          {resources.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-8 rounded-[28px] border border-subodhBlue/8 bg-subodhBackground p-6 shadow-sm md:grid-cols-[1.3fr_1fr] md:p-8"
            >
              <div className="flex flex-col self-start">
                <span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-subodhOrange">
                  {item.type}
                </span>

                <h3 className="mb-3 text-2xl font-bold text-subodhBlue">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-subodhText/70">
                  {item.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-subodhBlue px-5 py-3 text-sm font-semibold text-white transition hover:bg-subodhOrange"
                  >
                    View PDF
                    <span className="ml-2">↗</span>
                  </a>

                  <a
                    href={item.href}
                    download
                    className="inline-flex items-center rounded-full border border-subodhBlue/15 bg-white px-5 py-3 text-sm font-semibold text-subodhBlue transition hover:border-subodhOrange hover:text-subodhOrange"
                  >
                    Download
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-subodhBlue/10 bg-white">
                <object
                  data={item.href}
                  type="application/pdf"
                  className="h-[500px] w-full"
                  aria-label={item.title}
                >
                  <div className="flex h-full min-h-[300px] items-center justify-center p-6 text-center text-subodhText/70">
                    PDF preview is not available in this browser.
                  </div>
                </object>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}