import { g_player_initialize } from "../../../love/public/src/g_player_initialize.mjs";
import { g_npcs_initialize } from "../../../love/public/src/g_npcs_initialize.mjs";
import { g_player_img_get } from "../../../love/public/src/g_player_img_get.mjs";
import { g_coordinates_land_get } from "../../../love/public/src/g_coordinates_land_get.mjs";
import { g_tutorials_each } from "../../../love/public/src/g_tutorials_each.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { app_g_game_save } from "../../../love/public/src/app_g_game_save.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
import { app_g_map_generate } from "../../../love/public/src/app_g_map_generate.mjs";
export async function app_g_game_initialize() {
  let rows = app_g_map_generate();
  let coordinates = g_coordinates(rows);
  let coordinates_land = g_coordinates_land_get(coordinates);
  const player_img = g_player_img_get();
  let npcs = g_npcs_initialize(player_img, coordinates_land);
  let player = g_player_initialize(player_img, coordinates_land);
  await app_g_game_save({
    player,
    npcs,
    coordinates,
    rows,
  });
  function lambda4(t) {
    global_function_property_set(app_g_main, t, null);
  }
  g_tutorials_each(lambda4);
}
