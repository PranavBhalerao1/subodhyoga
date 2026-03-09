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
      />

      {/* About Preview */}
      <Section
        title="Discover Your Core"
        subtitle="At Subodh Yoga, we believe yoga is a journey inward. Our practice focuses on the intersection of physical vitality and mental clarity."
        className="bg-white"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-subodhBlue">A Holistic Approach</h3>
            <p className="text-subodhText opacity-80 leading-relaxed">
              Founded on the principles of traditional wisdom and modern science, Subodh Yoga provides a sanctuary for individuals seeking to reconnect with their breath and body. Whether you are a beginner or a seasoned practitioner, our classes are designed to challenge you while providing the peace you need.
            </p>
            <Link href="/about" className="inline-block text-subodhOrange font-bold border-b-2 border-subodhOrange/20 hover:border-subodhOrange transition-all pb-1">
              Learn more about our philosophy
            </Link>
          </div>
          <div className="flex-1 bg-subodhBackground rounded-3xl aspect-[4/3] w-full flex items-center justify-center text-subodhOrange/20">
            {/* Placeholder for an image */}
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
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
