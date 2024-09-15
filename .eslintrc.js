module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports', 'prettier', 'jest', 'no-relative-import-paths'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    './eslint-configs/documents',
    './eslint-configs/typescript'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js', 'dist/', 'eslint-configs/', '**/*.json', '**/*.yml'],
  rules: {
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: true, // Allow relative imports within the same folder
        rootDir: './', // Set the root directory to match your project
        prefix: '@', // Prefix for absolute path aliases
        allowedDepth: 2 // Allows up to two levels of relative imports
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-duplicate-imports': 'off',
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn', { enums: true, typedefs: false, ignoreTypeReferences: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^export abstract class DI_'
      }
    ],
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'warn'
  }
};
