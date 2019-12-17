const { override, addBabelPlugins } = require('customize-cra');

const myOverrides = config => {
  const newArray = [
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    ...config.module.rules,
  ];
  config.module.rules = newArray;
  return config;
};

const babelPlugins = [
  'module-resolver',
  {
    root: './',
    alias: {
      '@api': './src/services/api',
      '@assets': './src/assets/',
      '@commons': './src/commons/',
      '@components': './src/components',
      '@config': './src/config',
      '@fonts': './src/assets/fonts',
      '@images': './src/assets/images',
      '@pages': './src/pages',
      '@routes': './src/config/routes',
      '@services': './src/services',
      // "@svg": "svg-inline-loader?classPrefix!./src/assets/images/icons",
      '@utils': './src/commons/utils/',
    },
  },
];

module.exports = override(myOverrides, ...addBabelPlugins(babelPlugins));
