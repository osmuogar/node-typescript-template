/* PROJECT_LICENSE */

export enum ENVIRONMENT {
    // eslint-disable-next-line no-unused-vars
    PRODUCTION = 'production', DEVELOPMENT = 'development', TEST = 'test'
}

/**
 * @description Checks if the environment is a valid environment.
 * @param {string} env Environment to check.
 * @returns {boolean}
 */
export function isValidEnvironment(env: string | undefined): boolean {
    let result;
    switch (env) {
        case ENVIRONMENT.PRODUCTION:
        case ENVIRONMENT.DEVELOPMENT:
        case ENVIRONMENT.TEST:
            result = true;
            break;
        default:
            result = false;
    }
    return result;
}
