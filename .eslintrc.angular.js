module.exports = {
  plugins: [],
  extends: ['plugin:@angular-eslint/recommended'],
  rules: {
    '@angular-eslint/component-class-suffix': [
      'error',
      { suffixes: ['Page', 'Component', 'Modal'] },
    ],
  },
};
