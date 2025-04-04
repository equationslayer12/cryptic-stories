import { Route, Routes } from 'react-router-dom';
import StoryPage from './pages/story/StoryPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/cryptic-stories/' element={<HomePage />} />
        <Route path='/cryptic-stories/story' element={<StoryPage />} />
      </Routes>
    </>
  );
}

export default App;
