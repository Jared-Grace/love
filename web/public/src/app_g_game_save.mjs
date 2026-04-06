import { file_name_json_folder_gitignore } from "../../../love/public/src/file_name_json_folder_gitignore.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export function app_g_game_save(g) {
  let f_path2 = file_name_json_folder_gitignore(name);
  storage_local_set(app_g, "game", g);
}
