import { path_resolve } from "./path_resolve.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { folder_scripts_join_mjs } from "./folder_scripts_join_mjs.mjs";
export async function webpack_config_cache(folder) {
  arguments_assert(arguments, 1);
  ("Whether a build writing to this folder may keep what it compiled on disk and reuse it next time. Only the dev folder may: that is the bundle rebuilt all day while an app is being worked on, and every rebuild of it recompiles the same thousands of unchanged modules from scratch. Measured 2026-08-14 on one app, five and a half seconds with nothing kept became two.");
  ("Everything else is refused a cache on purpose. The folders a promote reads from are written rarely and read by people, so what goes out is worth the seconds it takes to make it from the source alone, with nothing on disk able to stand in for a file.");
  ("The config file is named as a thing the cache depends on, so editing it throws away what was kept. Webpack follows that file's own imports too, which is what makes a change to any part of the config reach the cache. Without it a config edit is invisible and every later build answers from a cache built under the old rules.");
  ("That path is made absolute before it is handed over. Webpack takes a build dependency only as a full path from the root, and a path written from wherever the build happened to start is accepted without complaint and then watches nothing - the quietest way for this whole arrangement to look like it is working while the one file that must invalidate it does not.");
  let f_path = app_shared_name_dev_text();
  let dev = folder_public_join(f_path);
  let dev_is = text_ends_with(folder, dev);
  if (dev_is) {
    let config = folder_scripts_join_mjs("webpack.config");
    let config_path = await path_resolve(config);
    let r = {
      type: "filesystem",
      buildDependencies: {
        config: [config_path],
      },
    };
    return r;
  }
  return false;
}
