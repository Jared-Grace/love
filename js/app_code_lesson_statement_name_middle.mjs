import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_middle_step } from "./app_code_lesson_statement_name_middle_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_expression_integer_division } from "./app_code_lesson_expression_integer_division.mjs";
export function app_code_lesson_statement_name_middle() {
  arguments_assert(arguments, 0);
  ("the whole number in the middle of two names, rounded down: let sum = low + high; let middle = Math.floor(sum / 2); console.log(middle);");
  ("The average of two with the halving rounded down, so the answer is always a whole number. It is taught because a search through a sorted list looks here on every step; the writing says so without naming lists, which are not taught yet.");
  ("Most sums are odd, so the rounding changes the answer, and no middle is one of the numbers on its own screen or the 2 it is divided by. The five middles differ.");
  let step = app_code_lesson_statement_name_middle_step();
  let middle = property_get(step, "middle");
  let line_sum = list_first(middle);
  let names = ["low", "high"];
  let low = list_first(names);
  let high = list_second(names);
  let floor_name = js_code_math_floor_name();
  let slash = js_operator_division_symbol();
  let divided = js_code_binary_spaced_nb("9", slash, "2");
  let rounded = js_code_call_args(floor_name, [divided]);
  let statement = js_code_console_log_statement(rounded);
  let remember_lines = [statement];
  function values_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [0, 9],
      [2, 13],
      [4, 7],
      [1, 12],
      [3, 14],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let lesson = app_code_lesson_statement_formula({
    words: "Middle of two names",
    names,
    values_get,
    example_values: [2, 7],
    step,
    remember_lesson: app_code_lesson_expression_integer_division,
    remember_parts: [
      "",
      floor_name,
      " rounds a division down to a whole number:",
    ],
    remember_lines,
    explain: [
      [
        "Halfway between two whole numbers is not always whole: halfway between 2 and 7 is 4.5",
      ],
      ["So we add the two: ", line_sum],
      ["Then we halve the sum and round it down with ", floor_name, ":"],
      [
        "Programs that search quickly do this again and again, with ",
        low,
        " and ",
        high,
        " marking where to look:",
      ],
    ],
    decoys: null,
  });
  return lesson;
}
