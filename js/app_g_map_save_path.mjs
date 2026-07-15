import { app_g } from "./app_g.mjs";
import { path_join } from "./path_join.mjs";
import { repo_love_path } from "./repo_love_path.mjs";
import { file_name_json_folder_gitignore } from "./file_name_json_folder_gitignore.mjs";
export function app_g_map_save_path() {
  let result = path_join([app_g.name, "map"]);
  let f_path = file_name_json_folder_gitignore(result);
  let p = repo_love_path(f_path);
  return p;
}
