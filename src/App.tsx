import React, { Component } from 'react';
import axios from 'axios';
import Users from './Users';

interface IUser {
    id: number;
    name: string;
    email: string;
    // інші поля, які вам потрібні
}

interface IPost {
    id: number;
    title: string;
    body: string;
    // інші поля, які вам потрібні
}

interface AppState {
    users: IUser[];
    selectedUserId: number | null;
    posts: IPost[];
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [],
            selectedUserId: null,
            posts: []
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/users');
            console.log('Fetched users:', response.data.users); // Debug
            this.setState({ users: response.data.users });
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    fetchPostsByUserId = async (userId: number) => {
        try {
            const response = await axios.get(`https://dummyjson.com/posts/user/${userId}`);
            console.log('Fetched posts:', response.data.posts); // Debug
            this.setState({ posts: response.data.posts });
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    handleUserSelect = (userId: number) => {
        console.log('Selected user ID:', userId); // Debug
        this.setState({ selectedUserId: userId }, () => {
            this.fetchPostsByUserId(userId);
        });
    };

    render() {
        const { users, posts, selectedUserId } = this.state;

        return (
            <div>
                <h1>Users</h1>
                <Users users={users} onUserSelect={this.handleUserSelect} />
                {selectedUserId && (
                    <div>
                        <h2>Posts by User {selectedUserId}</h2>
                        <ul>
                            {posts.map(post => (
                                <li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
