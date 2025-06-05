import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CreatePostPage from './pages/CreatePostPage';
import PostList from './components/PostList';

import { UserProvider } from './context/UserContext'; // 👈 Import UserProvider

function App() {
  return (
    <UserProvider> {/* 👈 Wrap everything inside */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/posts" element={<PostList />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
