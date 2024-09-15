module.exports = {
  extends: ['plugin:jsdoc/recommended'],
  plugins: ['jsdoc'],
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'jsdoc/require-jsdoc': ['warn'],
        'jsdoc/sort-tags': ['error'],
        'jsdoc/require-param-description': ['warn'],
        'jsdoc/no-undefined-types': ['warn'],
        'jsdoc/require-returns-description': ['warn']
      }
    }
  ]
};
