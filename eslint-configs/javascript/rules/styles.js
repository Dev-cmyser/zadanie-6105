module.exports = {
  plugins: ['@stylistic'],
  rules: {
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    '@stylistic/semi-style': ['error', 'last'],
    '@stylistic/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    '@stylistic/indent': ['error', 2],
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-element-newline': [
      'error',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: {
          minItems: 3
        }
      }
    ],
    '@stylistic/array-bracket-spacing': [
      'error',
      'never',
      {
        arraysInArrays: true
      }
    ],
    '@stylistic/arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true
      }
    ],
    '@stylistic/arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    '@stylistic/block-spacing': ['error'],
    '@stylistic/brace-style': ['error'],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/func-call-spacing': ['error'],
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],
    '@stylistic/function-paren-newline': ['off'],
    '@stylistic/generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
        anonymous: 'neither',
        method: {
          before: true,
          after: true
        }
      }
    ],
    '@stylistic/implicit-arrow-linebreak': ['error'],
    '@stylistic/key-spacing': ['error'],
    '@stylistic/keyword-spacing': ['error'],
    '@stylistic/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: false,
        allowArrayEnd: false
      }
    ],
    '@stylistic/lines-between-class-members': 'error',
    '@stylistic/max-statements-per-line': ['error'],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],
    '@stylistic/new-parens': ['error'],
    '@stylistic/newline-per-chained-call': ['error'],
    '@stylistic/no-confusing-arrow': ['error'],
    '@stylistic/no-extra-parens': [
      'error',
      'all',
      {
        returnAssign: false,
        nestedBinaryExpressions: false,
        ternaryOperandBinaryExpressions: false,
        enforceForArrowConditionals: false
      }
    ],
    '@stylistic/no-extra-semi': ['error'],
    '@stylistic/no-mixed-operators': ['warn'],
    '@stylistic/no-mixed-spaces-and-tabs': ['error'],
    '@stylistic/no-multi-spaces': ['error'],
    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    '@stylistic/no-tabs': ['error'],
    '@stylistic/no-trailing-spaces': ['error'],
    '@stylistic/no-whitespace-before-property': ['error'],
    curly: ['error', 'all'],
    '@stylistic/nonblock-statement-body-position': ['off', 'below'],
    '@stylistic/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        }
      }
    ],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': ['error'],
    '@stylistic/one-var-declaration-per-line': ['error'],
    '@stylistic/operator-linebreak': [
      'error',
      'none',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
          '=': 'before',
          '&&': 'before'
        }
      }
    ],
    '@stylistic/padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: '*'
      },
      {
        blankLine: 'any',
        prev: 'import',
        next: 'import'
      },
      {
        blankLine: 'any',
        prev: 'cjs-import',
        next: 'cjs-import'
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'never',
        prev: ['case'],
        next: ['*']
      },
      {
        blankLine: 'never',
        prev: ['*'],
        next: ['break']
      }
    ],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/space-before-blocks': ['error', 'always'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': [
      'error',
      {
        int32Hint: true
      }
    ],
    '@stylistic/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['-'],
        markers: ['/'],
        line: {
          exceptions: ['-']
        },
        block: {
          balanced: true
        }
      }
    ],
    '@stylistic/switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    '@stylistic/template-curly-spacing': ['error', 'never'],
    '@stylistic/template-tag-spacing': ['error', 'never'],
    '@stylistic/wrap-iife': ['error', 'any'],
    '@stylistic/wrap-regex': ['error'],
    '@stylistic/yield-star-spacing': ['error', 'before'],
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true
        },
        singleline: {
          delimiter: 'comma',
          requireLast: true
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true
            }
          }
        }
      }
    ],
    '@stylistic/type-annotation-spacing': [
      'off',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true
          }
        }
      }
    ],
    '@stylistic/type-generic-spacing': ['error'],
    '@stylistic/type-named-tuple-spacing': ['error']
  }
};
