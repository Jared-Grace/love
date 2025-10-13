import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function reply_choice(choices) {
  let fn = function reply_sequence_matches(a) {
    let tokens = object_property_get(a, "tokens");
    let matches = false;
    function lambda(choice) {
      matches = choice(a);
      if (matches) {
        let v = true;
        return v;
      }
    }
    each(choices, lambda);
    return matches;
  };
  return fn;
}
