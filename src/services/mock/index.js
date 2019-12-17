import seller from './seller';

export default {
  local: {
    '/mock': () => ({ data: {} }),
    '/mock-error': () => ({ message: 'deu ruim', status: '404' }),
    '/v1/seller': config => seller.getAll(config),
    '/v1/seller-error': config => seller.getAllErrors(config),
  },
  external: {
    'http://bla.com/bla': () => ({ data: {} }),
    'http://bla.com/bla-error': () => ({ error: 'bla' }),
  },
};
