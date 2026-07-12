import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_game_save } from "./app_g_game_save.mjs";
import { object_assign } from "./object_assign.mjs";
export async function app_g_player_save(player) {
  let g = await app_g_game_save_get();
  let a = object_assign(g, {
    player,
  });
  await app_g_game_save(g);
}
