import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
  ? 'https://elderly-ease.onrender.com'
  : 'http://localhost:5002';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const getServices = async () => {
  try {
    const response = await axiosInstance.get('/api/services');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getServiceBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/api/services/${slug}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitAdmission = async (admissionData) => {
  try {
    const response = await axiosInstance.post('/api/admissions', admissionData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAdmission = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/admissions/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAdmission = async (id, admissionData) => {
  try {
    const response = await axiosInstance.patch(`/api/admissions/${id}`, admissionData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitFamilyDetails = async (familyData) => {
  try {
    const response = await axiosInstance.post('/api/family-details', familyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFamilyDetails = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/family-details/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFamilyDetails = async (id, familyData) => {
  try {
    const response = await axiosInstance.patch(`/api/family-details/${id}`, familyData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitPayment = async (paymentData) => {
  try {
    const response = await axiosInstance.post('/api/payments', paymentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default axiosInstance;
