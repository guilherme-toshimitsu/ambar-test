import api from '../api';

const path = '/v1/seller';

const getAll = params => api.request(`${path}`, { params });

export default {
  getAll,
};
