import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneralHeader from './pages/GeneralHeader';
import GeneralHomeView from './pages/GeneralHomeView';
import HomeView from './pages/daily_report/HomeView';
import DetailView from './pages/daily_report/DetailView';
import ProfileView from './pages/profile/ProfileView';
import Page404 from "./pages/Page404";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <GeneralHeader />
        <div>
          <Routes>
            <Route path="/" element={<GeneralHomeView />} />
            <Route path="/daily_report" element={<HomeView />} />
            <Route path="/daily_report/:id" element={<DetailView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
