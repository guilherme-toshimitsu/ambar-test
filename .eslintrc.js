const SEVERITY = process.env.NODE_ENV === 'development' ? 'warn' : 'error';

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': SEVERITY,
    'max-len': [SEVERITY, 120],
    'no-debugger': SEVERITY,
    'id-length': [SEVERITY, { exceptions: ['t'] }],
    'import/order': 'off',
    quotes: [SEVERITY, 'single', { avoidEscape: true }],
    indent: [SEVERITY, 2],
    'func-style': ['off'],
    'no-console': [SEVERITY, { allow: ['warn', 'error'] }],
    'no-multiple-empty-lines': [
      SEVERITY,
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [SEVERITY, { allow: ['_id'] }],
    // "react-hooks/exhaustive-deps": "warn",
    'sort-keys': 'off',
    'sort-imports': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': 'off',
    // "comma-dangle": [SEVERITY, 'never'],
    // "semi":['error', 'always'],
    // "linebreak-style": ['warn', 'unix']
  },
};
