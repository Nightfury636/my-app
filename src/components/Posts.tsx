import React from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostsProps {
    posts: Post[];
}

function Posts({ posts }: PostsProps) {
    return (
        <div className="Posts">
            <h2>Posts</h2>
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
}

export default Posts;
