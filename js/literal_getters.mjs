import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { literal_distinctive_is } from "./literal_distinctive_is.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not_equal } from "./not_equal.mjs";
export function literal_getters(codes) {
  "Every function in a handed-in body of source that exists to return one written value, kept beside the value it returns.";
  "Only a value somebody had to choose counts. A plain short word is dropped here rather than by each reader in turn, because a getter returning one is indistinguishable from a getter returning a coincidence, and a reader who has to make that judgment will make it differently each time.";
  let getters = [];
  for (let f_name of object_property_names(codes)) {
    let literal = js_code_getter_literal(codes[f_name], f_name);
    if (not_equal(literal, "") && literal_distinctive_is(literal)) {
      list_add(getters, {
        f_name,
        literal,
      });
    }
  }
  return getters;
}
