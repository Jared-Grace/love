import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_middle_step } from "./app_code_lesson_statement_name_middle_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_number_line } from "./app_code_number_line.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_expression_integer_division } from "./app_code_lesson_expression_integer_division.mjs";
export function app_code_lesson_statement_name_middle() {
  arguments_assert(arguments, 0);
  ("the whole number in the middle of two names, rounded down: let sum = low + high; let middle = Math.floor(sum / 2); console.log(middle);");
  ("The average of two with the halving rounded down, so the answer is always a whole number. It is taught because a search through a sorted list looks here on every step; the writing says so without naming lists, which are not taught yet.");
  ("Most sums are odd, so the rounding changes the answer, and no middle is one of the numbers on its own screen or the 2 it is divided by. The five middles differ.");
  ("The writing follows the human's outline, 2026-09-27: find the middle on a picture first, see it is the same distance from both ends, then meet the odd sum whose middle is .5 and choose to always round down. The outline wrote Math.floor(2 + 7 / 2), which divides only the 7; the lesson adds first in a line of its own, so the order cannot go wrong.");
  ("The reminder shows 9 / 2 beside Math.floor(9 / 2), so the .5 an odd number halves to is on the screen before the writing says so, rather than a lesson of its own.");
  let step = app_code_lesson_statement_name_middle_step();
  let middle = property_get(step, "middle");
  let line_sum = list_first(middle);
  let names = ["low", "high"];
  let low = list_first(names);
  let high = list_second(names);
  let floor_name = js_code_math_floor_name();
  let slash = js_operator_division_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let divided = js_code_binary_spaced_nb("9", slash, "2");
  let rounded = js_code_call_args(floor_name, [divided]);
  let statement = js_code_console_log_statement(divided);
  let statement2 = js_code_console_log_statement(rounded);
  let remember_lines = [statement, statement2];
  function line_draw(values, ends, middle_value) {
    "a number line drawn in its place among the writing";
    function draw(box) {
      app_code_number_line(box, values, ends, middle_value);
    }
    return draw;
  }
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
  let combined = js_code_binary_spaced_nb("sum", slash, "2");
  let v = line_draw([2, 3, 4, 5, 6, 7, 8], [3, 7], 5);
  let v2 = js_code_binary_result_nb("3", plus, "2", "5");
  let v3 = js_code_binary_result_nb("7", minus, "2", "5");
  let v4 = js_code_binary_result_nb("2", plus, "7", "9");
  let v5 = js_code_binary_result_nb("9", slash, "2", "4.5");
  let v6 = line_draw([2, 3, 4, 4.5, 5, 6, 7], [2, 7], 4.5);
  let v7 = line_draw([2, 3, 4, 5, 6, 7], [2, 7], 4);
  let lesson = app_code_lesson_statement_formula({
    words: "Middle of two names",
    title_code: js_code_call_args(floor_name, [combined]),
    names,
    values_get,
    example_values: [2, 7],
    step,
    remember_lesson: app_code_lesson_expression_integer_division,
    remember_parts: [
      "dividing can end in a decimal, and ",
      floor_name,
      " rounds it down to a whole number:",
    ],
    remember_lines,
    explain: [
      ["Suppose we have two numbers: 3 and 7"],
      ["Which number is in the middle?"],
      v,
      ["5 is in the middle"],
      ["5 is 2 away from 3: ", v2],
      ["5 is 2 away from 7: ", v3],
      ["To find the middle, add the two numbers, then divide by 2"],
      ["If the sum is odd, the middle ends in .5"],
      ["For example, suppose we have 2 and 7:"],
      ["", v4],
      ["", v5],
      v6,
      ["What if we want a whole number?"],
      ["4.5 is 0.5 away from 4, and 0.5 away from 5"],
      ["So rounding up and rounding down are just as close"],
      ["So we choose one and always use it: we round down"],
      v7,
      ["So we add first: ", line_sum],
      ["Then we divide by 2 and round down with ", floor_name],
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
