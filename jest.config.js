module.exports = {
    projects: [
        {
            rootDir: "<rootDir>/apps/my-healthy-advantage",
            verbose: true,
            cache: false,
            testEnvironment: "jsdom",
            setupFilesAfterEnv: ["./src/setupTests.ts"],
            transform: {
                "^.+\\.tsx?$": "ts-jest",
                "^.+\\.(svg|css)$": "<rootDir>/../../ignoreTransform.js",
            },
            moduleNameMapper: {
                "shared/(.*)": "<rootDir>/../shared/src/$1",
            },
        },
        {
            rootDir: "<rootDir>/apps/shared",
            verbose: true,
            cache: false,
            testEnvironment: "jsdom",
            setupFilesAfterEnv: ["./src/setupTests.ts"],
            transform: {
                "^.+\\.tsx?$": "ts-jest",
                "^.+\\.(svg|css)$": "<rootDir>/../../ignoreTransform.js",
            },
        },
        {
            rootDir: "<rootDir>/apps/my-healthy-advantage-admin",
            verbose: true,
            cache: false,
            testEnvironment: "jsdom",
            setupFilesAfterEnv: ["./src/setupTests.ts"],
            transform: {
                "^.+\\.tsx?$": "ts-jest",
                "^.+\\.(svg|css)$": "<rootDir>/../../ignoreTransform.js",
            },
            moduleNameMapper: {
                "shared/(.*)": "<rootDir>/../shared/src/$1",
            },
        },
    ],
};
