import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { reply_wrap_invoke } from "../../../love/public/src/reply_wrap_invoke.mjs";
import { list_is_assert } from "../../../love/public/src/list_is_assert.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function reply_on_match(fn, on_match) {
  let matcher = async function reply_on_match_inner(possibilities) {
    list_is_assert(possibilities);
    let u = await uuid();
    let property = "before";
    capture(u, property, possibilities);
    possibilities = await reply_wrap_invoke(fn, possibilities);
    let filtered = reply_matches(possibilities);
    let ne = list_empty_not_is(filtered);
    if (ne) {
      on_match(filtered);
    }
    return filtered;
  };
  return matcher;
  function capture(u, property, possibilities) {
    function lambda(item) {
      let index = object_property_get(item, "index");
      let d = object_property_initialize(item, "data", {});
      object_property_set(d, u, {
        [property]: index,
      });
    }
    each(possibilities, lambda);
  }
}
