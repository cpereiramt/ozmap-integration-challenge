import axios from 'axios';

const API_BASE_URL = process.env.ISP_API_URL || 'http://localhost:4000';

export class IspService {
  static async getCables() {
    const response = await axios.get(`${API_BASE_URL}/cables`);
    return response.data;
  }

  static async getBoxes() {
    const response = await axios.get(`${API_BASE_URL}/boxes`);
    return response.data;
  }

  static async getDropCables() {
    const response = await axios.get(`${API_BASE_URL}/drop_cables`);
    return response.data;
  }

  static async getCustomers() {
    const response = await axios.get(`${API_BASE_URL}/customers`);
    return response.data;
  }
}