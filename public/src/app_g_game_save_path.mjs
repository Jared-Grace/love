import { app_g } from "../../../love/public/src/app_g.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { repo_love_path } from "../../../love/public/src/repo_love_path.mjs";
import { file_name_json_folder_gitignore } from "../../../love/public/src/file_name_json_folder_gitignore.mjs";
export function app_g_game_save_path() {
  let result = path_join([app_g.name, "1"]);
  let f_path = file_name_json_folder_gitignore("1");
  let p = repo_love_path(f_path);
  return p;
}
