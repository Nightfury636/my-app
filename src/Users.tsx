import React, { Component } from 'react';
import User from './User';

interface IUser {
    id: number;
    name: string;
    email: string;
    // інші поля, які вам потрібні
}

interface UsersProps {
    users: IUser[];
    onUserSelect: (userId: number) => void;
}

class Users extends Component<UsersProps> {
    render() {
        const { users, onUserSelect } = this.props;

        return (
            <div>
                {users.map(user => (
                    <User key={user.id} user={user} onUserSelect={onUserSelect} />
                ))}
            </div>
        );
    }
}

export default Users;
