import React, { useEffect, useState } from 'react';
import User from './User';
import { userService } from '../services/userService';

interface UsersProps {
    onSelectUser: (userId: number) => void;
}

function Users({ onSelectUser }: UsersProps) {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await userService.getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="Users">
            <h2>Users</h2>
            {users.map(user => (
                <User key={user.id} user={user} onSelectUser={onSelectUser} />
            ))}
        </div>
    );
}

export default Users;
