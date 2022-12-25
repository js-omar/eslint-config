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
  extends: [],
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
      files: ['*.*'],
      extends: ['./.eslintrc.base.js'],
    },
    {
      files: ['*.ts', '*.js'],
      extends: ['./.eslintrc.javascript.js'],
    },
    {
      files: ['*.ts'],
      extends: ['./.eslintrc.typescript.js'],
    },
    {
      files: ['*.{component,modal,page}.ts'],
      extends: ['./.eslintrc.angular.js'],
    },
    {
      files: ['*.json'],
      extends: ['./.eslintrc.json.js'],
    },
  ],
};
