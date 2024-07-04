// src/services/postService.ts
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const postService = {
    getPostsByUserId: async (userId: number) => {
        const response = await axios.get<any[]>(`${BASE_URL}/posts?userId=${userId}`);
        return response.data;
    }
};
