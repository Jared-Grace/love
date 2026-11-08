import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_learn_js_program_step_piece_start_is(piece) {
  arguments_assert(arguments, 1);
  ("whether a piece of a line, or null where there is none, is the code before a for's first ;, which runs once");
  if (null_is(piece)) {
    return false;
  }
  let is = property_get(piece, "for_start");
  return is;
}
