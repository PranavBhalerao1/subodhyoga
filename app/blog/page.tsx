import Section from '@/components/Section';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import { posts } from '@/lib/posts';

export const metadata = {
    title: "Blog | Subodh Yoga",
    description: "Read the latest insights on yoga, health, and mindfulness.",
};

export default function Blog() {
    return (
        <div>
            <Hero
                title="Journal"
                subtitle="Insights on living a balanced and aware life."
            />

            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </Section>
        </div>
    );
}
