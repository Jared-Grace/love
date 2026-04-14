import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { app_g_tile } from "../../../love/public/src/app_g_tile.mjs";
export async function app_g_div_map_tiles_add(div_map) {
  let g = await app_g_game_save_get();
  function lambda2(columns, y) {
    function lambda(r, x) {
      app_g_tile(div_map, r, x, y);
    }
    each_index(columns, lambda);
  }
  each_index(rows, lambda2);
}
