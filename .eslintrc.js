module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  ignorePatterns: [
    './lib/**/*',
    './node_modules/**/*',
    './coverage/**/*',
    './dist/**/*',
    './node_modules/**/*',
    './src/**/__snapshots__/**/*',
  ],
  overrides: [
    {
      files: ['*.ts', '*.js'],
      extends: ['./.eslintrc.base.js'],
    },
    {
      files: ['*.ts'],
      extends: ['./.eslintrc.typescript.js'],
    },
    {
      files: ['*.component.ts', '*.modal.ts', '*.page.ts'],
      extends: ['./.eslintrc.angular.js'],
    },
  ],
};
