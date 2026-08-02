import { folder_memory } from "./folder_memory.mjs";
import { path_join } from "./path_join.mjs";
export function qa_snapshot_repos_folder_named(copy_name) {
  "$plain copy_name";
  "The stand-in for the folder the repos sit side by side in, for one named frozen copy";
  "A function is found by a path that starts by stepping up one folder and back down into a repo by name, so a copy of one repo on its own cannot resolve a single name - it has to sit among siblings the same way";
  "The copy is named rather than there being only one of them, because two things want a frozen copy for opposite reasons and they must not be the same copy. One is asked questions about the code and must not have anything moving underneath it. The other has an app built inside it, which by definition moves things - and one of the questions the first one asks is about the size of a built app, so a build landing in the copy being questioned would be answering that question with something half written";
  let memory = folder_memory();
  let folder = path_join([memory, copy_name, "repos"]);
  return folder;
}
