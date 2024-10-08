module.exports = {
  extends: ['eslint:recommended', './rules/styles', './rules/imports', './rules/unicorn'],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  globals: {
    navigator: 'readonly',
    document: 'readonly',
    window: 'readonly'
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: [
    '**/node_modules',
    '**/dist',
    '**/build',
    '**/package-lock.json',
    '**/yarn.lock',
    '**/pnpm-lock.yaml',
    '**/bun.lockb',

    '**/output',
    '**/coverage',
    '**/temp',
    '**/.temp',
    '**/tmp',
    '**/.tmp',
    '**/.vercel',
    '**/.changeset',
    '**/.idea',
    '**/.cache',
    '**/.output',

    '**/CHANGELOG*.md',
    '**/LICENSE*',
    '**/__snapshots__'
  ],
  plugins: ['unused-imports'],
  rules: {
    'no-unused-vars': ['off'],
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'no-var': 'warn',
    'new-cap': [
      'warn',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    'new-parens': 'error',
    'object-shorthand': ['warn', 'properties'],
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        enforceForClassMembers: true
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'warn',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: false
      }
    ],
    'no-regex-spaces': 'error',
    'no-restricted-globals': [
      'warn',
      {
        message: 'Use `globalThis` instead.',
        name: 'global'
      },
      {
        message: 'Use `globalThis` instead.',
        name: 'self'
      }
    ],
    'no-restricted-properties': [
      'warn',
      {
        message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
        property: '__proto__'
      },
      {
        message: 'Use `Object.defineProperty` instead.',
        property: '__defineGetter__'
      },
      {
        message: 'Use `Object.defineProperty` instead.',
        property: '__defineSetter__'
      },
      {
        message: 'Use `Object.getOwnPropertyDescriptor` instead.',
        property: '__lookupGetter__'
      },
      {
        message: 'Use `Object.getOwnPropertyDescriptor` instead.',
        property: '__lookupSetter__'
      }
    ],
    'no-restricted-syntax': [
      'warn',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
      'TSEnumDeclaration[const=true]',
      'TSExportAssignment'
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],
    'no-self-compare': 'error',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-useless-backreference': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-useless-catch': 'error',
    'no-console': ['error'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'warn',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'no-implicit-coercion': [
      'error',
      {
        allow: ['!!'],
        disallowTemplateShorthand: true
      }
    ]
  }
};
