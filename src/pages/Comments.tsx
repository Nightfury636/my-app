import React, { useEffect, useState } from 'react';

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => setComments(data));
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                        <p><em>{comment.email}</em></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
