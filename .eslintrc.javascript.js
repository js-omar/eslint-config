module.exports = {
  extends: [
    './.eslintrc.base.js',
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
    'airbnb-base',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-undef': 'off',
    'comma-dangle': 'off',
    'space-in-parens': ['error'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-await-in-loop': 'off',
    'no-useless-constructor': 'off',
    'no-return-assign': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': ['error'],
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'dot-notation': 'off',
    'unicorn/prefer-module': 'off',
  },
};