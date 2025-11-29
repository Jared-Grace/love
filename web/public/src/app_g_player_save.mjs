import { function_open_app } from "../../../love/public/src/function_open_app.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export async function app_g_player_save(player) {
  let g = storage_local_set(app_g, "game");
  let v = await function_open_app(f_name);
  storage_local_set(app_g, "game", {
    player,
  });
}
