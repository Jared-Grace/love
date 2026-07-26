import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_take } from "./list_take.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
export function app_g_day_talkables_choose(npcs) {
  "pick the 3 talkable people for a #day_unbelievers demo: a random unbeliever ANCHOR plus its 2 nearest unbeliever neighbours (by taxicab distance), so the three sit close together and the walk between them stays short. the anchor is distance 0 from itself, so sorting all unbelievers by distance-to-anchor and taking the first 3 yields anchor + the 2 closest";
  let unbelievers = list_filter_object_includes(npcs, {
    christian: false,
  });
  let anchor = list_random_item(unbelievers);
  function distance_to_anchor(npc) {
    let d = g_distance_taxicab(anchor, npc);
    return d;
  }
  let sorted = list_sort_number_mapper(unbelievers, distance_to_anchor);
  let three = list_take(sorted, 3);
  return three;
}
