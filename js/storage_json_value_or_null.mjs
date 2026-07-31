import { arguments_assert } from "./arguments_assert.mjs";
import { storage_json_parse_or_throw } from "./storage_json_parse_or_throw.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function storage_json_value_or_null(key, json) {
  arguments_assert(arguments, 2);
  ("Unwrap what a browser store handed back: nothing kept under that key answers");
  ("null, and anything else is read as the wrapper every writer here puts a value");
  ("in and handed back as the value alone.");
  ("Both readers - the one over local storage and the one over session storage -");
  ("ended in these same five lines. The stores differ only in which of them a key");
  ("belongs to, and that difference is spent before the read comes back, so from");
  ("the string onward there was never a second thing to do.");
  ("The key travels with the string only so a store holding something that is not");
  ("this wrapper can be complained about by name.");
  let held = null_not_is(json);
  let result = null;
  if (held) {
    let parsed = storage_json_parse_or_throw(key, json);
    result = property_get(parsed, "value");
  }
  return result;
}
