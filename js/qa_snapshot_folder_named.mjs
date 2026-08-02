import { qa_snapshot_repos_folder_named } from "./qa_snapshot_repos_folder_named.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { path_join } from "./path_join.mjs";
export function qa_snapshot_folder_named(copy_name) {
  "$plain copy_name";
  "Where this repo's named frozen copy sits among its stand-in siblings";
  "It keeps the repo's own name, because the name of the folder is how the repo recognises itself and how every sibling path is spelled. So two copies cannot share one folder of siblings - they are both called the same thing inside it - which is why what is named here is the folder they sit in rather than the copy itself";
  let repos = qa_snapshot_repos_folder_named(copy_name);
  let name = repo_current_name();
  let folder = path_join([repos, name]);
  return folder;
}
