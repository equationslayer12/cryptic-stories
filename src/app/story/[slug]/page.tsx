import { allStories } from '@/lib/stories';
import { redirect } from 'next/navigation';

export default async function Story({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const storyName = (await params).slug;
  const storyContent = allStories[storyName];
  if (!storyContent) redirect('/');

  return (
    <>
      <h1>story name: {storyName}</h1>
      <p>{storyContent}</p>
    </>
  );
}
