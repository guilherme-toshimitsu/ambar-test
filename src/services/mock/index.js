import temperature from './temperature';

export default {
  local: {
    '/mock': () => ({ data: {} }),
    '/mock-error': () => ({ message: 'deu ruim', status: '404' }),
  },
  external: {
    'http://bla.com/bla': () => ({ data: {} }),
    'http://bla.com/bla-error': () => ({ error: 'bla' }),
    'https://fcc-weather-api.glitch.me/api/current': config => temperature.getByCord(config),
    'https://fcc-weather-api.glitch.me/api/current-error': config => temperature.getByCordError(config),
  },
};
