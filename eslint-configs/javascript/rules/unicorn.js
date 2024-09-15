module.exports = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
    // dont use -  ломает код ( проверку типов и прочее )
    'unicorn/prefer-native-coercion-functions': 'off',
    'unicorn/prefer-node-protocol': 'off',
    // dont use -  оставили на усмотрение разработчика
    'unicorn/no-array-for-each': 'off',

    'unicorn/filename-case': 'warn',
    'unicorn/better-regex': 'warn',
    'unicorn/no-object-as-default-parameter': 'warn',
    'unicorn/no-new-array': 'warn',
    'unicorn/no-array-method-this-argument': 'warn',
    'unicorn/prefer-array-some': 'warn',
    'unicorn/no-unreadable-array-destructuring': 'warn',
    'unicorn/no-this-assignment': 'warn',
    'unicorn/no-array-callback-reference': 'warn',
    'unicorn/no-await-expression-member': 'warn',
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/import-style': 'warn',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-push-push': 'warn',
    'unicorn/no-array-reduce': 'warn',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-null': 'warn',
    'unicorn/no-static-only-class': 'warn',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/numeric-separators-style': 'warn',
    'unicorn/prefer-add-event-listener': [
      'error',
      {
        excludedPackages: ['koa', 'sax']
      }
    ],
    'unicorn/prefer-export-from': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-module': 'warn',
    'unicorn/prefer-set-has': 'warn',
    'unicorn/prefer-set-size': 'error',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-switch': 'warn',
    'unicorn/prefer-ternary': 'warn',
    'unicorn/prefer-top-level-await': 'warn',
    'unicorn/prevent-abbreviations': 'warn',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/no-process-exit': 'warn'
  }
};
