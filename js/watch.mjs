import { fn_name } from "./fn_name.mjs";
import { claude_edit_claim_fresh_is } from "./claude_edit_claim_fresh_is.mjs";
import { log } from "./log.mjs";
import { identity } from "./identity.mjs";
import { process_env } from "./process_env.mjs";
import { path_join } from "./path_join.mjs";
import { repos_folder } from "./repos_folder.mjs";
import { path_name } from "./path_name.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_includes } from "./list_includes.mjs";
import { functions_path } from "./functions_path.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
import { property_exists_equals } from "./property_exists_equals.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { import_install } from "./import_install.mjs";
import { property_set } from "./property_set.mjs";
import { command_line_node_g } from "./command_line_node_g.mjs";
export async function watch() {
  "The tree this watcher was started in wins over the tool repo's own tree whenever it is a repo the process may stand in, so a save in another tree is watched and transformed like a neighbour rather than missed. The dispatcher re-homes the process beside the tool repo, and every watched folder and every child command then answered about that one tree - so a watcher started inside a second copy of this tool missed every save in the tree it was started in and watched only the tool repo's own neighbours.";
  let chokidar = (await import_install("chokidar")).default;
  ("The process is stood back where it was started only when that folder is a repo: one whose parent lists it, and that holds a function store to watch. Started anywhere else it stays where the dispatcher stood it and watches that tree exactly as it always did.");
  let started_here = process_env("PWD") || "";
  let second = functions_path();
  let store_here = path_join([started_here, second]);
  let store_there = await folder_exists(store_here);
  let previous = repos_folder();
  let parent_here = path_join([started_here, previous]);
  let parent_there = await folder_exists(parent_here);
  let here_name = path_name(started_here);
  let parent_lists = false;
  if (parent_there) {
    let names = await folder_read(parent_here);
    parent_lists = list_includes(names, here_name);
  }
  let stand_here = store_there && parent_lists;
  if (stand_here) {
    process.chdir(started_here);
  }
  let squashed =
    await repos_paths_map_unordered_combine_squash_functions(identity);
  let watcher = chokidar.watch(squashed, {
    persistent: true,
    ignoreInitial: true,
  });
  let in_progress = {};
  async function lambda2(path) {
    async function lambda() {
      if (property_exists_equals(in_progress, path, true)) {
        return;
      }
      if (claude_edit_claim_fresh_is(path)) {
        ("Claude is editing this exact file right now, so leave it alone — it will run its own transforms. Only THIS file is skipped: a save by the human, in any other file, still transforms immediately. That is the whole point of claiming per path instead of taking one repo-wide lock for a whole Claude session, which used to drop the human's saves too");
        return;
      }
      property_set(in_progress, path, true);
      async function lambda3() {
        try {
          await command_line_node_g(fn_name("function_auto_path"), [path]);
        } finally {
          property_set(in_progress, path, false);
          if (0) {
            try {
              let args = [path];
              await command_line_node_g(fn_name("data_file_update"), args);
            } finally {
              property_set(in_progress, path, false);
            }
          }
        }
      }
      log(watch.name, {
        path,
      });
      try {
        ("run the transform directly rather than under the repo-wide ",
          fn_name("function_run_prompt"),
          " lock. That lock made ONE stuck transform wedge the watcher for EVERY file: it is taken per transform, so a child that hung or was killed left it held, and every later save was logged and then dropped with 'is locked, skipping held by watch:<the stuck file>'. Concurrency is already handled per path by in_progress above, and Claude's edits by ",
          fn_name("claude_edit_claim_fresh_is"),
          ", so the lock was buying nothing that survived its own failure mode");
        await lambda3();
      } finally {
        property_set(in_progress, path, false);
      }
    }
    await catch_log_async(lambda);
  }
  watcher.on("change", lambda2).on("add", lambda2);
}
