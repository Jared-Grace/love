import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_average_two_step } from "./app_code_lesson_statement_name_average_two_step.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_divide } from "./app_code_lesson_statement_name_divide.mjs";
export function app_code_lesson_statement_name_average_two() {
  arguments_assert(arguments, 0);
  ("the average of two names, in two short lines: let sum = a + b; let average = sum / 2; console.log(average);");
  ("The first formula split into short lines. Each line does one thing and gives its answer a name, and the next line reads that name - so a formula a learner could not read at a glance is two lines they can.");
  ("Every sum is even, so every average is whole, and no average is one of the numbers on its own screen or the 2 it is divided by. The five averages differ, so no two programs share an answer.");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let step = app_code_lesson_statement_name_average_two_step();
  let middle = property_get(step, "middle");
  let line_sum = list_first(middle);
  let line_average = list_second(middle);
  let slash = js_operator_division_symbol();
  let divided = js_code_binary_spaced_nb(name_a, slash, name_b);
  let quotient = "quotient";
  let line_quotient = js_code_let_statement(quotient, divided);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [name_a, 18],
      [name_b, 3],
    ],
    [line_quotient],
    [quotient],
  );
  function values_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [4, 10],
      [7, 9],
      [12, 6],
      [5, 1],
      [15, 5],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let lesson = app_code_lesson_statement_formula({
    words: "Average of two names",
    names,
    values_get,
    example_values: [2, 6],
    step,
    remember_lesson: app_code_lesson_statement_name_divide,
    remember_parts: [
      "we can divide one name by another and give the answer a name:",
    ],
    remember_lines,
    explain: [
      ["The average of two numbers is halfway between them"],
      ["First we add them: ", line_sum],
      ["Then we divide the sum by 2: ", line_average],
      ["Two short lines, each doing one thing:"],
    ],
    decoys: null,
  });
  return lesson;
}
