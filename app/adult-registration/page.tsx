import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

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
            <form
              method="POST"
              action="https://formspree.io/f/xbdzapgv"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold text-subodhBlue"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-subodhBlue"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-subodhBlue"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(123) 456-7890"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experienceLevel"
                    className="mb-2 block text-sm font-semibold text-subodhBlue"
                  >
                    Experience Level
                  </label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
                  >
                    <option value="" disabled>
                      Select your level
                    </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-semibold text-subodhBlue"
                >
                  Why are you interested in joining?
                </label>
                <textarea
                  id="interest"
                  name="interest"
                  rows={5}
                  placeholder="Tell us a little about your goals and what you hope to learn."
                  className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
                />
              </div>

              <div>
                <label
                  htmlFor="healthNotes"
                  className="mb-2 block text-sm font-semibold text-subodhBlue"
                >
                  Any health concerns or notes?
                </label>
                <textarea
                  id="healthNotes"
                  name="healthNotes"
                  rows={4}
                  placeholder="Share any injuries, limitations, or notes we should know about."
                  className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-subodhText outline-none transition focus:border-subodhOrange focus:ring-2 focus:ring-subodhOrange/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-subodhBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-subodhOrange sm:w-auto"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}