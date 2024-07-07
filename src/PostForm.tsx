
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';


interface IFormInput {
    title: string;
    body: string;
    userId: number;
}

const PostForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            console.log(response.data);
            alert('Post created successfully!');
        } catch (error) {
            console.error('Error creating post', error);
            alert('Failed to create post.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="post-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input id="title" {...register('title', { required: true })} />
                {errors.title && <span className="error">Title is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea id="body" {...register('body', { required: true })}></textarea>
                {errors.body && <span className="error">Body is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="userId">User ID</label>
                <input id="userId" type="number" {...register('userId', { required: true })} />
                {errors.userId && <span className="error">User ID is required</span>}
            </div>

            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;
