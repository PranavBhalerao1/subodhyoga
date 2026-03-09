export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    preview: string;
    content: string;
}

export const posts: BlogPost[] = [
    {
        id: "1",
        slug: "finding-inner-peace-through-yoga",
        title: "Finding Inner Peace Through Yoga",
        date: "2024-03-01",
        preview: "Discover how a daily yoga practice can transform your mental clarity and emotional stability.",
        content: `
      <p>Yoga is more than just physical exercise; it's a journey into the self. In today's fast-paced world, finding moments of stillness can be challenging. However, through the practice of Asanas and Pranayama, we can bridge the gap between our physical and mental states.</p>
      <p>The breath is the most powerful tool we have. By focusing on deep, conscious inhales and exhales, we signal our nervous system to transition from a state of fight-or-flight to rest-and-digest.</p>
      <p>In this post, we'll explore three simple poses you can do at home to immediately reduce stress and find your center.</p>
    `,
    },
    {
        id: "2",
        slug: "the-power-of-breathwork",
        title: "The Power of Breathwork",
        date: "2024-03-05",
        preview: "Learn the fundamentals of Pranayama and how controlled breathing improves physical health.",
        content: `
      <p>Pranayama, the ancient art of breathing, is central to any yogic journey. While most of us breathe automatically, few of us breathe optimally.</p>
      <p>Deep diaphragmatic breathing increases oxygen intake, improves lung capacity, and helps regulate heart rate variability. It is the foundation of energy management in the body.</p>
      <p>Join us as we break down the 'Box Breathing' technique, a favorite among athletes and meditators alike for high-performance focus and relaxation.</p>
    `,
    },
    {
        id: "3",
        slug: "yoga-for-flexibility-and-strength",
        title: "Yoga for Flexibility and Strength",
        date: "2024-03-10",
        preview: "Why balancing strength and flexibility is crucial for long-term joint health and vitality.",
        content: `
      <p>Many beginners think yoga is only about being flexible. While flexibility is a wonderful byproduct, yoga is equally about building functional strength.</p>
      <p>Traditional weightlifting often focuses on isolated muscle groups. Yoga, on the other hand, utilizes complex, full-body movements that engage stabilizing muscles and improve proprioception.</p>
      <p>A balanced practice ensures that your joints are protected by strong muscles while maintaining the range of motion necessary for a pain-free life.</p>
    `,
    },
];
