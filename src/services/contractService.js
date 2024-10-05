import { API_URL } from '../constants/global/api';
import Cookies from 'js-cookie';
import axios from 'axios';

const PATH = 'api/contracts';
export const getAllContractsService = async () => {
  let token = Cookies.get('token');
  try {
    const response = await axios.get(`${API_URL}/api/admins/contracts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status: 'success', data: response.data.data };
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      return {
        status: 'error',
        statusCode: error.code,
        message: error.message + ' Please check your internet connection',
      };
    } else {
      return {
        status: 'error',
        statusCode: error.response.statusCode,
        message: error.response.data.message,
      };
    }
  }
};
