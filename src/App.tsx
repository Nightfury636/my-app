import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './pages/users';
import Posts from './pages/posts';
import Comments from './pages/comments';
import UserPosts from './pages/UserPosts';

const App: React.FC = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/posts">Posts</Link></li>
              <li><Link to="/comments">Comments</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/user-posts/:userId" element={<UserPosts />} /> {/* Новый маршрут */}
          </Routes>
        </div>
      </Router>
  );
};

export default App;
