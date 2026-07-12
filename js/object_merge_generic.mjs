import { object_merge_generic_message_match } from "./object_merge_generic_message_match.mjs";
import { equal_not } from "./equal_not.mjs";
import { each } from "./each.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { error_json } from "./error_json.mjs";
export function object_merge_generic(mode, to, from) {
  function lambda(property_name) {
    let value_new = property_get(from, property_name);
    if (property_exists(to, property_name)) {
      if (mode === "strict") {
        error_json({
          to,
          from,
          property_name,
        });
      } else {
        if (mode === "match") {
          let existing = property_get(to, property_name);
          if (equal_not(existing, value_new)) {
            error_json({
              message: object_merge_generic_message_match(),
              to,
              from,
              property_name,
            });
          }
        }
      }
    }
    property_set(to, property_name, value_new);
  }
  let list = properties_get(from);
  each(list, lambda);
}
