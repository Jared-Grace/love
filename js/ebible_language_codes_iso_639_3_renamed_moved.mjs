import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function ebible_language_codes_iso_639_3_renamed_moved(recorded, table) {
  "Each old code the record names that the table now answers differently - pointed at another code, or gone - with what the record says and what the table says now (null when gone). An old code the record has never seen is not here: the table may grow.";
  arguments_assert(arguments, 2);
  let moved = [];
  for (let old of object_property_names(recorded)) {
    let was = property_get(recorded, old);
    let now = property_get_or(table, old, null);
    if (not_equal(now, was)) {
      moved.push({
        old,
        was,
        now,
      });
    }
  }
  return moved;
}
