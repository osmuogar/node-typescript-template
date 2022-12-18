/* PROJECT_LICENSE */

const ESLINT_ERROR_LEVEL = require('./.eslint.lvl.rules');

/*
    All rules have been taken from:     https://typescript-eslint.io/rules/
    Typescript-eslint version:  v5.43.0
*/

/**
 * Typescript rules.
 */
const SUPPORTED_SULES = {
    /*
        Require that function overload signatures be consecutive
    */
    // '@typescript-eslint/adjacent-overload-signatures':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require consistently using either T[] or Array<T> for arrays
    */
    '@typescript-eslint/array-type': ESLINT_ERROR_LEVEL.DEFAULT,
    /* Disallow awaiting a value that is not a Thenable */
    // '@typescript-eslint/await-thenable': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow @ts-<directive> comments or require descriptions after
        directives
    */
    // '@typescript-eslint/ban-ts-comment': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow // tslint:<rule-flag> comments
    */
    // '@typescript-eslint/ban-tslint-comment': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow certain types
    */
    '@typescript-eslint/ban-types': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce that literals on classes are exposed in a consistent style
    */
    // '@typescript-eslint/class-literal-property-style':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        name of a constructor call
    */
    // '@typescript-eslint/consistent-generic-constructors':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow the Record type
    */
    // '@typescript-eslint/consistent-indexed-object-style':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent usage of type assertions
    */
    // '@typescript-eslint/consistent-type-assertions':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce type definitions to consistently use either interface or type
    */
    // '@typescript-eslint/consistent-type-definitions':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent usage of type exports
    */
    // '@typescript-eslint/consistent-type-exports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent usage of type imports
    */
    // '@typescript-eslint/consistent-type-imports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require explicit return types on functions and class methods
    */
    '@typescript-eslint/explicit-function-return-type':
        ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require explicit accessibility modifiers on class properties and methods
    */
    // '@typescript-eslint/explicit-member-accessibility':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require explicit return and argument types on exported functions' and
        classes' public class methods
    */
    // '@typescript-eslint/explicit-module-boundary-types':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require a specific member delimiter style for interfaces and type
        literals
    */
    // '@typescript-eslint/member-delimiter-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require a consistent member declaration order
    */
    // '@typescript-eslint/member-ordering': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce using a particular method signature syntax
    */
    // '@typescript-eslint/method-signature-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce naming conventions for everything across a codebase
    */
    // '@typescript-eslint/naming-convention': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require .toString() to only be called on objects which provide useful
        information when stringified
    */
    // '@typescript-eslint/no-base-to-string': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow non-null assertion in locations that may be confusing
    */
    // '@typescript-eslint/no-confusing-non-null-assertion':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require expressions of type void to appear in statement position
    */
    // '@typescript-eslint/no-confusing-void-expression':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate enum member values
    */
    // '@typescript-eslint/no-duplicate-enum-values':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow using the delete operator on computed key expressions
    */
    // '@typescript-eslint/no-dynamic-delete': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the declaration of empty interfaces
    */
    // '@typescript-eslint/no-empty-interface': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the any type
    */
    '@typescript-eslint/no-explicit-any': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow extra non-null assertions
    */
    // '@typescript-eslint/no-extra-non-null-assertion':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow classes used as namespaces
    */
    // '@typescript-eslint/no-extraneous-class': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require Promise-like statements to be handled appropriately
    */
    // '@typescript-eslint/no-floating-promises': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow iterating over an array with a for-in loop
    */
    // '@typescript-eslint/no-for-in-array': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow usage of the implicit any type in catch clauses
    */
    '@typescript-eslint/no-implicit-any-catch': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow explicit type declarations for variables or parameters
        initialized to a number, string, or boolean
    */
    '@typescript-eslint/no-inferrable-types': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow void type outside of generic or return types
    */
    // '@typescript-eslint/no-invalid-void-type': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the void operator except when used to discard a value
    */
    // '@typescript-eslint/no-meaningless-void-operator':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce valid definition of new and constructor
    */
    // '@typescript-eslint/no-misused-new': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow Promises in places not designed to handle them
    */
    // '@typescript-eslint/no-misused-promises': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow TypeScript namespaces
    */
    // '@typescript-eslint/no-namespace': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow non-null assertions in the left operand of a nullish coalescing
        operator
    */
    // '@typescript-eslint/no-non-null-asserted-nullish-coalescing':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow non-null assertions after an optional chain expression
    */
    // '@typescript-eslint/no-non-null-asserted-optional-chain':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow non-null assertions using the ! postfix operator
    */
    // '@typescript-eslint/no-non-null-assertion': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of parameter properties in class constructors
    */
    // '@typescript-eslint/no-parameter-properties': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow members of unions and intersections that do nothing or override
        type information
    */
    // '@typescript-eslint/no-redundant-type-constituents':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow invocation of require()
    */
    // '@typescript-eslint/no-require-imports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow aliasing this
    */
    // '@typescript-eslint/no-this-alias': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow type aliases
    */
    // '@typescript-eslint/no-type-alias': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary equality comparisons against boolean literals
    */
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow conditionals where the type is always truthy or always falsy
    */
    // '@typescript-eslint/no-unnecessary-condition':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary namespace qualifiers
    */
    // '@typescript-eslint/no-unnecessary-qualifier':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow type arguments that are equal to the default
    */
    // '@typescript-eslint/no-unnecessary-type-arguments':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow type assertions that do not change the type of an expression
    */
    // '@typescript-eslint/no-unnecessary-type-assertion':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary constraints on generic types
    */
    // '@typescript-eslint/no-unnecessary-type-constraint':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow calling a function with a value with type any
    */
    '@typescript-eslint/no-unsafe-argument': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow assigning a value with type any to variables and properties
    */
    '@typescript-eslint/no-unsafe-assignment': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow calling a value with type any
    */
    '@typescript-eslint/no-unsafe-call': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unsafe declaration merging
    */
    // '@typescript-eslint/no-unsafe-declaration-merging':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow member access on a value with type any
    */
    '@typescript-eslint/no-unsafe-member-access': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow returning a value with type any from a function
    */
    '@typescript-eslint/no-unsafe-return': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow empty exports that don't change anything in a module file
    */
    '@typescript-eslint/no-useless-empty-export': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow require statements except in import statements
    */
    // '@typescript-eslint/no-var-requires': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce non-null assertions over explicit type casts
    */
    // '@typescript-eslint/non-nullable-type-assertion-style':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow parameter properties in class constructors
    */
    // '@typescript-eslint/parameter-properties': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce the use of as const over literal type
    */
    // '@typescript-eslint/prefer-as-const': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require each enum member value to be explicitly initialized
    */
    // '@typescript-eslint/prefer-enum-initializers':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce the use of for-of loop over the standard for loop where possible
    */
    // '@typescript-eslint/prefer-for-of': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce using function types instead of interfaces with call signatures
    */
    // '@typescript-eslint/prefer-function-type': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce includes method over indexOf method
    */
    // '@typescript-eslint/prefer-includes': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require all enum members to be literal values
    */
    // '@typescript-eslint/prefer-literal-enum-member':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require using namespace keyword over module keyword to declare custom
        TypeScript modules
    */
    // '@typescript-eslint/prefer-namespace-keyword':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce using the nullish coalescing operator instead of logical
        chaining
    */
    // '@typescript-eslint/prefer-nullish-coalescing':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce using concise optional chain expressions instead of chained
        logical ands, negated logical ors, or empty objects
    */
    // '@typescript-eslint/prefer-optional-chain': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require private members to be marked as readonly if they're never
        modified outside of the constructor
    */
    // '@typescript-eslint/prefer-readonly': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require function parameters to be typed as readonly to prevent
        accidental mutation of inputs
    */
    // '@typescript-eslint/prefer-readonly-parameter-types':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce using type parameter when calling Array#reduce instead of
        casting
    */
    // '@typescript-eslint/prefer-reduce-type-parameter':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce RegExp#exec over String#match if no global flag is provided
    */
    // '@typescript-eslint/prefer-regexp-exec': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce that this is used when only this type is returned
    */
    // '@typescript-eslint/prefer-return-this-type': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce using String#startsWith and String#endsWith over other
        equivalent methods of checking substrings
    */
    // '@typescript-eslint/prefer-string-starts-ends-with':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce using @ts-expect-error over @ts-ignore
    */
    // '@typescript-eslint/prefer-ts-expect-error': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require any function or method that returns a Promise to be marked async
    */
    '@typescript-eslint/promise-function-async': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require Array#sort calls to always provide a compareFunction
    */
    // '@typescript-eslint/require-array-sort-compare':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require both operands of addition to be the same type and be bigint,
        number, or string
    */
    // '@typescript-eslint/restrict-plus-operands': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce template literal expressions to be of string type
    */
    // '@typescript-eslint/restrict-template-expressions':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce constituents of a type union/intersection to be sorted
        alphabetically
    */
    // '@typescript-eslint/sort-type-constituents': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce members of a type union/intersection to be sorted alphabetically
    */
    // '@typescript-eslint/sort-type-union-intersection-members':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow certain types in boolean expressions
    */
    // '@typescript-eslint/strict-boolean-expressions':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require switch-case statements to be exhaustive with union type
    */
    // '@typescript-eslint/switch-exhaustiveness-check':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow certain triple slash directives in favor of ES6-style import
        declarations
    */
    // '@typescript-eslint/triple-slash-reference': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require consistent spacing around type annotations
    */
    // '@typescript-eslint/type-annotation-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require type annotations in certain places
    */
    // '@typescript-eslint/typedef': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce unbound methods are called with their expected scope
    */
    // '@typescript-eslint/unbound-method': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow two overloads that could be unified into one with a union or an
        optional/rest parameter
    */
    // '@typescript-eslint/unified-signatures': ESLINT_ERROR_LEVEL.DEFAULT,
};

/**
 * JavaScript rules that must be re-checked in TypeScript.
 */
const EXTENSION_RULES = {
    /*
        Enforce consistent brace style for blocks
    */
    // '@typescript-eslint/brace-style': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow trailing commas
    */
    // '@typescript-eslint/comma-dangle': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before and after commas
    */
    // '@typescript-eslint/comma-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce default parameters to be last
    */
    // '@typescript-eslint/default-param-last': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce dot notation whenever possible
    */
    // '@typescript-eslint/dot-notation': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow spacing between function identifiers and their
        invocations
    */
    // '@typescript-eslint/func-call-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent indentation
    */
    // '@typescript-eslint/indent': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow initialization in variable declarations
    */
    // '@typescript-eslint/init-declarations': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before and after keywords
    */
    // '@typescript-eslint/keyword-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow an empty line between class members
    */
    // '@typescript-eslint/lines-between-class-members':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow generic Array constructors
    */
    // '@typescript-eslint/no-array-constructor': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate class members
    */
    // '@typescript-eslint/no-dupe-class-members': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow duplicate imports
    */
    // '@typescript-eslint/no-duplicate-imports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow empty functions
    */
    // '@typescript-eslint/no-empty-function': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary parentheses
    */
    // '@typescript-eslint/no-extra-parens': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary semicolons
    */
    // '@typescript-eslint/no-extra-semi': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of eval()-like methods
    */
    // '@typescript-eslint/no-implied-eval': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow this keywords outside of classes or class-like objects
    */
    // '@typescript-eslint/no-invalid-this': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow function declarations that contain unsafe references inside
        loop statements
    */
    // '@typescript-eslint/no-loop-func': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow literal numbers that lose precision
    */
    // '@typescript-eslint/no-loss-of-precision': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow magic numbers
    */
    // '@typescript-eslint/no-magic-numbers': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow variable redeclaration
    */
    // '@typescript-eslint/no-redeclare': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow specified modules when loaded by import
    */
    // '@typescript-eslint/no-restricted-imports': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow variable declarations from shadowing variables declared in the
        outer scope
    */
    // '@typescript-eslint/no-shadow': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow throwing literals as exceptions
    */
    // '@typescript-eslint/no-throw-literal': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unused expressions
    */
    // '@typescript-eslint/no-unused-expressions': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unused variables
    */
    '@typescript-eslint/no-unused-vars': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow the use of variables before they are defined
    */
    // '@typescript-eslint/no-use-before-define': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow unnecessary constructors
    */
    // '@typescript-eslint/no-useless-constructor': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing inside braces
    */
    // '@typescript-eslint/object-curly-spacing': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow padding lines between statements
    */
    // '@typescript-eslint/padding-line-between-statements':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce the consistent use of either backticks, double, or single quotes
    */
    // '@typescript-eslint/quotes': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Disallow async functions which have no await expression
    */
    // '@typescript-eslint/require-await': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent returning of awaited values
    */
    // '@typescript-eslint/return-await': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require or disallow semicolons instead of ASI
    */
    // '@typescript-eslint/semi': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before blocks
    */
    // '@typescript-eslint/space-before-blocks': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforce consistent spacing before function parenthesis
    */
    // '@typescript-eslint/space-before-function-paren':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Require spacing around infix operators
    */
    // '@typescript-eslint/space-infix-ops': ESLINT_ERROR_LEVEL.DEFAULT,
};

module.exports = {
    ...SUPPORTED_SULES,
    ...EXTENSION_RULES,
};
