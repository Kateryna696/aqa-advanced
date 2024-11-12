import axios, { AxiosInstance } from 'axios';

export class MainApi {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });

        this.api.interceptors.request.use(request => {
            console.log('Request:', request.method?.toUpperCase(), request.url, request.data || '');
            return request;
        });

        this.api.interceptors.response.use(
            response => {
                console.log('Response:', response.status, response.data);
                return response;
            },
            error => {
                console.error('Response error:', error);
                return Promise.reject(error);
            }
        );
    }

    async getPost(postId) {
        return this.api.get(`/posts/${postId}`);
    }

    async createPost(data) {
        return this.api.post('/posts', data);
    }
}