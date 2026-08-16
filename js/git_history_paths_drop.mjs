import { git_history_push_forced } from "./git_history_push_forced.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { daemons_stop } from "./daemons_stop.mjs";
import { daemons_ensure } from "./daemons_ensure.mjs";
import { git_history_bundle_write } from "./git_history_bundle_write.mjs";
import { git_folder_worktrees } from "./git_folder_worktrees.mjs";
import { git_folder_worktree_remove } from "./git_folder_worktree_remove.mjs";
import { git_history_paths_drop_rehearse } from "./git_history_paths_drop_rehearse.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { each_async } from "./each_async.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function git_history_paths_drop(folder, paths_text, bundle_path) {
  "$plain folder";
  "$plain paths_text";
  "$plain bundle_path";
  "Takes named paths out of a repository's whole history and leaves every copy of it standing on the result - the machine, and each address it writes to.";
  "Everything here past the rehearsal is hard to take back, so it is deliberately one command rather than a list of steps to follow. The list was followed once by hand and three of its steps were not on it: copies of the repository laid out elsewhere held the old history alive, the record of where the branch had been held it alive again, and neither was noticed until the space failed to come back. A step nobody wrote down is a step that gets missed, and the way to stop missing it is to stop writing it down.";
  "do NOT grant, and nothing calls this. It forces every address it writes to onto a new history, which is the one thing around here that another person's copy cannot simply catch up with. The wording matters as much as the meaning: this said the same thing in its own words for as long as it has existed, the refusal check reads one exact phrase, and so the only thing that would have stopped a standing approval being written here was somebody opening the file first.";
  "The undo is written first, before anything moves, and is proved before the rewrite begins. The rehearsal's copy is left where it is afterwards rather than cleaned up - it is the fastest way back if something is noticed in the next few minutes.";
  "The sending is allowed to fail and its complaint is held back rather than thrown, so that the machine's background work is started again first. That work was stopped for the rewrite, and a failure at the last step left it stopped on the first real run. What could not be sent is then reported, once everything here is back to normal, and is answered on its own with the sending command rather than by doing the whole rewrite again.";
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
  let sent = null;
  async function pushed_forced() {
    sent = await git_history_push_forced(folder);
  }
  let trouble = await catch_error_text_or_null_async(pushed_forced);
  await daemons_ensure();
  let none = equal(trouble, null);
  assert_json(none, {
    hint: "the rewrite itself is done and the machine's background work is running again, but not every address ended up standing on the new history — the message below says which one and why",
    trouble,
  });
  let r = {
    bundle,
    stopped,
    worktrees,
    rehearsed,
    sent,
  };
  return r;
}
