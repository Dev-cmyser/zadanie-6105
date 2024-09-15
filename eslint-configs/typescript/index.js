module.exports = {
  extends: ['../javascript'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts']
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    }
  },
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],
      excludedFiles: ['**/*.md/*.*'],
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        type: 'module',
        EXPERIMENTAL_useProjectService: true,
        project: ['./tsconfig.json']
      },
      rules: {
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            ignoreTypeReferences: true
          }
        ],
        '@typescript-eslint/await-thenable': 'warn',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',

        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
        '@typescript-eslint/consistent-type-exports': [
          'error',
          {
            fixMixedExportsWithInlineTypeSpecifier: false
          }
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'separate-type-imports'
          }
        ],
        '@typescript-eslint/no-import-type-side-effects': ['error']
      }
    }
  ]
};
