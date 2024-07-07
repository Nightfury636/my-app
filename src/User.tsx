import React, { Component } from 'react';

interface IUser {
    id: number;
    name: string;
    email: string;
    // інші поля, які вам потрібні
}

interface UserProps {
    user: IUser;
    onUserSelect: (userId: number) => void;
}

class User extends Component<UserProps> {
    handleSelect = () => {
        console.log('User ID to select:', this.props.user.id); // Debug
        this.props.onUserSelect(this.props.user.id);
    };

    render() {
        const { user } = this.props;

        return (
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <button onClick={this.handleSelect}>View Posts</button>
            </div>
        );
    }
}

export default User;
