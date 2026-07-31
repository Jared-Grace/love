import { list_map_join_empty } from "./list_map_join_empty.mjs";
import { integer_base_2_from } from "./integer_base_2_from.mjs";
import { boolean_to_binary_text } from "./boolean_to_binary_text.mjs";
import { positive_is } from "./positive_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_remove_last_multiple } from "./list_remove_last_multiple.mjs";
export function cryto_mini_sat_to_factor(reversed, bits) {
  let e = list_remove_last_multiple(reversed, bits);
  let mapped2 = list_map(e, positive_is);
  let joined = list_map_join_empty(mapped2, boolean_to_binary_text);
  let i = integer_base_2_from(joined);
  return i;
}
