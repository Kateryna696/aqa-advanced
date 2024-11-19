import { makeRequest } from './task2_headers_params';

describe('Testing Request Headers', () => {
  it('Send request with custom headers and params', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const headers = {
      'Custom-Header': 'TestHeaderValue',
    };
    const params = {
      userId: 1,
    };

    const response = await makeRequest(url, headers, params);
    expect(Array.isArray(response)).toBe(true);
    expect(response[0]).toHaveProperty('userId', 1);
  });
});
