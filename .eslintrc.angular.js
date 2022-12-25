module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@angular-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@angular-eslint/component-class-suffix': [
      'error',
      { suffixes: ['Page', 'Component', 'Modal'] },
    ],
  },
};
