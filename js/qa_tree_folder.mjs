import { qa_tree_repos_folder } from "./qa_tree_repos_folder.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { path_join } from "./path_join.mjs";
export function qa_tree_folder() {
  "Where the frozen copy of the working folder sits among its stand-in neighbours";
  "It keeps the repo's own name, because the name of the folder is how the repo recognises itself and how every neighbouring path is spelled";
  let repos = qa_tree_repos_folder();
  let name = repo_current_name();
  let folder = path_join([repos, name]);
  return folder;
}
