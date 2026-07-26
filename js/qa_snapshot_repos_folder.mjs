export function qa_snapshot_repos_folder() {
  "The stand-in for the folder the repos sit side by side in";
  "A function is found by a path that starts by stepping up one folder and back down into a repo by name, so a copy of one repo on its own cannot resolve a single name - it has to sit among siblings the same way";
  let memory = folder_memory();
  let folder = path_join([memory, "qa_snapshot", "repos"]);
  return folder;
}
