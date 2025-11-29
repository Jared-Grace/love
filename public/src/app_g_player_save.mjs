import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
export function app_g_player_save(player) {
  let g = storage_local_set(app_g, "game");
  let a = object_assign(g, {
    player,
  });
  storage_local_set(app_g, "game", g);
}
