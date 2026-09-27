import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_middle_step } from "./app_code_lesson_statement_name_middle_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_expression_integer_division } from "./app_code_lesson_expression_integer_division.mjs";
import { app_code_line_ends_middle_draw } from "./app_code_line_ends_middle_draw.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_number_line_draw } from "./app_code_number_line_draw.mjs";
export function app_code_lesson_statement_name_middle() {
  arguments_assert(arguments, 0);
  ("the whole number in the middle of two names, rounded down: let sum = low + high; let middle = Math.floor(sum / 2); console.log(middle);");
  ("The average of two with the halving rounded down, so the answer is always a whole number. It is taught because a search through a sorted list looks here on every step; the writing says so without naming lists, which are not taught yet.");
  ("Most sums are odd, so the rounding changes the answer, and no middle is one of the numbers on its own screen or the 2 it is divided by. The five middles differ.");
  ("The writing follows the human's outline, 2026-09-27, from its second half: the average-of-two lesson already shows the middle on a number line, so this one opens by naming that and teaches only what is new, an odd sum whose middle is .5 and the choice to always round down. The outline wrote Math.floor(2 + 7 / 2), which divides only the 7; the lesson adds first in a line of its own, so the order cannot go wrong.");
  ("The reminder quotes lesson 87 in its own shape, Math.floor(14 / 4) is Math.floor(3.5) and Math.floor(3.5) is 3, so the decimal and the rounding down are both on the screen before the writing uses them. Picked over the human's other thought, 2026-09-27, of two reminders, one for dividing and one for Math.floor: lesson 87's first line already shows the division ending in a decimal, so a second box would repeat it.");
  ("Numbers in the writing are code chips wearing the number line's pointing colours: 2 and 7 the ends', 4.5 and then 4 the middle's. The line 9 / 2 === 4.5 points at its middle only, because its 2 is the one divided by, not the end.");
  let step = app_code_lesson_statement_name_middle_step();
  let middle = property_get(step, "middle");
  let line_sum = list_first(middle);
  let names = ["low", "high"];
  let low = list_first(names);
  let high = list_second(names);
  let floor_name = js_code_math_floor_name();
  let slash = js_operator_division_symbol();
  let plus = js_operator_plus_symbol();
  function remember_lines(box) {
    "lesson 87 in its own shape, each expression beside what it is";
    html_div_cycle_code(box, [
      "",
      "Math.floor(14 / 4)",
      " is ",
      "Math.floor(3.5)",
    ]);
    html_div_cycle_code(box, ["", "Math.floor(3.5)", " is ", "3"]);
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
  let ends = ["2", "7"];
  let combined = js_code_binary_spaced_nb("sum", slash, "2");
  let draw = app_code_line_ends_middle_draw(
    ["For example, suppose we have ", "2", " and ", "7", ":"],
    ends,
    [],
  );
  let code = js_code_binary_result_nb("2", plus, "7", "9");
  let draw2 = app_code_line_ends_middle_draw(["", code], ends, []);
  let code2 = js_code_binary_result_nb("9", slash, "2", "4.5");
  let draw3 = app_code_line_ends_middle_draw(["", code2], [], ["4.5"]);
  let draw4 = app_code_number_line_draw(2, 7, 0.5, [2, 7], 4.5);
  let draw5 = app_code_line_ends_middle_draw(
    [
      "",
      "4.5",
      " is ",
      "0.5",
      " away from ",
      "4",
      ", and ",
      "0.5",
      " away from ",
      "5",
    ],
    [],
    ["4.5"],
  );
  let draw6 = app_code_number_line_draw(2, 7, 0.5, [2, 7], 4);
  let lesson = app_code_lesson_statement_formula({
    words: "Middle of two names",
    title_code: js_code_call_args(floor_name, [combined]),
    names,
    values_get,
    example_values: [2, 7],
    step,
    remember_lesson: app_code_lesson_expression_integer_division,
    remember_parts: ["we divide, and then round down to get a whole number:"],
    remember_lines,
    explain: [
      ["The average of two numbers is the number in the middle"],
      ["If their sum is odd, the middle ends in .5"],
      draw,
      draw2,
      draw3,
      draw4,
      ["What if we want a whole number?"],
      draw5,
      ["So rounding up and rounding down are just as close"],
      ["So we choose one and always use it: we round down"],
      draw6,
      ["So we add first: ", line_sum],
      ["Then we divide by ", "2", " and round down with ", floor_name],
      [
        "Programs that search quickly do this again and again, with ",
        low,
        " and ",
        high,
        " marking where to look:",
      ],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
