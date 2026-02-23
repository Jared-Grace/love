import { property_get_invoke } from "../../../love/public/src/property_get_invoke.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
export function webpack_config() {
  let p = webpack_config_entry_path();
  let props = [p];
  let dictionary = list_to_dictionary_value(props, process_env_trim);
  let p2 = webpack_config_entry_path;
  let entry = property_get_invoke(p2, dictionary);
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
