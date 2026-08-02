import { text_frozen } from "./text_frozen.mjs";
import { qa_snapshot_ensure_named } from "./qa_snapshot_ensure_named.mjs";
export async function qa_snapshot_ensure(commit) {
  "Puts a frozen copy of this repo at the wanted commit in memory, and answers where it is";
  "The copy is made once and afterwards only moved, because moving it rewrites the handful of files that differ between two commits rather than all of them - a step of one commit is a few files and a fraction of a second";
  "The siblings are links to the live repos rather than copies, since a name in another repo is looked up by stepping out of this folder and back down by name, and no gate here asks a question about their contents";
  "The parts a repo deliberately never commits are linked in too - the installed packages and the settings meant for this machine only - because they are the surroundings, not the code under question";
  let copy_name = text_frozen("qa_snapshot");
  let folder = await qa_snapshot_ensure_named(copy_name, commit);
  return folder;
}
