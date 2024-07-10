import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Comments from './pages/Comments';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link to="/comments">Comments</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/comments" element={<Comments />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
