/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: 'node',            // Use Node.js environment for testing
    transform: {
        '^.+\\.tsx?$': 'ts-jest',       // Use ts-jest for transforming TypeScript files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'], // Resolve these file extensions
    testMatch: ['**/_test_/**/*.test.ts'], // Look for test files inside the _test_ folder
};
