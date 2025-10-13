import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(a) {
    let tokens = object_property_get(a, "tokens");
    let matches = true;
    each(list, function lambda(item) {});
    return matches;
  };
  return fn;
}
