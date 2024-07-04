// src/components/User.tsx
import React from 'react';

interface UserProps {
    user: {
        id: number;
        name: string;
        email: string;
    };
    onSelectUser: (userId: number) => void;
}

const User: React.FC<UserProps> = ({ user, onSelectUser }) => {
    const handleClick = () => {
        onSelectUser(user.id);
    };

    return (
        <div>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <button onClick={handleClick}>Show Posts</button>
        </div>
    );
};

export default User;
