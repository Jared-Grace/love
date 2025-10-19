import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { reply_wrap_invoke } from "../../../love/public/src/reply_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function reply_on_match_capture(fn, lambda) {
  let matcher = async function reply_on_match_inner(possibilities) {
    list_is_assert(possibilities);
    let u = await uuid();
    capture(possibilities, "before");
    function capture(possibilities, property) {
      function lambda(item) {
        let index = object_property_get(item, "index");
        let d = object_property_initialize(item, "data", {});
        let o = object_property_initialize(d, u, {});
        object_property_set(o, property, index);
      }
      each(possibilities, lambda);
    }
    possibilities = await reply_wrap_invoke(fn, possibilities);
    let filtered = reply_matches(possibilities);
    capture(filtered, "after");
    let ne = list_empty_not_is(filtered);
    if (ne) {
      lambda(filtered, u);
    }
    return filtered;
  };
  return matcher;
}
