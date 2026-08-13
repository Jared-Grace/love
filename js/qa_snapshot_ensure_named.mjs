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
    let moving = ["checkout", "--detach", commit];
    await git_folder_run(folder, moving);
  } else {
    await git_folder_worktree_add(here, folder, commit);
  }
  for (let kept of qa_snapshot_uncommitted_names()) {
    let live = path_join([here, kept]);
    let link = path_join([folder, kept]);
    await qa_snapshot_link(live, link);
  }
  return folder;
}
