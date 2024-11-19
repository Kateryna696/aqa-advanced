import axios, { AxiosInstance } from 'axios';


export async function sendInvalidRequest() {
  try {
    await axios.get('https://this-is-an-invalid-url.com/invalid-endpoint');
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

