import { allStories } from '@/lib/stories';
import { notFound } from 'next/navigation'; // Import notFound as another option

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const storySlugs = Object.keys(allStories);

  return storySlugs.map((storySlug) => ({
    slug: storySlug,
  }));
}

export default async function Story({ params }: { params: { slug: string } }) {
  const storyName = params.slug;
  const storyContent = allStories[storyName];
  if (!storyContent) {
    notFound();
  }

  return (
    <>
      <h1>story name: {storyName}</h1>
      <p>{storyContent}</p>
    </>
  );
}
