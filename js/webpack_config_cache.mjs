import { file_extension_js } from "./file_extension_js.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { folder_scripts_join_mjs } from "./folder_scripts_join_mjs.mjs";
export async function webpack_config_cache(folder, filename) {
  arguments_assert(arguments, 2);
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
    ("★ EACH APP IS GIVEN ITS OWN STORE, AND WITHOUT A NAME THEY ALL SHARE ONE. Webpack names a nameless store after the mode alone, so every app was writing into a single folder called default-production - measured on the 21st of August at a thousand and thirteen megabytes in a hundred and ninety six files. Thirty apps can be built at the same moment, so that was up to thirty programs reading and rewriting the same files, which is not something this store is built to survive.");
    ("What made it worth changing rather than noting: on that morning four builds were found spinning at full power for six to seven hours, and this is the one thing every build was contending over. That is a mechanism and a coincidence rather than a proof - the builds were killed before anybody looked inside them, so nobody can now say what they were spinning ON. It is written as the strongest available account and not as a settled cause.");
    ("The name is the bundle's own filename without its extension, so it is the app's name and cannot drift from it. The cost is disk: what the apps shared they now each keep, and the pieces common to all of them are kept once per app. That was checked before choosing - three hundred and seventy three gigabytes free against a gigabyte shared today.");
    let extension = file_extension_js();
    let name = text_suffix_without(filename, extension);
    let r = {
      type: "filesystem",
      name,
      buildDependencies: {
        config: [config_path],
      },
    };
    return r;
  }
  return false;
}
