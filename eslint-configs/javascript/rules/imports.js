module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: ['import', 'unused-imports', 'import-newlines', 'perfectionist'],
  settings: {
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js']
      }
    }
  },
  rules: {
    'unused-imports/no-unused-imports': ['error'],
    'import/first': ['error'],
    'import/newline-after-import': ['error'],
    'import-newlines/enforce': [
      'error',
      {
        items: 3,
        'max-len': 120
      }
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
      }
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'line-length',
        order: 'asc'
      }
    ],
    'import/consistent-type-specifier-style': ['off'],
    'import/no-deprecated': ['error'],
    'import/no-unresolved': 'error',
    'import/named': 'off',
    'import/no-duplicates': [
      'error',
      {
        'prefer-inline': false
      }
    ],
    'import/no-mutable-exports': ['error'],
    'import/no-named-default': ['error'],
    'import/no-self-import': ['error'],
    'import/no-webpack-loader-syntax': ['error'],
    'import/no-extraneous-dependencies': ['warn'],
    'import/no-relative-packages': ['error']
  }
};
