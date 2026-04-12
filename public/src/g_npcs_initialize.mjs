import { each_index } from "../../../love/public/src/each_index.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_remove_end } from "../../../love/public/src/list_remove_end.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { g_genders_get } from "../../../love/public/src/g_genders_get.mjs";
export function g_npcs_initialize(player_img, coordinates_land) {
  let genders = g_genders_get(player_img);
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
  return npcs;
}
