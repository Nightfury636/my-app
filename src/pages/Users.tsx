import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            });
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.username}) - {user.email}
                        <Link to={`/user-posts/${user.id}`}>View Posts</Link> {/* Ссылка на посты пользователя */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
