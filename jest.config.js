module.exports = {
    projects: [
        {
            displayName: "my-healthy-advantage",
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
            displayName: "shared",
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
            displayName: "my-healthy-advantage-admin",
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
