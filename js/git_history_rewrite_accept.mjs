import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { daemons_stop } from "./daemons_stop.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { equal } from "./equal.mjs";
import { git_files_uncommitted_folder } from "./git_files_uncommitted_folder.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { and } from "./and.mjs";
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
  "do NOT grant. It forces every address it writes to onto a new history, which is the one thing around here that another person's copy cannot simply catch up with. The wording matters as much as the meaning: the refusal check reads one exact phrase, so the only thing that would stop a standing approval being written here is somebody opening the file first. Both of its callers carry the same phrase, and this one carries it because gathering the dangerous steps into one place would otherwise have moved them somewhere nobody had thought to refuse.";
  "THE DANGEROUS HALF, WRITTEN ONCE AND SHARED, because there is nothing about it that differs between dropping paths and renaming them. Both arrive here holding a copy that has already been rewritten and proved; what is left is the same seven steps in the same order either way. It was worth extracting the moment there were two callers rather than one: this is the code where a step done out of order costs an afternoon, and two copies of it would have been two chances to fix one and not the other.";
  "It is deliberately one command rather than a list of steps to follow. The list was followed once by hand and three of its steps were not on it: copies of the repository laid out elsewhere held the old history alive, the record of where the branch had been held it alive again, and neither was noticed until the space failed to come back. A step nobody wrote down is a step that gets missed, and the way to stop missing it is to stop writing it down.";
  "IT REFUSES A REHEARSAL THE PRESENT HAS MOVED ON FROM, and this is the check worth having above all the others. The repository is thrown onto the copy's history, so every commit made after the copy was taken is thrown away with it - and here that is a peer's afternoon, in a shared folder where ten of us commit to one branch while a rewrite of thirty-two thousand commits takes minutes to rehearse. Nothing about that failure is visible: the rewrite succeeds, the proofs pass, and the work is simply not there any more. So the copy is asked which commit it was taken at and the folder is asked what it holds now, and a rewrite standing on a stale copy is refused before anything is touched.";
  "The refusal costs a second rehearsal and nothing else. The background work is started again first so that a refusal leaves the machine exactly as it was found rather than quietly stopped, which is the state a refusal in the sending step once left it in.";
  "The undo is written before anything moves, and is proved before the rewrite begins. The rehearsal's copy is left where it is afterwards rather than cleaned up - it is the fastest way back if something is noticed in the next few minutes.";
  "The repository is proved to have come out holding what the rehearsal proved, rather than being trusted to. A rehearsal proves a copy; only this proves the thing people are working in.";
  "The sending is allowed to fail and its complaint is held back rather than thrown, so that the machine's background work is started again first. That work was stopped for the rewrite, and a failure at the last step left it stopped on the first real run. What could not be sent is then reported, once everything here is back to normal, and is answered on its own with the sending command rather than by doing the whole rewrite again.";
  "IT ALSO REFUSES A FOLDER WITH WORK IN IT THAT WAS NEVER COMMITTED, and this is the worse of the two losses, not the lesser. Asking the folder which commit it stands on sees a peer's finished afternoon and stops; it is blind to their unfinished one, because an edit nobody has committed yet leaves the commit exactly where it was. The step that throws the repository onto the copy's history takes the working files with it, so an hour of somebody's half-written work goes without ever having been anywhere a bundle could reach - and the undo written here cannot bring it back, since a bundle holds commits and that work was never in one. A stale copy costs a second rehearsal; this costs work that exists in no other place.";
  "Being asked of the whole folder rather than of the paths being rewritten is deliberate. What is thrown away is everything the folder is holding, not only the files the rewrite touches, so narrowing the question to the rewrite's own paths would answer a different one and pass while a peer's work in some other file was still about to go.";
  "The way on is to commit first and then rehearse again, in that order, and the refusal says so rather than leaving it to be worked out. Committing moves the commit the folder stands on, which makes any rehearsal already in hand stale - so a rehearsal taken before the commit is spent either way, and doing it the other way round only finds that out later.";
  arguments_assert(arguments, 3);
  let stopped = await daemons_stop();
  let commit_now = await git_folder_head_commit(folder);
  let fresh = equal(commit_now, rehearsed.commit);
  let uncommitted = await git_files_uncommitted_folder(folder);
  let settled = list_empty_is(uncommitted);
  let safe = and(fresh, settled);
  if (not(safe)) {
    await daemons_ensure();
  }
  assert_json(settled, {
    hint: text_combine_multiple([
      "the folder is holding work that was never committed, and accepting throws the working files away with the history — nothing has been touched. Commit everything first (node scripts/ai.mjs ",
      fn_name("ai_git"),
      "), then rehearse again, because committing moves the folder on and makes the rehearsal in hand stale anyway. The files below are what would have gone, and no bundle could have brought them back.",
    ]),
    uncommitted,
    folder,
    clone_folder: rehearsed.clone_folder,
  });
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
