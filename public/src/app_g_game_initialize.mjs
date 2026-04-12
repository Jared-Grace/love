import { g_npcs_initialize } from "../../../love/public/src/g_npcs_initialize.mjs";
import { g_player_img_get } from "../../../love/public/src/g_player_img_get.mjs";
import { g_coordinates_land_get } from "../../../love/public/src/g_coordinates_land_get.mjs";
import { g_tutorials_each } from "../../../love/public/src/g_tutorials_each.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { app_g_game_save } from "../../../love/public/src/app_g_game_save.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { g_coordinates } from "../../../love/public/src/g_coordinates.mjs";
import { bible_names_men } from "../../../love/public/src/bible_names_men.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { app_g_map_generate } from "../../../love/public/src/app_g_map_generate.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function app_g_game_initialize() {
  let rows = app_g_map_generate();
  let coordinates = g_coordinates(rows);
  let coordinates_land = g_coordinates_land_get(coordinates);
  const player_img = g_player_img_get();
  let npcs = g_npcs_initialize(player_img, coordinates_land);
  let player = {};
  object_merge(player, {
    img: player_img,
  });
  let player_list = list_remove_last(coordinates_land);
  let player_coordinates = list_single(player_list);
  object_merge(player, player_coordinates);
  let names_men = bible_names_men();
  object_merge(player, {
    img: player_img,
    prayer: {
      conversation: false,
      study: false,
    },
    name: list_random_item(names_men),
    conversed: false,
    studied: false,
    review: [],
  });
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
