import { arguments_assert } from "./arguments_assert.mjs";
import { daemons_stop } from "./daemons_stop.mjs";
import { daemons_ensure } from "./daemons_ensure.mjs";
import { git_history_bundle_write } from "./git_history_bundle_write.mjs";
import { git_folder_worktrees } from "./git_folder_worktrees.mjs";
import { git_folder_worktree_remove } from "./git_folder_worktree_remove.mjs";
import { git_history_paths_drop_rehearse } from "./git_history_paths_drop_rehearse.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { git_push_urls } from "./git_push_urls.mjs";
import { git_history_url_head_matches } from "./git_history_url_head_matches.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { each_async } from "./each_async.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not } from "./not.mjs";
export async function git_history_paths_drop(folder, paths_text, bundle_path) {
  "$plain folder";
  "$plain paths_text";
  "$plain bundle_path";
  "Takes named paths out of a repository's whole history and leaves every copy of it standing on the result - the machine, and each address it writes to.";
  "Everything here past the rehearsal is hard to take back, so it is deliberately one command rather than a list of steps to follow. The list was followed once by hand and three of its steps were not on it: copies of the repository laid out elsewhere held the old history alive, the record of where the branch had been held it alive again, and neither was noticed until the space failed to come back. A step nobody wrote down is a step that gets missed, and the way to stop missing it is to stop writing it down.";
  "Never granted standing approval and never called by anything. It forces every address it writes to onto a new history, which is the one thing around here that another person's copy cannot simply catch up with.";
  "The undo is written first, before anything moves, and is proved before the rewrite begins. The rehearsal's copy is left where it is afterwards rather than cleaned up - it is the fastest way back if something is noticed in the next few minutes.";
  arguments_assert(arguments, 3);
  let stopped = await daemons_stop();
  let bundle = await git_history_bundle_write(folder, bundle_path);
  let worktrees = await git_folder_worktrees(folder);
  async function worktree_remove(worktree_folder) {
    await git_folder_worktree_remove(folder, worktree_folder);
  }
  await each_async(worktrees, worktree_remove);
  let rehearsed = await git_history_paths_drop_rehearse(folder, paths_text);
  await git_folder_run(folder, ["fetch", rehearsed.clone_folder, "main"]);
  await git_folder_run(folder, ["reset", "--hard", "FETCH_HEAD"]);
  let tree_after = await git_folder_head_tree(folder);
  equal_assert_json(tree_after, rehearsed.tree, {
    hint: "the machine's own copy did not come out holding what it held before — the undo bundle named below restores it, and nothing has been sent anywhere yet",
    bundle_path,
  });
  await git_folder_run(folder, ["reflog", "expire", "--expire=now", "--all"]);
  await git_folder_run(folder, ["gc", "--prune=now"]);
  await git_folder_run(folder, ["push", "--force", "origin", "main"]);
  let commit = await git_folder_head_commit(folder);
  let urls = await git_push_urls(folder);
  async function url_matches(url) {
    let matches = await git_history_url_head_matches(url, commit);
    return matches;
  }
  let answered = await list_map_async(urls, url_matches);
  function url_behind_is(answer) {
    let behind = not(answer.matches);
    return behind;
  }
  let behind = list_filter(answered, url_behind_is);
  await daemons_ensure();
  list_empty_is_assert_json(behind, {
    hint: "these addresses are still on the old history, most likely because the branch is protected there — unprotect it, push again by hand, and protect it back",
    behind,
    commit,
  });
  let r = {
    commit,
    bundle,
    stopped,
    worktrees,
    rehearsed,
    urls: answered,
  };
  return r;
}
