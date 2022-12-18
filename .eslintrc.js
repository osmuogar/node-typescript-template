/* PROJECT_LICENSE */

const JS_RULES = require('./.eslint.js.rules');
const JSDOC_RULES = require('./.eslint.jsdoc.rules');
const TS_RULES = require('./.eslint.ts.rules');

module.exports = {
    'root': true,
    'parser': '@typescript-eslint/parser',
    'plugins': [
        'jsdoc',
        'header',
        '@typescript-eslint',
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
    },
    'env': {
        'commonjs': true,
        'es2021': true,
    },
    'ignorePatterns': [
        'node_modules/',
        'doc/',
        'dist/',
        '!.*',
    ],
    'rules': {
        ...JS_RULES,
        ...JSDOC_RULES,
    },
    'overrides': [
        /*
            You should extend TypeScript plugins here, instead of extending them
            outside the `overrides`.
        */
        {
            'files': [
                '*.ts',
                '*.tsx',
            ],
            'rules': {
                ...TS_RULES,
            },
            'parserOptions': {
                'project': [
                    './tsconfig.json',
                ],
            },
        },
    ],
};
