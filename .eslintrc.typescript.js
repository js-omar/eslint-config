module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    './.eslintrc.javascript.js',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['strictCamelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'parameter',
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['StrictPascalCase'],
        types: ['boolean'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.{component,modal,page}.ts'],
      extends: ['./.eslintrc.angular.js'],
    },
    {
      files: ['*.spec.ts', '*.test.ts'],
      extends: ['plugin:jest/recommended'],
      env: { jest: true, 'jest/globals': true },
      rules: { '@typescript-eslint/no-unsafe-call': 'off' },
    },
    {
      files: ['*.cy.ts'],
      extends: ['plugin:cypress/recommended'],
    },
    {
      files: ['e2e.ts'],
      rules: { 'unicorn/prevent-abbreviations': 'off' },
    },
    {
      files: [
        'capacitor.config.ts',
        'cypress.config.ts',
        'test-setup.ts',
        '*.stories.ts',
        'jest.config.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
};
