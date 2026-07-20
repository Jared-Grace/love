import { lock_try_prompt } from "../../love/js/lock_try_prompt.mjs";
import { claude_edit_claim_fresh_is } from "../../love/js/claude_edit_claim_fresh_is.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
import { log } from "../../love/js/log.mjs";
import { data_file_update } from "../../love/js/data_file_update.mjs";
import { identity } from "../../love/js/identity.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "../../love/js/repos_paths_map_unordered_combine_squash_functions.mjs";
import { property_exists_equals } from "../../love/js/property_exists_equals.mjs";
import { catch_log_async } from "../../love/js/catch_log_async.mjs";
import { import_install } from "../../love/js/import_install.mjs";
import { property_set } from "../../love/js/property_set.mjs";
import { command_line_node_g } from "../../love/js/command_line_node_g.mjs";
import { function_auto_path } from "../../love/js/function_auto_path.mjs";
export async function watch() {
  let squashed =
    await repos_paths_map_unordered_combine_squash_functions(identity);
  let chokidar = (await import_install("chokidar")).default;
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
        "Claude is editing this exact file right now, so leave it alone — it will run its own transforms. Only THIS file is skipped: a save by the human, in any other file, still transforms immediately. That is the whole point of claiming per path instead of taking one repo-wide lock for a whole Claude session, which used to drop the human's saves too";
        return;
      }
      property_set(in_progress, path, true);
      async function lambda3() {
        try {
          await command_line_node_g(function_auto_path.name, [path]);
        } finally {
          property_set(in_progress, path, false);
          if (0) {
            try {
              let args = [path];
              await command_line_node_g(data_file_update.name, args);
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
        "run the transform directly rather than under the repo-wide function_run_prompt lock. That lock made ONE stuck transform wedge the watcher for EVERY file: it is taken per transform, so a child that hung or was killed left it held, and every later save was logged and then dropped with 'is locked, skipping held by watch:<the stuck file>'. Concurrency is already handled per path by in_progress above, and Claude's edits by claude_edit_claim_fresh_is, so the lock was buying nothing that survived its own failure mode";
        await lambda3();
      } finally {
        property_set(in_progress, path, false);
      }
    }
    await catch_log_async(lambda);
  }
  watcher.on("change", lambda2).on("add", lambda2);
}
