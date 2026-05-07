import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
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
              message: "value does not match",
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
