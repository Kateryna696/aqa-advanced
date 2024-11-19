import axios, { AxiosInstance } from 'axios';


export async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Error: Received status code ${error.response.status}`;
    } else if (error.request) {
      return 'Error: No response received from the server';
    } else {
      return `Error: ${error.message}`;
    }
  }
}