import { qa_snapshot_repos_folder_named } from "./qa_snapshot_repos_folder_named.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function qa_snapshot_repos_folder() {
  "The stand-in for the folder the repos sit side by side in, for the copy that gets asked questions";
  "A function is found by a path that starts by stepping up one folder and back down into a repo by name, so a copy of one repo on its own cannot resolve a single name - it has to sit among siblings the same way";
  "This one is the copy nothing builds inside. Building writes files, and one of the questions asked here is how big a built app came out";
  "The word naming it is held as plain writing rather than left to look like a name, so the folder cannot start following a rename that the folder already on disk would not follow";
  let copy_name = text_frozen("qa_snapshot");
  let folder = qa_snapshot_repos_folder_named(copy_name);
  return folder;
}
