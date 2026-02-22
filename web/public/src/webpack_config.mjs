import { folder_current_join } from "../../../love/public/src/folder_current_join.mjs";
import { app_reply_main } from "../../../love/public/src/app_reply_main.mjs";
import { function_name_to_path_fn } from "../../../love/public/src/function_name_to_path_fn.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
export function webpack_config() {
  let result = function_name_to_path_fn(app_reply_main);
  let r = {
    mode: "production",
    entry: folder_current_join(result),
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
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /module-name-to-ignore/,
      }),
    ],
  };
  return r;
}
