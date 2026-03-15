import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import BlogCard from '@/components/BlogCard';
import ContactForm from '@/components/ContactForm';
import { posts } from '@/lib/posts';

export default function Home() {
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      <Hero
        title="Subodh Yoga"
        subtitle="Yoga Made Simpler!"
        showCTA
      />

      {/* Intro Video */}
      <Section
        title="What is Subodh Yoga?"
        subtitle="Get a quick introduction to Subodh Yoga and our approach."
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VWvo4CkoQGE"
              title="What is Subodh Yoga?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section
        title="What We Offer"
        subtitle="Tailored sessions to meet your unique health and spiritual goals."
        className="bg-subodhBackground"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Foundational Yoga', desc: 'Perfect for beginners looking to establish a safe and effective practice.' },
            { title: 'Mindfulness Meditation', desc: 'Guided sessions focused on breath control and mental stillness.' },
            { title: 'Hatha Flow', desc: 'Dynamic movements designed to build strength and flexibility.' }
          ].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-subodhBlue/5 shadow-sm text-center group hover:border-subodhOrange/20 transition-all">
              <h3 className="text-xl font-bold text-subodhBlue mb-4 group-hover:text-subodhOrange transition-colors">{service.title}</h3>
              <p className="text-subodhText opacity-60 text-sm mb-6">{service.desc}</p>
              <Link href="/services" className="text-subodhOrange font-bold hover:text-subodhOrange-dark transition-colors">Details</Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Blog Preview */}
      <Section
        title="Insights & Inspiration"
        subtitle="Recent stories and guides from our yoga community."
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog" className="px-8 py-4 bg-subodhOrange text-white font-bold rounded-xl hover:bg-subodhOrange-dark transition-all">
            View All Posts
          </Link>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        title="Start Your Journey"
        subtitle="Have questions? Ready to book a session? We&apos;d love to hear from you."
        className="bg-accent"
        id="contact"
      >
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
