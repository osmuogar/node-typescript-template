/* PROJECT_LICENSE */

import {
    isValidEnvironment,
} from './util';


/**
 * @description Main function of the package.
 * @param {string[]} args Obtained from process arguments.
 * @returns {Promise<void>}
 */
export async function main(args: string[]): Promise<void> {
    /* Check for a correct node environment. */
    if (process.env.NODE_ENV) {
        if (!isValidEnvironment(process.env.NODE_ENV)) {
            throw new Error('Invalid NODE_ENV value');
        }
    }

    process.stdout.write('Input arguments: ' + JSON.stringify(args) + '\n');
}

// Main execution
main(process.argv).catch((err) => {
    if (err instanceof Error) {
        process.stderr.write('Process finished with error: ' + err.message +
            ': ' + err.stack);
    }
    throw err;
}).finally(() => {
    /* Close streams or connections */
});
