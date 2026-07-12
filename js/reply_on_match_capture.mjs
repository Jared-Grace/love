import { list_add } from "./list_add.mjs";
import { reply_on_match_generic } from "./reply_on_match_generic.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { uuid } from "./uuid.mjs";
import { property_initialize } from "./property_initialize.mjs";
export function reply_on_match_capture(fn, lambda) {
  function capture(possibilities, property, u) {
    function lambda(item) {
      let index = property_get(item, "index");
      let d = property_initialize(item, "data", {});
      let o = property_initialize(d, u, {});
      property_set(o, property, index);
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
