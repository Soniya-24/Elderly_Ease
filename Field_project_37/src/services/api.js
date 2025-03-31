import axios from 'axios';

const BASE_URL = 'http://localhost:5002/api';

export const api = {
  // Services
  getServices: async () => {
    const response = await axios.get(`${BASE_URL}/services`);
    return response.data;
  },

  getService: async (slug) => {
    const response = await axios.get(`${BASE_URL}/services/${slug}`);
    return response.data;
  },

  // Admissions
  createAdmission: async (admissionData) => {
    const response = await axios.post(`${BASE_URL}/admissions`, admissionData);
    return response.data;
  },

  getAdmission: async (id) => {
    const response = await axios.get(`${BASE_URL}/admissions/${id}`);
    return response.data;
  },

  updateAdmission: async (id, admissionData) => {
    const response = await axios.patch(`${BASE_URL}/admissions/${id}`, admissionData);
    return response.data;
  },

  // Family Details
  createFamilyDetails: async (familyData) => {
    const response = await axios.post(`${BASE_URL}/family-details`, familyData);
    return response.data;
  },

  getFamilyDetails: async (id) => {
    const response = await axios.get(`${BASE_URL}/family-details/${id}`);
    return response.data;
  },

  updateFamilyDetails: async (id, familyData) => {
    const response = await axios.patch(`${BASE_URL}/family-details/${id}`, familyData);
    return response.data;
  }
};
