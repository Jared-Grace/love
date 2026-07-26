import { qa_snapshot_siblings_link } from "./qa_snapshot_siblings_link.mjs";
import { qa_snapshot_repos_folder } from "./qa_snapshot_repos_folder.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { path_join } from "./path_join.mjs";
import { qa_snapshot_link } from "./qa_snapshot_link.mjs";
import { qa_snapshot_folder } from "./qa_snapshot_folder.mjs";
import { file_exists } from "./file_exists.mjs";
import { text_combine } from "./text_combine.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { qa_snapshot_uncommitted_names } from "./qa_snapshot_uncommitted_names.mjs";
export async function qa_snapshot_ensure(commit) {
  "Puts a frozen copy of this repo at the wanted commit in memory, and answers where it is";
  "The copy is made once and afterwards only moved, because moving it rewrites the handful of files that differ between two commits rather than all of them - a step of one commit is a few files and a fraction of a second";
  "The siblings are links to the live repos rather than copies, since a name in another repo is looked up by stepping out of this folder and back down by name, and no gate here asks a question about their contents";
  "The parts a repo deliberately never commits are linked in too - the installed packages and the settings meant for this machine only - because they are the surroundings, not the code under question";
  let repos = qa_snapshot_repos_folder();
  await folder_exists_ensure(repos);
  await qa_snapshot_siblings_link(repos);
  let here = folder_current_absolute();
  let folder = qa_snapshot_folder();
  let made = await file_exists(folder);
  if (made) {
    let command_git = text_combine("checkout --detach ", commit);
    await command_line_git_folder(folder, command_git);
  } else {
    let adding = text_combine_multiple([
      "worktree add --detach ",
      folder,
      " ",
      commit,
    ]);
    await command_line_git_folder(here, adding);
  }
  for (let kept of qa_snapshot_uncommitted_names()) {
    let live = path_join([here, kept]);
    let link = path_join([folder, kept]);
    await qa_snapshot_link(live, link);
  }
  return folder;
}
