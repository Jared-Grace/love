import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_average_two_step } from "./app_code_lesson_statement_name_average_two_step.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_line_ends_middle_draw } from "./app_code_line_ends_middle_draw.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_divide } from "./app_code_lesson_statement_name_divide.mjs";
import { app_code_number_line_draw } from "./app_code_number_line_draw.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
export function app_code_lesson_statement_name_average_two() {
  arguments_assert(arguments, 0);
  ("the average of two names, in two short lines: let sum = a + b; let average = sum / 2; console.log(average);");
  ("The first formula split into short lines. Each line does one thing and gives its answer a name, and the next line reads that name - so a formula a learner could not read at a glance is two lines they can.");
  ("Every sum is even, so every average is whole, and no average is one of the numbers on its own screen or the 2 it is divided by. The five averages differ, so no two programs share an answer.");
  ("The writing follows the first half of the human's outline, 2026-09-27, moved here from the middle lesson: a number line shows 5 in the middle of 3 and 7, the same distance from both, so 'halfway' is seen before it is computed. The pair has an even sum, as every pair here does, so no .5 appears before the middle lesson teaches it.");
  ("Every number in the writing is a code chip, and 3, 7 and 5 wear the pointing colours they wear on the number line, so the sentences and the picture are seen to be about the same three numbers. The 2 they are apart by and the 2 the sum is divided by stay plain: they are not on the line.");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let step = app_code_lesson_statement_name_average_two_step();
  let middle = property_get(step, "middle");
  let line_sum = list_first(middle);
  let line_average = list_second(middle);
  let slash = js_operator_division_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
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
  function pointed(parts) {
    "a line whose 3 and 7 wear the ends' colour and whose 5 wears the middle's";
    let line = app_code_line_ends_middle_draw(parts, ["3", "7"], ["5"]);
    return line;
  }
  let v = pointed(["Suppose we have two numbers: ", "3", " and ", "7"]);
  let draw = app_code_number_line_draw([2, 3, 4, 5, 6, 7, 8], [3, 7], 5);
  let v2 = pointed(["", "5", " is in the middle"]);
  let code = js_code_binary_result_nb("3", plus, "2", "5");
  let v3 = pointed(["", "5", " is ", "2", " away from ", "3", ": ", code]);
  let code2 = js_code_binary_result_nb("7", minus, "2", "5");
  let v4 = pointed(["", "5", " is ", "2", " away from ", "7", ": ", code2]);
  let code3 = js_code_binary_result_nb("3", plus, "7", "10");
  let v5 = pointed(["", code3]);
  let code4 = js_code_binary_result_nb("10", slash, "2", "5");
  let v6 = pointed(["", code4]);
  let lesson = app_code_lesson_statement_formula({
    words: "Average of two names",
    title_code: line_average,
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
      v,
      ["Which number is in the middle?"],
      draw,
      v2,
      v3,
      v4,
      ["The number in the middle is called the average"],
      ["To find it, add the two numbers, then divide by ", "2", ":"],
      v5,
      v6,
      ["In code, first we add them: ", line_sum],
      ["Then we divide the sum by 2: ", line_average],
      ["Two short lines, each doing one thing:"],
    ],
    decoys: null,
  });
  return lesson;
}
