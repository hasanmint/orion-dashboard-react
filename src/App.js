import logo from './logo.svg';
import './App.css';
import Home from './components/Dashboard/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/Dashboard/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
