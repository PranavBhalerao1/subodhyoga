import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Contact | Subodh Yoga",
    description: "Get in touch with us for classes, workshops, or private sessions.",
};

export default function Contact() {
    return (
        <div>
            <PageHero
                eyebrow="Connect"
                title="Get in Touch"
                description="We&apos;re here to answer your questions and support your journey. Whether you&apos;re a beginner or returning to the mat."
            />

            <Section className="bg-white">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-subodhBlue mb-4">Send us a Message</h2>
                        <p className="text-subodhText opacity-70 leading-relaxed">
                            Have a question about our classes or want to know more about our services? Fill out the form below and we'll get back to you as soon as possible!
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </Section>
        </div>
    );
}
