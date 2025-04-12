import { FreqAnalysisTool } from '../../components/story/FreqAnalysisTool';
import { getStories } from '../../stories/stories';

function StoryPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const storyId = searchParams.get('id') || '0';

  const storyContent = getStories()[storyId];

  return (
    <div>
      <h1>Welcome to the Story Page!</h1>
      <FreqAnalysisTool text={storyContent} />
    </div>
  );
}

export default StoryPage;
