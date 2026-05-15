import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_gitignore_name } from "../../../love/public/src/folder_gitignore_name.mjs";
export function folder_gitignore_join(name) {
  let folder = folder_gitignore_name();
  let joined = path_join([folder, name]);
  return joined;
}
