import { webpack_config_cache } from "./webpack_config_cache.mjs";
import { log } from "./log.mjs";
import { webpack_config_folder } from "./webpack_config_folder.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { webpack_config_filename } from "./webpack_config_filename.mjs";
import { process_env_args_get } from "./process_env_args_get.mjs";
import { webpack_config_entry_path } from "./webpack_config_entry_path.mjs";
import { webpack_config_node_builtins_fallback } from "./webpack_config_node_builtins_fallback.mjs";
import { webpack_config_node_scheme_strip_plugin } from "./webpack_config_node_scheme_strip_plugin.mjs";
import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
export async function webpack_config() {
  "The one settings object every bundle in this repo is built from. What differs between one build and another arrives in four values and nothing else: where to start reading, what to call what comes out, which folder to put it in, and whether that folder is one whose builds may keep what they compiled. Everything below those four is the same for the bundle a person is working on and the bundle that goes out to readers, which is why a change made here is felt everywhere at once.";
  let process_env_get = process_env_args_get();
  let entry = process_env_get(webpack_config_entry_path);
  let filename = process_env_get(webpack_config_filename);
  let folder = process_env_get(webpack_config_folder);
  let path = await path_resolve(folder);
  let cache = await webpack_config_cache(folder);
  let plugin = webpack_config_node_scheme_strip_plugin();
  let r = {
    mode: "production",
    entry,
    cache,
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
      plugin,
    ],
  };
  log(webpack_config.name, {
    r,
  });
  return r;
}
