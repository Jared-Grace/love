import path from "path";
import TerserPlugin from "terser-webpack-plugin";
export function webpack_config() {
  let r = {
    mode: "production",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve("./dist"),
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_fnames: true,
            keep_classnames: true,
          },
        }),
      ],
    },
  };
  return r;
}
