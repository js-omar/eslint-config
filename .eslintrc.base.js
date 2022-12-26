module.exports = {
  extends: ['plugin:@cspell/recommended'],
  rules: {
    '@cspell/spellchecker': ['error'],
  },
  overrides: [
    {
      files: ['*.json'],
      plugins: ['json-files'],
      rules: {
        'json-files/ensure-repository-directory': 'error',
        'json-files/eol-last': 'error',
        'json-files/no-branch-in-dependencies': 'error',
        'json-files/require-engines': 'error',
        'json-files/require-license': 'error',
        'json-files/require-unique-dependency-names': 'error',
        'json-files/restrict-ranges': 'error',
        'json-files/sort-package-json': 'error',
      },
    },
  ],
};
