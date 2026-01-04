import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function sandbox() {
  let list = await ebible_verses("engbsb", "GEN01");
  let mapped = list_map_property(list, "text");
  let joined = list_join_empty(mapped);
  function lambda4(la) {
    let split = string_split_empty(joined);
    each(split, la);
  }
  let unique = list_adder_unique(lambda4);
  list_sort_string(list2);
  return unique;
}
