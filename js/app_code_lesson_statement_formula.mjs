import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_statement_formula({
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
}) {
  arguments_assert(arguments, 1);
  ("a formula lesson offering the usual number of answers per question; the whole screen is built by the twin that also takes how many answers to offer, which a lesson answering only true or false needs");
  let lesson = app_code_lesson_statement_formula_answer_count({
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
    answer_count: null,
  });
  return lesson;
}
