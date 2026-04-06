import { repo_love_path } from "../../../love/public/src/repo_love_path.mjs";
import { file_name_json_folder_gitignore } from "../../../love/public/src/file_name_json_folder_gitignore.mjs";
export function app_g_game_save_path() {
  let f_path = file_name_json_folder_gitignore("1");
  let joined = repo_love_path(f_path);
  return joined;
}
