import { folder_previous_join_multiple } from "../../../love/public/src/folder_previous_join_multiple.mjs";
import { repo_love_name } from "../../../love/public/src/repo_love_name.mjs";
export function repo_love_path(f_path) {
  let repo = repo_love_name();
  let joined = folder_previous_join_multiple(repo, f_path);
  return joined;
}
