import { log } from "../../../love/public/src/log.mjs";
import { property_equals } from "../../../love/public/src/property_equals.mjs";
import { property_exists_not } from "../../../love/public/src/property_exists_not.mjs";
export function property_equals_try(object, property_name, property_value) {
  log(
    {
      object,
      property_name,
      property_value,
    },
    "TODO",
  );
  let n = property_exists_not(object, property_name);
  if (n) {
    return false;
  }
  let eq = property_equals(object, property_name, property_value);
  log(
    {
      eq,
      property_name,
      property_value,
    },
    "TODO",
  );
  return eq;
}
