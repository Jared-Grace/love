import { log } from "../../../love/public/src/log.mjs";
import { webpack_config_folder } from "../../../love/public/src/webpack_config_folder.mjs";
import { path_resolve } from "../../../love/public/src/path_resolve.mjs";
import { webpack_config_filename } from "../../../love/public/src/webpack_config_filename.mjs";
import { process_env_args_get } from "../../../love/public/src/process_env_args_get.mjs";
import { webpack_config_entry_path } from "../../../love/public/src/webpack_config_entry_path.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
export async function webpack_config() {
  let process_env_get = process_env_args_get();
  let entry = process_env_get(webpack_config_entry_path);
  let filename = process_env_get(webpack_config_filename);
  let folder = process_env_get(webpack_config_folder);
  let path = await path_resolve(folder);
  let r = {
    mode: "production",
    entry,
    output: {
      filename,
      path,
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
  log({
    r,
  });
  return r;
}
