/* PROJECT_LICENSE */

const ESLINT_ERROR_LEVEL = require('./.eslint.lvl.rules');

/*
    Main rules have been taken from:     https://eslint.org/docs/latest/rules/
    Eslint version:  v8.27.0
*/

/**
 * These rules relate to possible logic errors in code:
 * array-callback-return
 *
 * Enforce return statements in callbacks of array methods
 */
const POSSIBLE_PROBLEMS = {
    /*
        Require `super()` calls in constructors
    */
    'constructor-super': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce 'for' loop update clause moving the counter in the right
        direction.
    */
    // 'for-direction': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce `return` statements in getters
    */
    // 'getter-return': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow using an async function as a Promise executor
    */
    // 'no-async-promise-executor': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `await` inside of loops
    */
    // 'no-await-in-loop': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow reassigning class members
    */
    // 'no-class-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow comparing against -0
    */
    // 'no-compare-neg-zero': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow assignment operators in conditional expressions
    */
    'no-cond-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow reassigning `const` variables
    */
    // 'no-const-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow expressions where the operation doesn't affect the value
    */
    // 'no-constant-binary-expression': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow constant expressions in conditions
    */
    // 'no-constant-condition': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow returning value from constructor
    */
    // 'no-constructor-return': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow control characters in regular expressions
    */
    // 'no-control-regex': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of `debugger`
    */
    // 'no-debugger': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate arguments in `function` definitions
    */
    // 'no-dupe-args': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate class members
    */
    // 'no-dupe-class-members': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate conditions in if-else-if chains
    */
    // 'no-dupe-else-if': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate keys in object literals
    */
    // 'no-dupe-keys': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate case labels
    */
    // 'no-duplicate-case': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate module imports
    */
    // 'no-duplicate-imports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow empty character classes in regular expressions
    */
    // 'no-empty-character-class': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow empty destructuring patterns
    */
    // 'no-empty-pattern': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow reassigning exceptions in `catch` clauses
    */
    // 'no-ex-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow fallthrough of `case` statements
    */
    // 'no-fallthrough': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow reassigning `function` declarations
    */
    // 'no-func-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow assigning to imported bindings
    */
    // 'no-import-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow variable or `function` declarations in nested blocks
    */
    // 'no-inner-declarations': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow invalid regular expression strings in `RegExp` constructors
    */
    // 'no-invalid-regexp': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow irregular whitespace
    */
    'no-irregular-whitespace': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow literal numbers that lose precision
    */
    // 'no-loss-of-precision': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow characters which are made with multiple code points in
        character class syntax
    */
    // 'no-misleading-character-class': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `new` operators with global non-constructor functions
    */
    // 'no-new-native-nonconstructor': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `new` operators with the `Symbol` object
    */
    'no-new-symbol': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow calling global object properties as functions
    */
    // 'no-obj-calls': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow returning values from Promise executor functions
    */
    // 'no-promise-executor-return': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow calling some `Object.prototype` methods directly on objects
    */
    // 'no-prototype-builtins': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow assignments where both sides are exactly the same
    */
    // 'no-self-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow comparisons where both sides are exactly the same
    */
    // 'no-self-compare': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow returning values from setters
    */
    // 'no-setter-return': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow sparse arrays
    */
    // 'no-sparse-arrays': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow template literal placeholder syntax in regular strings
    */
    // 'no-template-curly-in-string': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `this`/`super` before calling `super()` in constructors
    */
    'no-this-before-super': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of undeclared variables unless mentioned in
        `global` comments
    */
    // 'no-undef': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow confusing multiline expressions
    */
    'no-unexpected-multiline': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unmodified loop conditions
    */
    // 'no-unmodified-loop-condition': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unreachable code after `return`, `throw`, `continue`, and
        `break` statements
    */
    // 'no-unreachable': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow loops with a body that allows only one iteration
    */
    // 'no-unreachable-loop': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow control flow statements in `finally` blocks
    */
    // 'no-unsafe-finally': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow negating the left operand of relational operators
    */
    // 'no-unsafe-negation': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow use of optional chaining in contexts where the `undefined`
        value is not allowed
    */
    // 'no-unsafe-optional-chaining': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unused private class members
    */
    // 'no-unused-private-class-members': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unused variables
    */
    'no-unused-vars': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        {
            args: 'none',
        },
    ],
    /*
        Disallow the use of variables before they are defined
    */
    // 'no-use-before-define': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow useless backreferences in regular expressions
    */
    // 'no-useless-backreference': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow assignments that can lead to race conditions due to usage of
        `await` or `yield`
    */
    // 'require-atomic-updates': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require calls to `isNaN()` when checking for `NaN`
    */
    // 'use-isnan': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce comparing `typeof` expressions against valid strings
    */
    // 'valid-typeof': ESLINT_ERROR_LEVEL.DEFAULT,
};

/**
 * These rules suggest alternate ways of doing things:
 * accessor-pairs
 *
 * Enforce getter and setter pairs in objects and classes
 */
const SUGGESTIONS = {
    /*
        Require braces around arrow function bodies
    */
    // 'arrow-body-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce the use of variables within the scope they are defined
    */
    // 'block-scoped-var': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce camelcase naming convention
    */
    'camelcase': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce or disallow capitalization of the first letter of a comment
    */
    // 'capitalized-comments': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce that class methods utilize `this`
    */
    // 'class-methods-use-this': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum cyclomatic complexity allowed in a program
    */
    // 'complexity': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require `return` statements to either always or never specify values
    */
    // 'consistent-return': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent naming when capturing the current execution context
    */
    // 'consistent-this': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent brace style for all control statements
    */
    'curly': [ESLINT_ERROR_LEVEL.DEFAULT, 'multi-line'],
    /*
        Require `default` cases in `switch` statements
    */
    // 'default-case': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce default clauses in switch statements to be last
    */
    // 'default-case-last': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce default parameters to be last
    */
    // 'default-param-last': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce dot notation whenever possible
    */
    // 'dot-notation': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require the use of `===` and `!==`
    */
    // 'eqeqeq': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require function names to match the name of the variable or property to
        which they are assigned
    */
    // 'func-name-matching': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow named `function` expressions
    */
    // 'func-names': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce the consistent use of either `function` declarations or
        expressions
    */
    // 'func-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require grouped accessor pairs in object literals and classes
    */
    // 'grouped-accessor-pairs': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require `for-in` loops to include an `if` statement
    */
    'guard-for-in': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow specified identifiers
    */
    // 'id-denylist': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce minimum and maximum identifier lengths
    */
    // 'id-length': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require identifiers to match a specified regular expression
    */
    // 'id-match': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow initialization in variable declarations
    */
    // 'init-declarations': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow logical assignment logical operator shorthand
    */
    // 'logical-assignment-operators': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum number of classes per file
    */
    // 'max-classes-per-file': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum depth that blocks can be nested
    */
    // 'max-depth': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum number of lines per file
    */
    // 'max-lines': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum number of lines of code in a function
    */
    // 'max-lines-per-function': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum depth that callbacks can be nested
    */
    // 'max-nested-callbacks': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum number of parameters in function definitions
    */
    // 'max-params': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum number of statements allowed in function blocks
    */
    // 'max-statements': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a particular style for multiline comments
    */
    // 'multiline-comment-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require constructor names to begin with a capital letter
    */
    'new-cap': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of `alert`, `confirm`, and `prompt`
    */
    // 'no-alert': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `Array` constructors
    */
    'no-array-constructor': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow bitwise operators
    */
    // 'no-bitwise': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of `arguments.caller` or `arguments.callee`
    */
    'no-caller': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow lexical declarations in case clauses
    */
    // 'no-case-declarations': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow arrow functions where they could be confused with comparisons
    */
    // 'no-confusing-arrow': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of `console`
    */
    'no-console': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `continue` statements
    */
    // 'no-continue': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow deleting variables
    */
    // 'no-delete-var': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow division operators explicitly at the beginning of regular
        expressions
    */
    // 'no-div-regex': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `else` blocks after `return` statements in `if` statements
    */
    // 'no-else-return': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow empty block statements
    */
    // 'no-empty': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow empty functions
    */
    // 'no-empty-function': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow empty static blocks
    */
    // 'no-empty-static-block': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `null` comparisons without type-checking operators
    */
    // 'no-eq-null': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of `eval()`
    */
    // 'no-eval': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow extending native types
    */
    'no-extend-native': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary calls to `.bind()`
    */
    'no-extra-bind': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary boolean casts
    */
    // 'no-extra-boolean-cast': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary labels
    */
    // 'no-extra-label': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary semicolons
    */
    // 'no-extra-semi': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow leading or trailing decimal points in numeric literals
    */
    // 'no-floating-decimal': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow assignments to native objects or read-only global variables
    */
    // 'no-global-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow shorthand type conversions
    */
    // 'no-implicit-coercion': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow declarations in the global scope
    */
    'no-implicit-globals': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of `eval()`-like methods
    */
    // 'no-implied-eval': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow inline comments after code
    */
    // 'no-inline-comments': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow use of `this` in contexts where the value of `this` is
        `undefined`
    */
    'no-invalid-this': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of the `__iterator__` property
    */
    // 'no-iterator': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow labels that share a name with a variable
    */
    // 'no-label-var': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow labeled statements
    */
    // 'no-labels': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary nested blocks
    */
    // 'no-lone-blocks': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `if` statements as the only statement in `else` blocks
    */
    // 'no-lonely-if': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow function declarations that contain unsafe references inside
        loop statements
    */
    // 'no-loop-func': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow magic numbers
    */
    // 'no-magic-numbers': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow mixed binary operators
    */
    // 'no-mixed-operators': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow use of chained assignment expressions
    */
    // 'no-multi-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow multiline strings
    */
    'no-multi-str': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow negated conditions
    */
    // 'no-negated-condition': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow nested ternary expressions
    */
    // 'no-nested-ternary': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `new` operators outside of assignments or comparisons
    */
    // 'no-new': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `new` operators with the `Function` object
    */
    // 'no-new-func': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `Object` constructors
    */
    'no-new-object': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `new` operators with the `String`, `Number`, and `Boolean`
        objects
    */
    'no-new-wrappers': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `\8` and `\9` escape sequences in string literals
    */
    // 'no-nonoctal-decimal-escape': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow octal literals
    */
    // 'no-octal': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow octal escape sequences in string literals
    */
    // 'no-octal-escape': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow reassigning `function` parameters
    */
    // 'no-param-reassign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the unary operators `++` and `--`
    */
    // 'no-plusplus': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of the `__proto__` property
    */
    // 'no-proto': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow variable redeclaration
    */
    // 'no-redeclare': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow multiple spaces in regular expressions
    */
    // 'no-regex-spaces': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow specified names in exports
    */
    // 'no-restricted-exports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow specified global variables
    */
    // 'no-restricted-globals': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow specified modules when loaded by `import`
    */
    // 'no-restricted-imports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow certain properties on certain objects
    */
    // 'no-restricted-properties': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow specified syntax
    */
    // 'no-restricted-syntax': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow assignment operators in `return` statements
    */
    // 'no-return-assign': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary `return await`
    */
    // 'no-return-await': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `javascript:` urls
    */
    // 'no-script-url': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow comma operators
    */
    // 'no-sequences': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow variable declarations from shadowing variables declared in the
        outer scope
    */
    // 'no-shadow': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow identifiers from shadowing restricted names
    */
    // 'no-shadow-restricted-names': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow ternary operators
    */
    // 'no-ternary': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow throwing literals as exceptions
    */
    'no-throw-literal': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow initializing variables to `undefined`
    */
    // 'no-undef-init': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of `undefined` as an identifier
    */
    // 'no-undefined': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow dangling underscores in identifiers
    */
    // 'no-underscore-dangle': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow ternary operators when simpler alternatives exist
    */
    // 'no-unneeded-ternary': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unused expressions
    */
    // 'no-unused-expressions': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unused labels
    */
    // 'no-unused-labels': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary calls to `.call()` and `.apply()`
    */
    // 'no-useless-call': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary `catch` clauses
    */
    // 'no-useless-catch': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary computed property keys in objects and classes
    */
    // 'no-useless-computed-key': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary concatenation of literals or template literals
    */
    // 'no-useless-concat': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary constructors
    */
    // 'no-useless-constructor': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary escape characters
    */
    // 'no-useless-escape': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow renaming import, export, and destructured assignments to the
        same name
    */
    // 'no-useless-rename': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow redundant return statements
    */
    // 'no-useless-return': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require `let` or `const` instead of `var`
    */
    'no-var': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `void` operators
    */
    // 'no-void': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow specified warning terms in comments
    */
    // 'no-warning-comments': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `with` statements
    */
    'no-with': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow method and property shorthand syntax for object
        literals
    */
    // 'object-shorthand': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce variables to be declared either together or separately in
        functions
    */
    'one-var': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        {
            var: 'never',
            let: 'never',
            const: 'never',
        },
    ],
    /*
        Require or disallow newlines around variable declarations
    */
    // 'one-var-declaration-per-line': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow assignment operator shorthand where possible
    */
    // 'operator-assignment': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require using arrow functions for callbacks
    */
    // 'prefer-arrow-callback': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require `const` declarations for variables that are never reassigned
        after declared
    */
    'prefer-const': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        {
            destructuring: 'all',
        },
    ],
    /*
        Require destructuring from arrays and/or objects
    */
    // 'prefer-destructuring': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of `Math.pow` in favor of the `**` operator
    */
    // 'prefer-exponentiation-operator': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce using named capture group in regular expression
    */
    // 'prefer-named-capture-group': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal,
        and hexadecimal literals
    */
    // 'prefer-numeric-literals': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use
        of `Object.hasOwn()`
    */
    // 'prefer-object-has-own': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow using Object.assign with an object literal as the first
        argument and prefer the use of object spread instead.
    */
    // 'prefer-object-spread': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require using Error objects as Promise rejection reasons
    */
    'prefer-promise-reject-errors': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow use of the `RegExp` constructor in favor of regular expression
        literals
    */
    // 'prefer-regex-literals': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require rest parameters instead of `arguments`
    */
    'prefer-rest-params': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require spread operators instead of `.apply()`
    */
    'prefer-spread': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require template literals instead of string concatenation
    */
    // 'prefer-template': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require quotes around object literal property names
    */
    'quote-props': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'consistent',
    ],
    /*
        Enforce the consistent use of the radix argument when using `parseInt()`
    */
    // 'radix': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow async functions which have no `await` expression
    */
    // 'require-await': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce the use of `u` flag on RegExp
    */
    // 'require-unicode-regexp': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require generator functions to contain `yield`
    */
    // 'require-yield': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce sorted import declarations within modules
    */
    'sort-imports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require object keys to be sorted
    */
    // 'sort-keys': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require variables within the same declaration block to be sorted
    */
    // 'sort-vars': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing after the `//` or `/*` in a comment
    */
    'spaced-comment': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'always',
    ],
    /*
        Require or disallow strict mode directives
    */
    // 'strict': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require symbol descriptions
    */
    // 'symbol-description': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require `var` declarations be placed at the top of their containing
        scope
    */
    // 'vars-on-top': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow 'Yoda' conditions
    */
    // 'yoda': ESLINT_ERROR_LEVEL.DEFAULT,
};

/**
 * These rules care about how the code looks rather than how it executes:
 * array-bracket-newline
 *
 * Enforce linebreaks after opening and before closing array brackets
 */
const LAYOUT_AND_FORMATTING = {
    /*
        Enforce consistent spacing inside array brackets
    */
    'array-bracket-spacing': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'never',
    ],
    /*
        Enforce line breaks after each array element
    */
    // 'array-element-newline': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require parentheses around arrow function arguments
    */
    'arrow-parens': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'always',
    ],
    /*
        Enforce consistent spacing before and after the arrow in arrow functions
    */
    // 'arrow-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow or enforce spaces inside of blocks after opening block and
        before closing block
    */
    'block-spacing': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'never',
    ],
    /*
        Enforce consistent brace style for blocks
    */
    'brace-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow trailing commas
    */
    'comma-dangle': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never',
        },
    ],
    /*
        Enforce consistent spacing before and after commas
    */
    'comma-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent comma style
    */
    'comma-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing inside computed property brackets
    */
    'computed-property-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent newlines before and after dots
    */
    // 'dot-location': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow newline at the end of files
    */
    'eol-last': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow spacing between function identifiers and their
        invocations
    */
    'func-call-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce line breaks between arguments of a function call
    */
    // 'function-call-argument-newline': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent line breaks inside function parentheses
    */
    // 'function-paren-newline': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing around `*` operators in generator functions
    */
    'generator-star-spacing': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'after',
    ],
    /*
        Enforce the location of arrow function bodies
    */
    // 'implicit-arrow-linebreak': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent indentation
    */
    'indent': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        4,
        {
            'CallExpression': {
                'arguments': 1,
            },
            'FunctionDeclaration': {
                'body': 1,
                'parameters': 1,
            },
            'FunctionExpression': {
                'body': 1,
                'parameters': 1,
            },
            'MemberExpression': 1,
            'ObjectExpression': 1,
            'SwitchCase': 1,
            'ignoredNodes': [
                'ConditionalExpression',
            ],
        },
    ],
    /*
        Enforce the consistent use of either double or single quotes in JSX
        attributes
    */
    // 'jsx-quotes': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing between keys and values in object literal
        properties
    */
    'key-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before and after keywords
    */
    'keyword-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce position of line comments
    */
    // 'line-comment-position': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent linebreak style
    */
    'linebreak-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require empty lines around comments
    */
    // 'lines-around-comment': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow an empty line between class members
    */
    // 'lines-between-class-members': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce a maximum line length
    */
    'max-len': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        {
            code: 80,
            tabWidth: 2,
            ignoreUrls: true,
            ignorePattern: 'goog\.(module|require)',
        },
    ],
    /*
        Enforce a maximum number of statements allowed per line
    */
    // 'max-statements-per-line': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce newlines between operands of ternary expressions
    */
    // 'multiline-ternary': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce or disallow parentheses when invoking a constructor with no
        arguments
    */
    // 'new-parens': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require a newline after each call in a method chain
    */
    // 'newline-per-chained-call': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary parentheses
    */
    // 'no-extra-parens': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow mixed spaces and tabs for indentation
    */
    'no-mixed-spaces-and-tabs': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow multiple spaces
    */
    'no-multi-spaces': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow multiple empty lines
    */
    'no-multiple-empty-lines': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow all tabs
    */
    'no-tabs': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow trailing whitespace at the end of lines
    */
    'no-trailing-spaces': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow whitespace before properties
    */
    // 'no-whitespace-before-property': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce the location of single-line statements
    */
    // 'nonblock-statement-body-position': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent line breaks after opening and before closing braces
    */
    // 'object-curly-newline': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing inside braces
    */
    'object-curly-spacing': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'always',
    ],
    /*
        Enforce placing object properties on separate lines
    */
    // 'object-property-newline': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent linebreak style for operators
    */
    'operator-linebreak': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'after',
    ],
    /*
        Require or disallow padding within blocks
    */
    'padded-blocks': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'never',
    ],
    /*
        Require or disallow padding lines between statements
    */
    // 'padding-line-between-statements': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce the consistent use of either backticks, double, or single quotes
    */
    'quotes': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'single',
        {
            allowTemplateLiterals: true,
        },
    ],
    /*
        Enforce spacing between rest and spread operators and their expressions
    */
    'rest-spread-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow semicolons instead of ASI
    */
    'semi': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before and after semicolons
    */
    'semi-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce location of semicolons
    */
    // 'semi-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before blocks
    */
    'space-before-blocks': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before `function` definition opening
        parenthesis
    */
    'space-before-function-paren': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        {
            asyncArrow: 'always',
            anonymous: 'never',
            named: 'never',
        },
    ],
    /*
        Enforce consistent spacing inside parentheses
    */
    // 'space-in-parens': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require spacing around infix operators
    */
    // 'space-infix-ops': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before or after unary operators
    */
    // 'space-unary-ops': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce spacing around colons of switch statements
    */
    'switch-colon-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow spacing around embedded expressions of template
        strings
    */
    // 'template-curly-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow spacing between template tags and their literals
    */
    // 'template-tag-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow Unicode byte order mark (BOM)
    */
    // 'unicode-bom': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require parentheses around immediate `function` invocations
    */
    // 'wrap-iife': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require parenthesis around regex literals
    */
    // 'wrap-regex': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow spacing around the `*` in `yield*` expressions
    */
    'yield-star-spacing': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'after',
    ],
};

/**
 * Eslint plugin related rules.
 */
const PLUGINS = {
    /*
        ESLint plugin to ensure that files begin with given comment.
    */
    'header/header': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        'block',
        require('./package.json').license,
    ],
};

module.exports = {
    ...POSSIBLE_PROBLEMS,
    ...SUGGESTIONS,
    ...LAYOUT_AND_FORMATTING,
    ...PLUGINS,
};
