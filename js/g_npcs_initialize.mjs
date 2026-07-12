import { each_index } from "./each_index.mjs";
import { property_set } from "./property_set.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { mod } from "./mod.mjs";
import { list_remove_end } from "./list_remove_end.mjs";
import { list_size } from "./list_size.mjs";
import { g_genders_get } from "./g_genders_get.mjs";
export function g_npcs_initialize(player_img, coordinates_land) {
  let genders = g_genders_get(player_img);
  let gender_count = list_size(genders);
  let npc_count = 30;
  let npcs = list_remove_end(coordinates_land, npc_count);
  function npc_initialize(npc, index) {
    let r4 = mod(index, gender_count);
    let gender = list_get(genders, r4);
    let imgs = property_get(gender, "imgs");
    let r3 = list_random_item(imgs);
    property_set(npc, "img", r3);
    let names = property_get(gender, "names");
    let r5 = list_random_item(names);
    property_set(npc, "name", r5);
    let name = property_get(gender, "name");
    property_set(npc, "gender", name);
    property_set(npc, "meet", false);
    property_set(npc, "christian", false);
    property_set(npc, "objections", 2);
  }
  each_index(npcs, npc_initialize);
  return npcs;
}
