import { integer_base_2_from } from "../../../love/public/src/integer_base_2_from.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { boolean_to_binary_text } from "../../../love/public/src/boolean_to_binary_text.mjs";
import { positive_is } from "../../../love/public/src/positive_is.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_remove_last_multiple } from "../../../love/public/src/list_remove_last_multiple.mjs";
export function cryto_mini_sat_to_factor(filtered, bits) {
  let e = list_remove_last_multiple(filtered, bits);
  let mapped2 = list_map(e, positive_is);
  let mapped3 = list_map(mapped2, boolean_to_binary_text);
  let joined2 = list_join_empty(mapped3);
  let i = integer_base_2_from(joined2);
  return i;
}
