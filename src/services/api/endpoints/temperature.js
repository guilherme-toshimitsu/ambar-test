import api from '../api';

const path = 'https://fcc-weather-api.glitch.me/api/current?';

// params ={ lat: , lon: }
const getByCord = params => api.request(`${path}`, { params });

export default {
  getByCord,
};
