import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route exact path="/missions" element={<Missions />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  </div>
);

export default App;
