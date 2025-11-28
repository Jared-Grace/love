import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export function app_g_player_save(player) {
  storage_local_set(app_g, "game", {
    player,
  });
}
