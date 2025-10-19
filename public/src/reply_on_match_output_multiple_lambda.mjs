import { reply_on_match_property_add_multiple } from "../../../love/public/src/reply_on_match_property_add_multiple.mjs";
import { reply_property_outputs } from "../../../love/public/src/reply_property_outputs.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function reply_on_match_output_multiple_lambda(items) {
  const property_name = reply_property_outputs();
  let v = function lambda(possibilities) {
    function lambda2(possibility) {
      marker("1");
      reply_on_match_property_add_multiple(possibility, property_name, items);
    }
    each(possibilities, lambda2);
    return possibilities;
  };
  return v;
}
