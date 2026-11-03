import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_formula_backwards_decoys } from "./app_code_lesson_statement_formula_backwards_decoys.mjs";
export function app_code_lesson_statement_formula_answer_count({
  words,
  title_code,
  names,
  values_get,
  example_values,
  step,
  remember_lesson,
  remember_parts,
  remember_lines,
  explain,
  decoys,
  example_pointers,
  answer_count,
  steps,
}) {
  arguments_assert(arguments, 1);
  ("the lesson with the other questions' answers as the wrong answers to its backward question");
  let lesson = app_code_lesson_statement_formula_backwards_decoys({
    words,
    title_code,
    names,
    values_get,
    example_values,
    step,
    remember_lesson,
    remember_parts,
    remember_lines,
    explain,
    decoys,
    example_pointers,
    answer_count,
    steps,
    backwards_decoys: null,
  });
  return lesson;
}
