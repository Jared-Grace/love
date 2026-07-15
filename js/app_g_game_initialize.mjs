import { g_player_initialize } from "../../love/js/g_player_initialize.mjs";
import { g_npcs_initialize } from "../../love/js/g_npcs_initialize.mjs";
import { g_player_img_get } from "../../love/js/g_player_img_get.mjs";
import { g_coordinates_land_get } from "../../love/js/g_coordinates_land_get.mjs";
import { app_g_game_save } from "../../love/js/app_g_game_save.mjs";
import { g_coordinates } from "../../love/js/g_coordinates.mjs";
import { app_g_map_generate } from "../../love/js/app_g_map_generate.mjs";
export async function app_g_game_initialize() {
  let rows = app_g_map_generate();
  let coordinates = g_coordinates(rows);
  let coordinates_land = g_coordinates_land_get(coordinates);
  let player_img = g_player_img_get();
  let npcs = g_npcs_initialize(player_img, coordinates_land);
  let player = g_player_initialize(player_img, coordinates_land);
  await app_g_game_save({
    player,
    npcs,
    coordinates,
    rows,
    view: null,
  });
}
