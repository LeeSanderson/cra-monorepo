// Define override used customize-cra (and react-app-rewired) to resolve 
// shared code when compiling (npm start) or building (npm build)
var path = require("path");

const { override, babelInclude, addWebpackAlias, removeModuleScopePlugin  } = require("customize-cra");

module.exports = function (config, env) {
    return Object.assign(
        config,
        override(
            // Remove module scope to allow access to code outside src directory
            removeModuleScopePlugin(),
            // Add support for transpiling local package imports
            babelInclude([
                path.resolve("src"),
                path.resolve(__dirname, "../shared/src")                
            ]),
            // Add support for resolving packages
            addWebpackAlias({
                'shared': path.resolve(__dirname, '../shared/src'),
              })
        )(config, env)
    );
}
