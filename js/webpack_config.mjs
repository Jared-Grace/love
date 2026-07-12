import { log } from "./log.mjs";
import { webpack_config_folder } from "./webpack_config_folder.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { webpack_config_filename } from "./webpack_config_filename.mjs";
import { process_env_args_get } from "./process_env_args_get.mjs";
import { webpack_config_entry_path } from "./webpack_config_entry_path.mjs";
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
      fallback: {
        fs: false,
        "fs/promises": false,
        path: false,
        child_process: false,
        readline: false,
        url: false,
        stream: false,
        "stream/promises": false,
        util: false,
        os: false,
        querystring: false,
        assert: false,
        crypto: false,
        http: false,
        https: false,
        http2: false,
        net: false,
        tls: false,
        tty: false,
        zlib: false,
        dns: false,
        dgram: false,
        module: false,
        worker_threads: false,
        perf_hooks: false,
      },
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
