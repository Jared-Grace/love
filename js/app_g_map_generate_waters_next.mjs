import { g_distance_1_any_random } from "./g_distance_1_any_random.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_g_map_generate_waters_next(waters, coordinates) {
  let r = null;
  let e = list_empty_is(waters);
  if (e) {
    r = list_random_item(coordinates);
  } else {
    r = g_distance_1_any_random(waters, coordinates);
  }
  return r;
}
