import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import OptionCalculator from './pages/OptionCalculator';
import CongressionalTracker from './pages/CongressionalTracker';
import TradingBot from './pages/TradingBot';
import News from './pages/News';

function App() {
  return (
    <Router>
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/1669/1669386.png" alt="logo" />
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/option-calculator">Option Calculator</Link>
          </li>
          <li>
            <Link to="/congressional-tracker">Congressional Tracker</Link>
          </li>
          <li>
            <Link to="/trading-bot">Trading Bot</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>

        <div className="rightNav">
          <input type="text" name="search" id="search" />
          <button className="btn btn-sm">Search</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/option-calculator" element={<OptionCalculator />} />
        <Route path="/congressional-tracker" element={<CongressionalTracker />} />
        <Route path="/trading-bot" element={<TradingBot />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;