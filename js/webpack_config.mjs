import { fn_name } from "./fn_name.mjs";
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
  "The plugin that ignores a module by name is here with nothing named in it, and the biggest thing in this repo's built output is what would go there. Every page that can reach the admin half of Firebase carries the whole admin package as a piece of its own: three and a half megabytes each, seven hundred KiB of it over the wire, nine copies of it in the dev folder alone and more in the two folders beside that - and they are tracked, so each rebuild that moves a byte writes another one into the history.";
  ("Nothing in a browser can run a line of it. It arrives because ",
    fn_name("firebase_admin_get"),
    " asks for the package while it runs, which is what makes a piece of its own, and the asking sits behind a service account file read off a disk - so the piece is built and shipped and committed and never once fetched. A smaller one beside it, three hundred KiB in four pages, is the code formatter's parsers, and it is there for the same reason.");
  ("It is written down rather than fixed because naming a package here is a build decision and the size it is worth is somebody's to weigh - and because untracking what is already tracked is a separate question again, with a history behind it.");
  ("★ A BUILD THAT CHANGES NOTHING USED TO LEAVE NO TRACE THAT IT HAPPENED. The compiler's own habit is to read the file it is about to write, and to leave it alone when the new bytes are the same - it says so in its report, as compared for emit. So a bundle rebuilt and found already correct kept the date it was last DIFFERENT, and every later question of the form is this bundle older than what it is built from answered yes, forever. Rebuilding could not clear it, because rebuilding is what did not touch the file.");
  ("That cost the answer to a question two things ask. The watcher asks it at every start and so rebuilt those apps every time for nothing, and the report that names stale bundles named them permanently - it was written the day before this line and was wrong about the healthy case, which is the one worth being right about. Proven rather than guessed: a build of the replacing app printed compared for emit and left the file with the same date and the same fingerprint it had the night before.");
  ("So the file is written every time now, and the date on a bundle means the last time a build confirmed it rather than the last time it changed. Writing bytes that are already there costs a moment of disk and nothing else - what comes out is identical, so nothing downstream can tell, and the two askers above get an answer that clears.");
  let process_env_get = process_env_args_get();
  let entry = process_env_get(webpack_config_entry_path);
  let filename = process_env_get(webpack_config_filename);
  let folder = process_env_get(webpack_config_folder);
  let path = await path_resolve(folder);
  let cache = await webpack_config_cache(folder, filename);
  let plugin = webpack_config_node_scheme_strip_plugin();
  let r = {
    mode: "production",
    entry,
    cache,
    output: {
      filename,
      path,
      compareBeforeEmit: false,
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
