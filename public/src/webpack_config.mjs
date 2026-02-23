import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
export function webpack_config() {
  let ev_lib_entry = vite_config_lib_entry();
  let entry = process_env_trim(ev_lib_entry);
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
