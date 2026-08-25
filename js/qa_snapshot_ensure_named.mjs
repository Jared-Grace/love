import { git_folder_worktree_prune } from "./git_folder_worktree_prune.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { qa_snapshot_clean } from "./qa_snapshot_clean.mjs";
import { git_folder_worktree_add } from "./git_folder_worktree_add.mjs";
import { qa_snapshot_siblings_freeze } from "./qa_snapshot_siblings_freeze.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { qa_snapshot_repos_folder_named } from "./qa_snapshot_repos_folder_named.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { path_join } from "./path_join.mjs";
import { qa_snapshot_link } from "./qa_snapshot_link.mjs";
import { qa_snapshot_folder_named } from "./qa_snapshot_folder_named.mjs";
import { file_exists } from "./file_exists.mjs";
import { qa_snapshot_uncommitted_names } from "./qa_snapshot_uncommitted_names.mjs";
export async function qa_snapshot_ensure_named(copy_name, commit) {
  "$plain copy_name";
  "Puts a named frozen copy of this repo at the wanted commit in memory, and answers where it is";
  "The copy is made once and afterwards only moved, because moving it rewrites the handful of files that differ between two commits rather than all of them - a step of one commit is a few files and a fraction of a second";
  "A name in another repo is looked up by stepping out of this folder and back down into a neighbour by name, so a copy sitting on its own resolves nothing - it has to have neighbours the same way";
  "The neighbours are frozen rather than pointed at, for the same reason the copy of the working folder freezes them. They were pointers to the living repos here until the twelfth of August, on the reasoning that no question asked in here is about their contents, and that reasoning is wrong: asking after every function does not stop at this repo, and the sweeps over shadowing, over folding and over duplicate names all walk the neighbours too. Pointed at, a neighbour being edited while the gates ran reached straight through the freeze";
  "What that cost here is worse than a flap, because what is asked in here is written down and handed to everybody. An answer filed under a commit was reached while somebody was saving files in a neighbour, so it was never an answer about that commit at all - and the next of us to ask about the same commit is given it without the gates being run again";
  "The parts a repo deliberately never commits are linked in too - the installed packages and the settings meant for this machine only - because they are the surroundings, not the code under question";
  "Which copy is asked for is a word rather than there being only one, because a copy being asked questions and a copy being built inside want opposite things from the same folder";
  let repos = qa_snapshot_repos_folder_named(copy_name);
  await folder_exists_ensure(repos);
  await qa_snapshot_siblings_freeze(repos);
  let here = folder_current_absolute();
  let folder = qa_snapshot_folder_named(copy_name);
  let made = await file_exists(folder);
  ("The move is given as a list of words, so the commit stays one word however it is spelled. Laying a copy out in the first place is a named step of its own, because a throwaway copy of an earlier commit is made the very same way and the two spelling it out separately would let them drift");
  if (made) {
    ("Put back the way its commit had it before being moved, because a move refuses outright while anything it would write over is still changed - which is the failure the putting-back was written for and was only ever wired into the copy that gets built in. The copy that gets asked questions is written in too: running the guard inside it leaves Python's compiled caches changed, and a commit that carried those files then would not move at all. Read from outside, that looks like a commit being unshippable rather than like a copy needing tidying, and it stopped a send with two gates named that were both already green.");
    ("Asked every time rather than when it seems needed, the same way the built-in copy asks. Knowing whether it is needed costs a check that can be wrong, and being wrong here costs a whole walk of the commits.");
    ("Only where there is already a copy. One laid out fresh below has nothing in it to put back.");
    await qa_snapshot_clean(folder);
    ("Asked again while it keeps failing, because the lock this move takes lives in the living repo rather than in the copy, and everybody here commits into that repo all day. A peer holding it for the fraction of a second a commit takes is enough for the move to refuse, and the refusal is not local: it comes back up through a walk that spends about a quarter of an hour on every commit it judges, so one collision throws away hours. Measured on 2026-08-14: a walk of the commits died on its ninth with the lock file already there. Five attempts with the wait doubling covers a commit many times over, and a commit that genuinely cannot be moved to still complains, only fifteen seconds later");
    async function lambda() {
      let moving = ["checkout", "--detach", commit];
      await git_folder_run(folder, moving);
    }
    await retry_standard(lambda);
  } else {
    ("The copies this repository still lists whose folders have gone are forgotten first. These copies are laid out in memory, so a restart of the machine takes every one of them and leaves every entry behind - and laying one out again under the same name is then refused outright, in words that name a folder rather than a restart. Measured on 2026-08-25: the gates would not run at all, and the way through was three words typed by hand that nothing in here said.");
    ("It is asked for every time rather than after a failure, because forgetting an entry whose folder has gone is not a repair - it is what the list saying that entry was always meant to mean. A copy somebody is working in is not touched.");
    await git_folder_worktree_prune(here);
    await git_folder_worktree_add(here, folder, commit);
  }
  for (let kept of qa_snapshot_uncommitted_names()) {
    let live = path_join([here, kept]);
    let link = path_join([folder, kept]);
    await qa_snapshot_link(live, link);
  }
  return folder;
}
