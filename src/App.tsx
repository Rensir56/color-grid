import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home.tsx'
import Grid from './Grid.tsx';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grid" element={<Grid />} />
        </Routes>
    </>
  );
}

export default App;
