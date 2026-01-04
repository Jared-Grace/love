import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_split_multiple } from "../../../love/public/src/string_split_multiple.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function sandbox() {
  let list = await ebible_verses("engbsb", "GEN01");
  function lambda4() {
    function lambda(item) {
      let text = object_property_get(item, "text");
      let lower = string_lower_to(s);
      let parts = string_split_multiple(lower, ["—", " "]);
      function lambda2(item2) {
        let split = string_split_empty(item2);
      }
      let mapped = list_map(parts, lambda2);
    }
    each(list, lambda);
  }
  let unique = list_adder_unique(lambda4);
  return list;
}
