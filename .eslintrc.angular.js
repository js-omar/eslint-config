module.exports = {
  extends: ['./.eslintrc.typescript.js', 'plugin:@angular-eslint/recommended'],
  rules: {
    '@angular-eslint/component-class-suffix': [
      'error',
      { suffixes: ['Page', 'Component', 'Modal'] },
    ],
  },
};
