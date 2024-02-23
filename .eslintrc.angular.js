module.exports = {
  extends: ['plugin:@angular-eslint/recommended'],
  rules: {
    '@angular-eslint/component-class-suffix': [
      'error',
      { suffixes: ['Page', 'Component', 'Modal', 'Dialog', 'Section'] },
    ],
  },
};
