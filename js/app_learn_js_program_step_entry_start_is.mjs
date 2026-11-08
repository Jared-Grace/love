import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_code_program_step_piece_start_is } from "./app_code_program_step_piece_start_is.mjs";
export function app_learn_js_program_step_entry_start_is(entry) {
  arguments_assert(arguments, 1);
  ("whether a step run is the code before a for's first ;, which runs once");
  let piece = property_get_or(entry, "piece", null);
  let is = app_code_program_step_piece_start_is(piece);
  return is;
}
