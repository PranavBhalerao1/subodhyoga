import Section from '@/components/Section';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Contact | Subodh Yoga",
    description: "Get in touch with us for classes, workshops, or private sessions.",
};

export default function Contact() {
    return (
        <div>
            <Hero
                title="Get in Touch"
                subtitle="We&apos;re here to answer your questions and support your journey."
            />

            <Section className="bg-white">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-subodhBlue mb-4">Send us a Message</h2>
                        <p className="text-subodhText opacity-70 leading-relaxed">
                            Have a question about our classes or want to discuss private coaching? Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </Section>
        </div>
    );
}
