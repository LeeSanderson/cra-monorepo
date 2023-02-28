# cra-monorepo
Example / template mono repo created using create react app

# Getting Started

1. Install Dependencies

```bash
    $ npm install
```
# Configure Test Explorer
- Command Palette
- Setup Monorepo Project
- There is a centralized jest config for all tests
- jestCommandLine -> Edit = `npx jest`
- Save Settings

# Adding dependencies
Example: add `react-router-dom` to the **my-healthy-advantage** app project
```bash
    $ npm install react-router-dom -w my-healthy-advantage
```
Example: add `@brighthr/component-input` to the **shared** project
```bash
    $ npm install @brighthr/component-input -w shared
```
