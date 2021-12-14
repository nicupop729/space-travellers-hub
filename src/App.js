import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';

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
