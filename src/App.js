import logo from './logo.svg';
import './App.css';
import Home from './components/Dashboard/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/Dashboard/About';

function App() {
  return (
    <div className="App">
      <h2>Welcome to Onion Dashboard</h2>
      <h3>Welcome to React Router!</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
