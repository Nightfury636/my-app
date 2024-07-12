import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
}

const UserPosts: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => {
                setPosts(response.data);
            });
    }, [userId]);

    return (
        <div>
            <h2>User Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;
