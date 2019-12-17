const getByCord = config => {
  return {
    data: {
      weather: {},
      main: {
        temp_min: 0,
        temp_max: 99,
      },
    },
  };
};

const getByCordError = () => {
  return {
    message: 'ixiii deu ruim',
    status: '404',
  };
};

export default {
  getByCord,
  getByCordError,
};
