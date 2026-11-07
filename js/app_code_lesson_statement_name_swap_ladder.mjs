import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_learn_js_lesson_statement_formula_backwards_decoys } from "./app_learn_js_lesson_statement_formula_backwards_decoys.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_lesson_statement_name_swap_number_pairs } from "./app_code_lesson_statement_name_swap_number_pairs.mjs";
import { app_learn_js_lesson_decoy_lines_starting_values } from "./app_learn_js_lesson_decoy_lines_starting_values.mjs";
export function app_code_lesson_statement_name_swap_ladder({
  words,
  step,
  remember_lesson,
  remember_parts,
  remember_lines,
  explain,
  steps,
}) {
  arguments_assert(arguments, 1);
  ("one lesson of the ladder that builds up to swapping two names: its title, the boxes read before the questions, and questions whose programs start a and b with two numbers, run the lines the lesson is about, and write out the names it asks about");
  ("A LADDER, ONE LINE AT A TIME: each lesson's program is the one before it with one line changed, so every screen has one new thing on it and swapping arrives as the last line of a program the learner has already read, at the human's request, 2026-09-27.");
  ("step holds the lines the lesson is about (middle) and the names it writes out (logged). The reminder shows the lesson before it whole, as remember_lines, and explain is the lines of writing that lead to this lesson's program - each a list alternating plain writing and code.");
  ("The wrong answers are every way of writing the starting numbers on the answer's lines, because each mistake about swapping is one of those - see the decoy function's own note.");
  let names = app_code_lesson_statement_name_value_names();
  let list = property_get(step, "middle");
  ("A step may hand in the wrong programs for its backward question. The first two lessons of the ladder do not: their programs write out one number twice, so the shared wrong programs can come to the right answer.");
  let backwards_decoys = property_get_or_null(step, "backwards_decoys");
  let lesson = app_learn_js_lesson_statement_formula_backwards_decoys({
    words,
    title_code: list_join_space(list),
    names,
    values_get: app_code_lesson_statement_name_swap_number_pairs,
    example_values: [3, 8],
    step,
    remember_lesson,
    remember_parts,
    remember_lines,
    explain,
    decoys: app_learn_js_lesson_decoy_lines_starting_values,
    example_pointers: null,
    answer_count: null,
    steps,
    backwards_decoys,
  });
  return lesson;
}
