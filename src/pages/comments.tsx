import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comments: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setComments(response.data);
            });
    }, []);

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.name} ({comment.email})</h3>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
