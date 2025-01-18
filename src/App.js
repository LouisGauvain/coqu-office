import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import React, { useContext } from "react";

import Home from "./components/Home";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profil from "./components/Profil";
import Reservation from './components/Reservation';
import ConfigWidget from './components/ConfigWidget';


import './style/css/main.css';

const App = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <Router>
        <Header />
        <Routes>
          <>
            <Route path="/" element={<Auth />} />
          </>
        </Routes>
      </Router>
    )
  }

  return (
    <Router>
      {user && <>
        <Header />
        <Sidebar />
      </>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/ConfigWidget" element={<ConfigWidget />} />
      </Routes>
    </Router>
  );
};

export default App;
