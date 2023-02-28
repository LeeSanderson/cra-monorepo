# cra-monorepo

Example / template mono repo created using create react app

# Getting Started

1. Install Dependencies

    ```bash
    npm install
    ```

# Configure Test Explorer

-   Command Palette
-   Setup Monorepo Project
-   There is a centralized jest config for all tests
-   jestCommandLine -> Edit = `npx jest`
-   Save Settings

# Adding dependencies

Example: add `react-router-dom` to the **my-healthy-advantage** app project

```bash
npm install react-router-dom -w my-healthy-advantage
```

Example: add `@brighthr/component-input` to the **shared** project

```bash
npm install @brighthr/component-input -w shared
```

# Adding path aliases

modify the following files/sections

-   [tsconfig.json](apps/my-healthy-advantage/tsconfig.json) > `compilerOptions/paths`
-   [package.json](apps/my-healthy-advantage/package.json) > `jest/moduleNameMapper`
-   [config-overrides.js](apps/my-healthy-advantage/config-overrides.js) > `jbabelInclude` & `addWebpackAlias`

# Adding applications/project to the monorepo

1. Create the app > `npx create-react-app apps/my-healthy-advantage-admin --template typescript`
1. Delete the `node_modules` folder
1. merge the .gitignore contents into the [root .gitignore](./.gitignore) -- TBC
1. Run `npm install` to ensure all packages are installed into the root node_packages folder
1. Add the project to [jest.config.js](./jest.config.js)
1. `npm install --save customize-cra react-app-rewired -w my-healthy-advantage-admin`
1. copy the `config-overrides.js` file from an existing project folder to the new project folder
