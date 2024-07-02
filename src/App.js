import "./styles/main.css";
import { Route, Routes } from 'react-router-dom';

import * as React from 'react';
import Teams from "./pages/Teams";
import Leagues from "./pages/Leagues";
import LeagueCalendar from "./pages/LeagueCalendar";
import TeamCalendar from "./pages/TeamCalendar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Leagues />}/>
        <Route path="/teams" element={<Teams />}/>
        <Route path="/leagueCalendar" element={<LeagueCalendar />}/>
        <Route path="/teamCalendar" element={<TeamCalendar />}/>
      </Routes>
    </div>
  )
}

export default App;
