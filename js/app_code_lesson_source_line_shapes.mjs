import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_source_code_pieces } from "./app_code_lesson_source_code_pieces.mjs";
import { app_code_lesson_text_line_shapes } from "./app_code_lesson_text_line_shapes.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
export function app_code_lesson_source_line_shapes(source) {
  arguments_assert(arguments, 1);
  ("every way one file of a lesson SHAPES a line of code it spells, named once each - bracketed, flat, a value on the left, a value on the right.");
  ("The same quoted pieces the operator reading works off, asked a finer question. A file spelling only 3 === 5 answers with nothing: one operator has no order to argue about, and no value sits at either end of it.");
  let pieces = app_code_lesson_source_code_pieces(source);
  let found = [];
  for (let piece of pieces) {
    let shapes = app_code_lesson_text_line_shapes(piece);
    for (let shape of shapes) {
      list_add_unique(found, shape);
    }
  }
  return found;
}
