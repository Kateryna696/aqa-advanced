import axios, { AxiosInstance } from 'axios';
import { fetchData } from './task3_mocking';

jest.mock('axios');

describe('Mocking Axios ', () => {
  it('Success', async () => {
    const mockResponse = { data: { success: true } };

    axios.get.mockResolvedValue(mockResponse);

    const data = await fetchData('https://example.com/success');
    expect(data).toEqual({ success: true });
  });

  it('Error 404', async () => {
    axios.get.mockRejectedValue({
      response: {
        status: 404,
      },
    });

    const errorMessage = await fetchData('https://example.com/not-found');
    expect(errorMessage).toBe('Error: Received status code 404');
  });

  it('Error: No response received from the server ', async () => {
    axios.get.mockRejectedValue({
      request: {},
    });

    const errorMessage = await fetchData('https://example.com/no-response');
    expect(errorMessage).toBe('Error: No response received from the server');
  });

  it('Error: Network Error', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    const errorMessage = await fetchData('https://example.com/network-error');
    expect(errorMessage).toBe('Error: Network Error');
  });
});
