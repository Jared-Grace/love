import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_text_operators_written } from "./app_code_lesson_text_operators_written.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_lesson_text_operator_symbols(text) {
  arguments_assert(arguments, 1);
  ("the operator symbols written in a piece of text, each named once.");
  ("This is the reading that keeps every operator as it is written with the repeats dropped, so the walk that tells === from == and <= from < is written once and stands behind both. The order is the order they are first written in, which is what dropping repeats from a walk leaves.");
  let written = app_code_lesson_text_operators_written(text);
  let unique = list_unique(written);
  return unique;
}
