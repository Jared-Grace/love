import { app_g_game_save_path } from "../../../love/public/src/app_g_game_save_path.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export async function app_g_game_save(g) {
  storage_local_set(app_g, "game", g);
  let p = app_g_game_save_path();
  await file_overwrite(p, contents);
}
