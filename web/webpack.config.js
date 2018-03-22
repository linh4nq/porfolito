const path = require("path");

const modulesConfig = require("./webpack/modules.js");
const pluginsConfig = require("./webpack/plugins.js");

module.exports = function (env) {
  const shouldCompress = env !== undefined && env.compress !== undefined && env.compress === true;
  const siteName = env !== undefined && env.site !== undefined ? env.site : "global";
  const siteSrcPath = path.resolve(__dirname, `src/sites/${siteName}/`);
  const siteDistPath = path.resolve(__dirname, `dist/${siteName}/`);

  return {
    plugins: pluginsConfig(shouldCompress),
    entry: [path.resolve(siteSrcPath, "index.js")],
    output: {
      path: siteDistPath,
      publicPath: "/",
      filename: "bundle.js",
    },
    devServer: {
      contentBase: siteDistPath,
      historyApiFallback: {
        index: "index.html",
      },
    },
    module: modulesConfig(siteSrcPath),
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    devtool: "source-map",
  };
};
