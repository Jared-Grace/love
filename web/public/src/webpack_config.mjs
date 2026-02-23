import { list_to_dictionary } from "../../../love/public/src/list_to_dictionary.mjs";
import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
export function webpack_config() {
  let entry_path = webpack_config_entry_path();
  let entry = process_env_trim(entry_path);
  let p = webpack_config_entry_path();
  let props = [p];
  let dictionary = list_to_dictionary(
    list,
    function lambda(item2v) {},
    function lambda2(item2k) {},
  );
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
