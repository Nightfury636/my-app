// src/App.tsx
import React, { useState } from 'react';
import Users from '../components/Users';
import { postService } from '../services/postService';

const App: React.FC = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [userPosts, setUserPosts] = useState<any[]>([]);

    const handleSelectUser = async (userId: number) => {
        try {
            const posts = await postService.getPostsByUserId(userId);
            setUserPosts(posts);
            setSelectedUserId(userId);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <div className="App">
            <h1>Users and Posts</h1>
            <Users onSelectUser={handleSelectUser} />
            {selectedUserId && (
                <div>
                    <h2>Posts by User {selectedUserId}</h2>
                    <ul>
                        {userPosts.map(post => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default App;
