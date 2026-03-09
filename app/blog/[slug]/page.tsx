import Section from '@/components/Section';
import Link from 'next/link';
import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Subodh Yoga`,
        description: post.preview,
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen">
            <div className="bg-subodhBackground py-24 sm:py-32">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link href="/blog" className="text-subodhOrange font-bold mb-8 inline-flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Journal
                    </Link>
                    <p className="text-sm font-bold text-subodhOrange opacity-60 uppercase tracking-widest mb-6">
                        {post.date}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-subodhBlue tracking-tight leading-tight">
                        {post.title}
                    </h1>
                </div>
            </div>

            <Section className="bg-white">
                <div className="max-w-2xl mx-auto">
                    <div
                        className="prose prose-lg prose-slate max-w-none text-subodhText opacity-80 leading-relaxed space-y-8"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-20 pt-12 border-t border-subodhBackground flex justify-between items-center">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-subodhOrange/10 rounded-full flex items-center justify-center text-subodhOrange font-bold">SY</div>
                            <div>
                                <p className="text-sm font-bold text-subodhBlue">Subodh Yoga Team</p>
                                <p className="text-xs text-subodhText opacity-40">Guiding your inner journey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </article>
    );
}
