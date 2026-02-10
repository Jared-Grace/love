import { list_add } from "../../../love/public/src/list_add.mjs";
import { reply_on_match_generic } from "../../../love/public/src/reply_on_match_generic.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
export function reply_on_match_capture(fn, lambda) {
  function capture(possibilities, property, u) {
    function lambda(item) {
      let index = property_get(item, "index");
      let d = property_initialize(item, "data", {});
      let o = property_initialize(d, u, {});
      object_property_set(o, property, index);
    }
    each(possibilities, lambda);
  }
  let before = async function lambda2(possibilities) {
    let u = await uuid();
    capture(possibilities, "before", u);
    return u;
  };
  let after = function lambda3(filtered, u) {
    capture(filtered, "after", u);
  };
  let on_args = function lambda4(args) {
    list_add(args, u);
  };
  let matcher = reply_on_match_generic(fn, before, after, on_args, [lambda]);
  return matcher;
}
