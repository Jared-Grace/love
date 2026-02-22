import { app_reply_main } from "../../../love/public/src/app_reply_main.mjs";
import { function_name_to_path_fn } from "../../../love/public/src/function_name_to_path_fn.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
export function webpack_config() {
  let r = {
    mode: "production",
    entry: function_name_to_path_fn(app_reply_main),
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
