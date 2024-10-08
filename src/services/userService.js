import { API_URL } from '../constants/global/api';
import Cookies from 'js-cookie';
import axios from 'axios';

// login
export const loginService = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/admins/login`, data);
    Cookies.set('token', response.data.token, { expires: 1 });
    Cookies.set('name', response.data.data.user.name, { expires: 1 });

    return { status: 'success', data: response.data };
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

// change password
export const changePasswordService = async (
  passwordCurrent,
  password,
  passwordConfirm
) => {
  const data = {
    passwordCurrent,
    password,
    passwordConfirm,
  };
  let token = Cookies.get('token');
  try {
    const response = await axios.patch(
      `${API_URL}/api/users/updateMyPassword`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: 'success', data: response.data };
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

// update me

export const updateMeService = async (name, email, phoneNumber) => {
  const data = {
    name,
    email,
    phoneNumber,
  };
  let token = Cookies.get('token');
  try {
    const response = await axios.patch(`${API_URL}/api/users/updateMe`, data, {
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

export const getAllUsers = async () => {
  let token = Cookies.get('token');
  try {
    const response = await axios.get(`${API_URL}/api/admins/users`, {
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

export const verifyUser = async (userID) => {
  let token = Cookies.get('token');
  try {
    const response = await axios.patch(
      `${API_URL}/api/admins/users/${userID}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
