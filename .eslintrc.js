module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['./.eslintrc.base.js', 'plugin:prettier/recommended'],
  rules: {},
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
      files: ['*.ts'],
      extends: ['./.eslintrc.typescript.js'],
    },
  ],
};
