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
  "The plugin that ignores a module by name has the admin half of Firebase named in it, and that was the biggest thing in this repo's built output. Every page that could reach it carried the whole admin package as a piece of its own: three and a half megabytes each, seven hundred KiB of it over the wire, nine copies of it in the dev folder alone and more in the two folders beside that - and they are tracked, so each rebuild that moved a byte wrote another one into the history.";
  ("Nothing in a browser could ever run a line of it. It arrived because ",
    fn_name("firebase_admin_get"),
    " asks for the package while it runs, which is what makes a piece of its own, and the next thing it asks for is a service account file read off a disk - a read this build answers with nothing at all, because the file half of the node builtins is switched off for a browser. So the piece was built and shipped and committed and could not have worked if it had been fetched. Naming it here moves the failure one line earlier, onto the line that was always going to fail, and takes the megabytes out with it.");
  ("★ THE CODE FORMATTER SITS BESIDE IT IN THE SIZE REPORT AND MUST NOT BE NAMED HERE. Three hundred KiB of parsers across four pages, and it reads like the very same waste - a package no page should need, sitting in a piece nobody fetches. It is not the same. ",
    fn_name("js_format"),
    " asks whether it is running in a browser and has a whole branch for the case where it is, fetching those parsers itself when it gets there. Name the package here and that branch throws instead of formatting.");
  ("The two are told apart only by reading the body. From the outside they are one shape - big, lazily fetched, obviously server-ish - which is why a list of the largest pieces is not where this decision can be made, however much it looks like the list is asking for one.");
  ("Untracking what is already tracked is a separate question again, with a history behind it, and nothing here settles it.");
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
        resourceRegExp: /^firebase-admin$/,
      }),
      plugin,
    ],
  };
  log(webpack_config.name, {
    r,
  });
  return r;
}
