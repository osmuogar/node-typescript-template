/* PROJECT_LICENSE */

const ESLINT_ERROR_LEVEL = require('./.eslint.lvl.rules');

/**
 * Rules regarding documentation.
 */
const JSDOC_RULES = {
    /*
        Checks that @access tags use one of the following values:
        'package', 'private', 'protected', 'public'
        Also reports:
        - Mixing of @access with @public, @private, @protected, or @package on
            the same doc block.
        - Use of multiple instances of @access (or the @public, etc. style tags)
            on the same doc block.
    */
    'jsdoc/check-access': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Reports invalid alignment of JSDoc block asterisks.
    */
    'jsdoc/check-alignment': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
    */
    // 'jsdoc/check-examples': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Reports invalid padding inside JSDoc blocks.
    */
    'jsdoc/check-indentation': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Reports invalid alignment of JSDoc block lines.
    */
    'jsdoc/check-line-alignment': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Ensures that parameter names in JSDoc are matched by corresponding items
        in the function declaration.
    */
    'jsdoc/check-param-names': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        check-property-names
    */
    'jsdoc/check-property-names': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Reports against syntax not encouraged for the mode.
    */
    // 'jsdoc/check-syntax': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Reports invalid block tag names.
    */
    'jsdoc/check-tag-names': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Reports invalid types.
    */
    'jsdoc/check-types': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        This rule checks the values for a handful of tags:
        version - Checks that there is a present and valid semver version
            value.
        since - As with @version.
        license - Checks that there is a present and valid SPDX identifier or
            is present within an allowedLicenses option.
        author - Checks that there is a value present, and if the option
            allowedAuthors is present, ensure that the author value is one of
            these array items.
        variation - If numericOnlyVariation is set, will checks that there is a
            value present, and that it is an integer (otherwise, jsdoc allows
            any value).
        kind - Insists that it be one of the allowed values: 'class',
            'constant', 'event', 'external', 'file', 'function', 'member',
            'mixin', 'module', 'namespace', 'typedef'.
    */
    'jsdoc/check-values': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Expects the following tags to be empty of any content:
        abstract, async, generator, global, hideconstructor, ignore, inheritdoc,
        inner, instance, internal (used by TypeScript), override, readonly
    */
    'jsdoc/empty-tags': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Reports an issue with any non-constructor function using @implements.
    */
    'jsdoc/implements-on-classes': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforces a regular expression pattern on descriptions.
    */
    'jsdoc/match-description': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Controls how and whether jsdoc blocks can be expressed as single or
        multiple line blocks.
    */
    'jsdoc/multiline-blocks': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Enforces a consistent padding of the block description.
    */
    'jsdoc/newline-after-description': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        This rule checks for multi-line-style comments which fail to meet the
        criteria of a jsdoc block, namely that it should begin with two and only
        two asterisks, but which appear to be intended as jsdoc blocks due to
        the presence of whitespace followed by whitespace or asterisks, and an
        at-sign (@) and some non-whitespace (as with a jsdoc block tag).
    */
    'jsdoc/no-bad-blocks': ESLINT_ERROR_LEVEL.DEFAULT,
    // This rule reports defaults being used on the relevant portion of @param
    // or @default. It also optionally reports the presence of the
    // square-bracketed optional arguments at all.
    // 'jsdoc/no-defaults': ESLINT_ERROR_LEVEL.DEFAULT,
    // This rule lets you report if certain always expected comment structures
    // are missing.
    // 'jsdoc/no-missing-syntax': ESLINT_ERROR_LEVEL.DEFAULT,
    // Prevents use of multiple asterisks at the beginning of lines.
    'jsdoc/no-multi-asterisks': ESLINT_ERROR_LEVEL.DEFAULT,
    // Reports when certain comment structures are present.
    // 'jsdoc/no-restricted-syntax': ESLINT_ERROR_LEVEL.DEFAULT,
    // This rule reports types being used on @param or @returns.
    // 'jsdoc/no-types': ESLINT_ERROR_LEVEL.DEFAULT,
    // Checks that types in jsdoc comments are defined. This can be used to
    // check unimported types.
    'jsdoc/no-undefined-types': [
        ESLINT_ERROR_LEVEL.DEFAULT, {
            definedTypes: [
                'ReqT',
                'ResT',
                'DefP',
            ],
        }],
    // Requires that each JSDoc line starts with an *.
    'jsdoc/require-asterisk-prefix': ESLINT_ERROR_LEVEL.DEFAULT,
    // Requires that all functions have a description. All functions must have
    // an implicit description (e.g., text above tags) or have the option
    // descriptionStyle set to tag (requiring @description (or @desc if that is
    // set as your preferred tag name)). Every jsdoc block description (or
    // @description tag if descriptionStyle is 'tag') must have a non-empty
    // description that explains the purpose of the method.
    'jsdoc/require-description': [
        ESLINT_ERROR_LEVEL.DEFAULT,
        {
            descriptionStyle: 'tag',
            checkConstructors: false,
        },
    ],
    /*
        Requires that block description, explicit @description, and
        param/returns tag descriptions are written in complete sentences, i.e.,
        Description must start with an uppercase alphabetical character.
        Paragraphs must start with an uppercase alphabetical character.
        Sentences must end with a period.
        Every line in a paragraph (except the first) which starts with an
        uppercase character must be preceded by a line ending with a period.
        A colon or semi-colon followed by two line breaks is still part of the
        containing paragraph (unlike normal dual line breaks).
        Text within inline tags {...} are not checked for sentence divisions.
        Periods after items within the abbreviations option array are not
        treated as sentence endings.
    */
    // 'jsdoc/require-description-complete-sentence':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that all functions have examples.
        All functions must have one or more @example tags.
        Every example tag must have a non-empty description that explains the
        method's usage.
    */
    // 'jsdoc/require-example': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Checks that:
        All files have a @file, @fileoverview, or @overview tag.
        Duplicate file overview tags within a given file will be reported
        File overview tags will be reported which are not, as per the docs, 'at
        the beginning of the file'–where beginning of the file is interpreted in
        this rule as being when the overview tag is not preceded by anything
        other than a comment.
    */
    // 'jsdoc/require-file-overview': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires (or disallows) a hyphen before the @param description.
    */
    // 'jsdoc/require-hyphen-before-param-description':
    //      ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Checks for presence of jsdoc comments, on class declarations as well as
        functions.
    */
    'jsdoc/require-jsdoc': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that all function parameters are documented.
    */
    'jsdoc/require-param': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that each @param tag has a description value.
    */
    'jsdoc/require-param-description': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that all function parameters have names.
    */
    'jsdoc/require-param-name': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that each @param tag has a type value.
    */
    'jsdoc/require-param-type': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that all @typedef and @namespace tags have @property when their
        type is a plain object, Object, or PlainObject.
    */
    'jsdoc/require-property': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that each @property tag has a description value.
    */
    'jsdoc/require-property-description': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that all function @property tags have names.
    */
    'jsdoc/require-property-name': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that each @property tag has a type value.
    */
    'jsdoc/require-property-type': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that returns are documented.
    */
    'jsdoc/require-returns':
        [
            ESLINT_ERROR_LEVEL.DEFAULT,
            {
                /*
                    Set to true to always insist on @returns documentation
                    regardless of implicit or explicit return's in the function.
                    May be desired to flag that a project is aware of an
                    undefined/void return. Defaults to false.
                */
                'forceRequireReturn': true,
                /*
                    By default async functions that do not explicitly return a
                    value pass this rule as an async function will always return
                    a Promise, even if the Promise resolves to void. You can
                    force all async functions (including ones with an explicit
                    Promise but no detected non-undefined resolve value) to
                    require @return documentation by setting
                    forceReturnsWithAsync to true on the options object. This
                    may be useful for flagging that there has been consideration
                    of return type. Defaults to false.
                */
                'forceReturnsWithAsync': true,
            }],
    /*
        Requires a return statement (or non-undefined Promise resolve value) in
        function bodies if a @returns tag (without a void or undefined type) is
        specified in the function's JSDoc comment.
        Will also report @returns {void} and @returns {undefined} if exemptAsync
        is set to false and a non-undefined value is returned or a resolved
        value is found. Also reports if @returns {never} is discovered with a
        return value.
        Will also report if multiple @returns tags are present.
    */
    'jsdoc/require-returns-check': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that the @returns tag has a description value. The error will
        not be reported if the return value is void or undefined or if it is
        Promise<void> or Promise<undefined>.
    */
    //  'jsdoc/require-returns-description': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that @returns tag has type value.
    */
    'jsdoc/require-returns-type': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that throw statements are documented.
        Note that since throw statements within async functions end up as
        rejected Promises, they are not considered as throw statements for the
        purposes of this rule. See issue 755 for our desire for a separate tag
        to document rejection types and see this discussion on why TypeScript
        doesn't offer such a feature.
    */
    'jsdoc/require-throws': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Requires that yields are documented.
        Will also report if multiple @yields tags are present.
        See the next, forceRequireNext, and nextWithGeneratorTag options for an
        option to expect a non-standard @next tag.
    */
    'jsdoc/require-yields': ESLINT_ERROR_LEVEL.DEFAULT,
    /*
        Ensures that if a @yields is present that a yield (or yield with a
        value) is present in the function body (or that if a @next is present
        that there is a yield with a return value present).
        Please also note that JavaScript does allow generators not to have yield
        (e.g., with just a return or even no explicit return), but if you want
        to enforce that all generators (except wholly empty ones) have a yield
        in the function body, you can use the ESLint require-yield rule. In
        conjunction with this, you can also use the checkGeneratorsOnly option
        as an optimization so that this rule won't need to do its own checking
        within function bodies.
        Will also report if multiple @yields tags are present.
    */
    // 'jsdoc/require-yields-check': ESLINT_ERROR_LEVEL.DEFAULT,
};

module.exports = JSDOC_RULES;
