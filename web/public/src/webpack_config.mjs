import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
export function webpack_config() {
  let p = webpack_config_entry_path();
  let props = [p];
  let dictionary = list_to_dictionary_key(props, process_env_trim);
  let p2 = webpack_config_entry_path;
  let property_name = p2();
  let entry = property_get(dictionary, property_name);
  let r = {
    mode: "production",
    entry,
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
