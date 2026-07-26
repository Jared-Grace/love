import { qa_snapshot_repos_folder } from "./qa_snapshot_repos_folder.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { path_join } from "./path_join.mjs";
export function qa_snapshot_folder() {
  "Where this repo's frozen copy sits among the stand-in siblings";
  "It keeps the repo's own name, because the name of the folder is how the repo recognises itself and how every sibling path is spelled";
  let repos = qa_snapshot_repos_folder();
  let name = repo_current_name();
  let folder = path_join([repos, name]);
  return folder;
}
