import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_program_step_entry_start_is(entry) {
  arguments_assert(arguments, 1);
  ("whether a step run is the code before a for's first ;, which runs once");
  let piece = property_get_or(entry, "piece", null);
  if (null_is(piece)) {
    return false;
  }
  let is = property_get(piece, "for_start");
  return is;
}
