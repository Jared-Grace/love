import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_name_json_folder_gitignore } from "../../../love/public/src/file_name_json_folder_gitignore.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export function app_g_game_save(g) {
  let f_path = file_name_json_folder_gitignore("1");
  let previous = folder_previous();
  let result = path_join(segments);
  storage_local_set(app_g, "game", f_path);
}
