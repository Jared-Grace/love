import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { app_code_lesson_statement_name_third } from "./app_code_lesson_statement_name_third.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_average_two_step } from "./app_code_lesson_statement_name_average_two_step.mjs";
import { app_code_lesson_statement_name_average_three_step } from "./app_code_lesson_statement_name_average_three_step.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_average_two } from "./app_code_lesson_statement_name_average_two.mjs";
export function app_code_lesson_statement_name_average_three() {
  arguments_assert(arguments, 0);
  ("the average of three names: let sum = a + b + c; let average = sum / 3; console.log(average);");
  ("The average-of-two program with one more name added and 3 in place of 2, so the one new thing is that the number divided by is how many numbers there are.");
  ("Every sum divides by 3 exactly, no average is one of the numbers on its own screen or the 3 it is divided by, and the five averages differ.");
  let names_two = app_code_lesson_statement_name_value_names();
  let name_c = app_code_lesson_statement_name_third();
  let names = list_concat(names_two, [name_c]);
  let name_a = list_first(names);
  let name_b = list_second(names);
  let before = app_code_lesson_statement_name_average_two_step();
  let step = app_code_lesson_statement_name_average_three_step();
  let middle = property_get(step, "middle");
  let line_sum = list_first(middle);
  let line_average = list_second(middle);
  let middle2 = property_get(before, "middle");
  let logged = property_get(before, "logged");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [name_a, 2],
      [name_b, 6],
    ],
    middle2,
    logged,
  );
  function values_get() {
    "four of the five lists of three, in a fresh order each screen";
    let candidates = [
      [11, 1, 3],
      [8, 1, 3],
      [2, 9, 7],
      [12, 1, 8],
      [3, 10, 14],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let lesson = app_code_lesson_statement_formula({
    words: "Average of three names",
    title_code: line_average,
    names,
    values_get,
    example_values: [4, 6, 8],
    step,
    remember_lesson: app_code_lesson_statement_name_average_two,
    remember_parts: [
      "the average of two names is their ",
      "sum",
      " divided by 2:",
    ],
    remember_lines,
    explain: [
      ["For three numbers, we add all three: ", line_sum],
      ["Then we divide by 3, because there are three numbers: ", line_average],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
