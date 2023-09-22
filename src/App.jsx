import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Home from './components/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Place from './pages/Place';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/*" element={<Discover />} />
        <Route path="/place/:index" element={<Place />} />
      </Routes>
    </Router>
  );
}

export default App;
