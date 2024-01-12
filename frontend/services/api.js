import axios from 'axios';

const createLand = async (payload) => {
  try {
    const response = await axios.post('http://localhost:1234/land', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { createLand };