import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import AdultRegistrationForm from '@/components/AdultRegistrationForm';

export const metadata = {
  title: 'Adult Registration | Subodh Yoga',
  description: 'Register for adult yoga classes at Subodh Yoga.',
};

export default function AdultRegistrationPage() {
  return (
    <div>
      <PageHero
        eyebrow="Register"
        title="Adult Registration"
        description="Complete the form below to register for adult yoga classes."
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-subodhBlue/10 bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <AdultRegistrationForm />
          </div>
        </div>
      </Section>
    </div>
  );
}