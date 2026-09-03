import { arguments_assert } from "./arguments_assert.mjs";
import { daemons_stop } from "./daemons_stop.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { daemons_ensure } from "./daemons_ensure.mjs";
import { assert_json } from "./assert_json.mjs";
import { git_history_bundle_write } from "./git_history_bundle_write.mjs";
import { git_folder_worktrees } from "./git_folder_worktrees.mjs";
import { git_folder_worktree_remove } from "./git_folder_worktree_remove.mjs";
import { each_async } from "./each_async.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { git_history_push_forced } from "./git_history_push_forced.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
export async function git_history_rewrite_accept(
  folder,
  rehearsed,
  bundle_path,
) {
  "$plain folder";
  "$plain bundle_path";
  "Takes a rehearsed rewrite and leaves every copy of the repository standing on it - the machine, and each address it writes to. Everything here is hard to take back.";
  "THE DANGEROUS HALF, WRITTEN ONCE AND SHARED, because there is nothing about it that differs between dropping paths and renaming them. Both arrive here holding a copy that has already been rewritten and proved; what is left is the same seven steps in the same order either way. It was worth extracting the moment there were two callers rather than one: this is the code where a step done out of order costs an afternoon, and two copies of it would have been two chances to fix one and not the other.";
  "It is deliberately one command rather than a list of steps to follow. The list was followed once by hand and three of its steps were not on it: copies of the repository laid out elsewhere held the old history alive, the record of where the branch had been held it alive again, and neither was noticed until the space failed to come back. A step nobody wrote down is a step that gets missed, and the way to stop missing it is to stop writing it down.";
  "IT REFUSES A REHEARSAL THE PRESENT HAS MOVED ON FROM, and this is the check worth having above all the others. The repository is thrown onto the copy's history, so every commit made after the copy was taken is thrown away with it - and here that is a peer's afternoon, in a shared folder where ten of us commit to one branch while a rewrite of thirty-two thousand commits takes minutes to rehearse. Nothing about that failure is visible: the rewrite succeeds, the proofs pass, and the work is simply not there any more. So the copy is asked which commit it was taken at and the folder is asked what it holds now, and a rewrite standing on a stale copy is refused before anything is touched.";
  "The refusal costs a second rehearsal and nothing else. The background work is started again first so that a refusal leaves the machine exactly as it was found rather than quietly stopped, which is the state a refusal in the sending step once left it in.";
  "The undo is written before anything moves, and is proved before the rewrite begins. The rehearsal's copy is left where it is afterwards rather than cleaned up - it is the fastest way back if something is noticed in the next few minutes.";
  "The repository is proved to have come out holding what the rehearsal proved, rather than being trusted to. A rehearsal proves a copy; only this proves the thing people are working in.";
  "The sending is allowed to fail and its complaint is held back rather than thrown, so that the machine's background work is started again first. That work was stopped for the rewrite, and a failure at the last step left it stopped on the first real run. What could not be sent is then reported, once everything here is back to normal, and is answered on its own with the sending command rather than by doing the whole rewrite again.";
  arguments_assert(arguments, 3);
  let stopped = await daemons_stop();
  let commit_now = await git_folder_head_commit(folder);
  let fresh = equal(commit_now, rehearsed.commit);
  if (not(fresh)) {
    await daemons_ensure();
  }
  assert_json(fresh, {
    hint: "the folder has been committed to since the rehearsal was taken, so accepting it would throw that work away — nothing has been touched, and rehearsing again is the way on",
    commit_now,
    commit_rehearsed: rehearsed.commit,
    clone_folder: rehearsed.clone_folder,
  });
  let bundle = await git_history_bundle_write(folder, bundle_path);
  let worktrees = await git_folder_worktrees(folder);
  async function worktree_remove(worktree_folder) {
    await git_folder_worktree_remove(folder, worktree_folder);
  }
  await each_async(worktrees, worktree_remove);
  await git_folder_run(folder, ["fetch", rehearsed.clone_folder, "main"]);
  await git_folder_run(folder, ["reset", "--hard", "FETCH_HEAD"]);
  let tree_after = await git_folder_head_tree(folder);
  equal_assert_json(tree_after, rehearsed.tree, {
    hint: "the machine's own copy did not come out holding what the rehearsal proved — the undo bundle named below restores it, and nothing has been sent anywhere yet",
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
    sent,
  };
  return r;
}
