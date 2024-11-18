import axios, { AxiosInstance } from 'axios';

export async function makeRequest(url, headers, params) {
  try {
    const response = await axios.get(url, {
      headers,
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

