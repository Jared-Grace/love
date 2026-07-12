import { log } from "./log.mjs";
import { webpack_config_folder } from "./webpack_config_folder.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { webpack_config_filename } from "./webpack_config_filename.mjs";
import { process_env_args_get } from "./process_env_args_get.mjs";
import { webpack_config_entry_path } from "./webpack_config_entry_path.mjs";
import { webpack_config_node_builtins_fallback } from "./webpack_config_node_builtins_fallback.mjs";
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
    resolve: {
      fallback: webpack_config_node_builtins_fallback(),
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
  log(webpack_config.name, {
    r,
  });
  return r;
}
