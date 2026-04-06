import { indexeddb_put } from "../../../love/public/src/indexeddb_put.mjs";
import { app_g_game_save } from "../../../love/public/src/app_g_game_save.mjs";
import { storage_local_initialize } from "../../../love/public/src/storage_local_initialize.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
export async function app_g_player_save(player) {
  let next = await indexeddb_put(db_get, store, key, value_get);
  let g = storage_local_initialize(app_g, "game", {});
  let a = object_assign(g, {
    player,
  });
  app_g_game_save(g);
}
