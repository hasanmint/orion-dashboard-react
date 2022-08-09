import logo from './logo.svg';
import './App.css';
import Home from './components/Dashboard/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/Dashboard/About';
import Dashboard from './components/Dashboard/Dashboard';
import Planets from './components/Dashboard/Planets';
import Messages from './components/Dashboard/Messages';
import Profile from './components/Dashboard/Main/Profile';
import Settings from './components/Dashboard/Main/Settings';
import Notfound from './components/Dashboard/Notfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="planets" element={<Planets />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings " element={<Settings />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
