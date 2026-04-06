import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { folder_previous_join_multiple } from "../../../love/public/src/folder_previous_join_multiple.mjs";
import { repo_name_love } from "../../../love/public/src/repo_name_love.mjs";
import { file_name_json_folder_gitignore } from "../../../love/public/src/file_name_json_folder_gitignore.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export async function app_g_game_save(g) {
  let f_path = file_name_json_folder_gitignore("1");
  let repo = repo_name_love();
  let joined = folder_previous_join_multiple(repo, f_path);
  await file_overwrite(file_path, contents);
  return joined;
  storage_local_set(app_g, "game", joined);
}
