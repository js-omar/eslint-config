# Eslint Config

Eslint Config Project

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install @js-omar/eslint-config as dev dependencies.

```bash
npm i -D @js-omar/eslint-config
```

## Usage

.eslintrc.js

```js
module.exports = {
  overrides: [
    {
      files: ['*.*'],
      extends: ['@js-omar/eslint-config/.eslintrc.base.js'],
    },
    {
      files: ['*.ts', '*.js'],
      extends: ['@js-omar/eslint-config/.eslintrc.javascript.js'],
    },
    {
      files: ['*.ts'],
      extends: [
        '@js-omar/eslint-config/.eslintrc.typescript.js',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.*.json', './{apps,libs}/*/*/tsconfig.*.json'],
      },
    },
    {
      files: ['*.{component,modal,page}.ts'],
      extends: ['@js-omar/eslint-config/.eslintrc.angular.js'],
    },
    {
      files: ['*.json'],
      extends: ['@js-omar/eslint-config/.eslintrc.json.js'],
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: { jest: true },
      rules: { '@typescript-eslint/no-unsafe-call': 'off' },
    },
  ],
};
```

## Development

To run this project in development use

Clone the project

```bash
  git clone https://github.com/js-omar/eslint-config.git
```

Install Packages

```bash
  npm install
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

- [@omar-elsayed](https://github.com/omar-elsayed97)

## Hi, I'm Omar Elsayed! 👋

I'm a full stack javascript developer...

## 🛠 Skills

Typescript, Javascript, Angular, Ionic, Nest.js, Node.js, HTML, CSS...

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to us at challengeromar97@gmail.com
