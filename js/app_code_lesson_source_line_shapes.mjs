import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_source_code_pieces } from "./app_code_lesson_source_code_pieces.mjs";
import { app_code_lesson_text_line_shape_or_null } from "./app_code_lesson_text_line_shape_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
export function app_code_lesson_source_line_shapes(source) {
  arguments_assert(arguments, 1);
  ("every shape of multi-operator line one file of a lesson SPELLS - bracketed, flat, or both - named once each.");
  ("The same quoted pieces the operator reading works off, asked a finer question. A file spelling only 3 === 5 answers with nothing, because one operator has no order to argue about.");
  let pieces = app_code_lesson_source_code_pieces(source);
  let found = [];
  for (let piece of pieces) {
    let shape = app_code_lesson_text_line_shape_or_null(piece);
    let some = null_not_is(shape);
    if (some) {
      list_add_unique(found, shape);
    }
  }
  return found;
}
