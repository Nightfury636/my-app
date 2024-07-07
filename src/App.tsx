// src/App.tsx

import React from 'react';
import PostForm from './PostForm';
import './PostForm.css';

const App: React.FC = () => {
  return (
      <div className="App">
        <h1>Create a New Post</h1>
        <PostForm />
      </div>
  );
};

export default App;
