import { webpack_config_filename } from "../../../love/public/src/webpack_config_filename.mjs";
import { process_env_args_get } from "../../../love/public/src/process_env_args_get.mjs";
import { property_invoke_get } from "../../../love/public/src/property_invoke_get.mjs";
import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
export function webpack_config() {
  let props = [webpack_config_entry_path];
  let dictionary = process_env_args_get(props);
  let entry = property_invoke_get(dictionary, webpack_config_entry_path);
  let filename = property_invoke_get(dictionary, webpack_config_filename);
  let r = {
    mode: "production",
    entry,
    output: {
      filename: filename,
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
