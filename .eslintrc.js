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
  extends: ['./.eslintrc.base.js'],
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
      files: ['*.js'],
      extends: ['./.eslintrc.javascript.js'],
    },
  ],
};
