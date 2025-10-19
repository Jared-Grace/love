import { each } from "../../../love/public/src/each.mjs";
import { reply_on_match_property_add_multiple } from "../../../love/public/src/reply_on_match_property_add_multiple.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_on_match_property_multiple_lambda(property_name, items) {
  let v2 = function lambda(possibilities) {
    function lambda2(possibility) {
      marker("1");
      reply_on_match_property_add_multiple(possibility, property_name, items);
    }
    each(possibilities, lambda2);
    return possibilities;
  };
  return v2;
}
