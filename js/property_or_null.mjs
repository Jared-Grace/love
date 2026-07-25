import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function property_or_null(object, property_name) {
  ("For a name the object may or may not carry. Absent is an ordinary answer here,");
  ("not a mistake, so it comes back as nothing rather than as an error. Asking a");
  ("question with the getter that treats absence as a mistake makes the branch that");
  ("handles absence unreachable.");
  let exists = property_exists(object, property_name);
  let missing = not(exists);
  if (missing) {
    return null;
  }
  let value = property_get(object, property_name);
  return value;
}
