// src/services/userService.ts
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const userService = {
    getUsers: async () => {
        const response = await axios.get<any[]>(`${BASE_URL}/users`);
        return response.data;
    }
};
