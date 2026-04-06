import { repo_love_path } from "../../../love/public/src/repo_love_path.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_name_json_folder_gitignore } from "../../../love/public/src/file_name_json_folder_gitignore.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export async function app_g_game_save(g) {
  storage_local_set(app_g, "game", g);
  let f_path = file_name_json_folder_gitignore("1");
  let joined = repo_love_path(f_path);
  await file_overwrite(joined, contents);
  return joined;
}
