import { js_value_code } from "./js_value_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_line_pieces_add } from "./app_code_line_pieces_add.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_program_trace_record(state, from, to, value) {
  arguments_assert(arguments, 4);
  ("a piece of the line just worked out, written into it as its value, so what is read off the line from then on reads the value there: state's pieces gain it, from to to");
  let pieces = property_get(state, "pieces");
  let written = js_value_code(value);
  let pieces_new = app_code_line_pieces_add(pieces, from, to, written);
  property_set(state, "pieces", pieces_new);
}
