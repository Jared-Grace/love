import { g_female_img_names } from "../../../love/public/src/g_female_img_names.mjs";
import { g_player_img_get } from "../../../love/public/src/g_player_img_get.mjs";
import { g_male_img_names } from "../../../love/public/src/g_male_img_names.mjs";
import { g_coordinates_land_get } from "../../../love/public/src/g_coordinates_land_get.mjs";
import { g_tutorials_each } from "../../../love/public/src/g_tutorials_each.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { app_g_game_save } from "../../../love/public/src/app_g_game_save.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_remove_end } from "../../../love/public/src/list_remove_end.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { g_gender_male } from "../../../love/public/src/g_gender_male.mjs";
import { list_without } from "../../../love/public/src/list_without.mjs";
import { g_gender_female } from "../../../love/public/src/g_gender_female.mjs";
import { bible_names_women } from "../../../love/public/src/bible_names_women.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
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
  let player = {};
  object_merge(player, {
    img: player_img,
  });
  let imgs_women = g_female_img_names();
  let imgs_men = g_male_img_names();
  list_shuffle(coordinates_land);
  let names_women = bible_names_women();
  let female = {
    name: g_gender_female(),
    names: names_women,
    imgs: list_without(imgs_women, player_img),
  };
  let names_men = bible_names_men();
  let male = {
    name: g_gender_male(),
    names: names_men,
    imgs: list_without(imgs_men, player_img),
  };
  let genders = [male, female];
  let gender_count = list_size(genders);
  let npc_count = 30;
  let npcs = list_remove_end(coordinates_land, npc_count);
  function npc_initialize(npc, index) {
    let r4 = mod(index, gender_count);
    let gender = list_get(genders, r4);
    let imgs2 = property_get(gender, "imgs");
    let r3 = list_random_item(imgs2);
    property_set(npc, "img", r3);
    let names2 = property_get(gender, "names");
    let r5 = list_random_item(names2);
    property_set(npc, "name", r5);
    let name2 = property_get(gender, "name");
    property_set(npc, "gender", name2);
    property_set(npc, "meet", false);
    property_set(npc, "christian", false);
    property_set(npc, "objections", 2);
  }
  each_index(npcs, npc_initialize);
  let player_list = list_remove_last(coordinates_land);
  let player_coordinates = list_single(player_list);
  object_merge(player, player_coordinates);
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
