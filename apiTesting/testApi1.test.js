import { MainApi } from "./mainClass.js";

describe('JSONPlaceholder API Tests', () => {
    const api = new MainApi();

    test('GET request - retrieve post by ID', async () => {
        const response = await api.getPost(1);
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('id', 1);
        expect(response.data).toHaveProperty('title');
        expect(response.data).toHaveProperty('body');
    });

    test('POST request - create new post', async () => {
        const postData = { title: 'New Title', body: 'New Body', userId: 1 };
        const response = await api.createPost(postData);

        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');

    });

    test('GET request - retrieve list of all posts', async () => {
        const response = await api.api.get('/posts');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
    });

    test('POST request - create post with data validation', async () => {
        const postData = { title: 'Second Title', body: 'Second Body', userId: 2 };
        const response = await api.createPost(postData);

        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(postData);
    });

    test('GET request - retrieve comments for a post', async () => {
        const response = await api.api.get('/posts/1/comments');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data[0]).toHaveProperty('postId', 1);
    });
});
