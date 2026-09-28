import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_line_number_part_pointed_draw } from "./app_code_line_number_part_pointed_draw.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_digit_rest } from "./app_code_lesson_statement_name_digit_rest.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { app_code_example_number_part_pointed_draw } from "./app_code_example_number_part_pointed_draw.mjs";
export function app_code_lesson_statement_name_digit_append() {
  arguments_assert(arguments, 0);
  ("a last digit put back on the end of a number: let with_zero = rest * 10; let n = with_zero + last_digit; - the two digit lessons before it take 123 apart into 12 and 3, and this one puts them back together, so the three together are one idea seen both ways");
  ("Chosen for later use: reversing a number, and turning text such as 123 into the number 123, both build a number one digit at a time with these two lines, once loops are taught. Picked by the human from a list of formulas, 2026-09-28.");
  ("Two short lines rather than one, as the formulas split into short statements are: rest * 10 + last_digit in one line asks the learner to take in the times and the plus at once. Not picked: the single line, which the precedence lessons would allow but which hides the 120 that is the whole idea.");
  ("The name with_zero says what the middle number is, 12 with a 0 on the end, in words the learner already has. Not picked: shifted, which names a picture of digits sliding that the learner has not been shown - the last lesson turned the same word down.");
  ("The starting numbers are the answers of the two lessons before, reversed: those take 47, 93, 258, 61 and 734 apart, and this one builds them. No answer is 0, and the five answers differ.");
  ("The writing is a first draft, not yet the human's, 2026-09-28.");
  let names = ["rest", "last_digit"];
  let rest = "rest";
  let digit = "last_digit";
  let with_zero = "with_zero";
  let n = "n";
  let ten = "10";
  let star = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let slash = js_operator_division_symbol();
  let times_ten = js_code_binary_spaced_nb(rest, star, ten);
  let line_zero = js_code_let_statement(with_zero, times_ten);
  let added = js_code_binary_spaced_nb(with_zero, plus, digit);
  let line_n = js_code_let_statement(n, added);
  let step = {
    middle: [line_zero, line_n],
    logged: [n],
  };
  let divided = js_code_binary_spaced_nb("n", slash, ten);
  let floor_name = js_code_math_floor_name();
  let rounded = js_code_call_args(floor_name, [divided]);
  let line_rest = js_code_let_statement(rest, rounded);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [["n", 123]],
    [line_rest],
    [rest],
  );
  function values_get() {
    "four of the five, in a fresh order each screen";
    let candidates = [
      [4, 7],
      [9, 3],
      [25, 8],
      [6, 1],
      [73, 4],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let color = app_code_highlight_color();
  let color4 = app_code_highlight_color_fourth();
  let pointers = [
    [["12"], color],
    [["3"], color4],
  ];
  function pointed(parts) {
    "a line whose two parts wear the colours the last lesson gave them, the kept 12 blue and the last digit 3 purple, wherever they are said or worked out, so the reader sees the same two pieces go back together";
    let draw = app_code_line_number_part_pointed_draw(parts, pointers);
    return draw;
  }
  let v = pointed([
    "The last lesson took ",
    "123",
    " apart into ",
    "12",
    " and ",
    "3",
  ]);
  let v2 = pointed([
    "Suppose we want to put ",
    "12",
    " and ",
    "3",
    " back together",
  ]);
  let v3 = pointed(["Multiplying by ", ten, " puts a ", "0", " on the end:"]);
  let code = js_code_binary_result_nb("12", star, ten, "120");
  let v4 = pointed(["", code]);
  let v5 = pointed(["Then adding the digit fills in that ", "0", ":"]);
  let code2 = js_code_binary_result_nb("120", plus, "3", "123");
  let v6 = pointed(["", code2]);
  let lesson = app_code_lesson_statement_formula({
    words: "Last digit put back",
    title_code: line_n,
    names,
    values_get,
    example_values: [12, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_digit_rest,
    remember_parts: ["we can get all but the last digit:"],
    remember_lines,
    explain: [
      v,
      v2,
      app_code_explain_container_next,
      ["How do we put a digit back on the end?"],
      v3,
      v4,
      v5,
      v6,
      ["", line_zero],
      ["", line_n],
    ],
    decoys: null,
    example_pointers: app_code_example_number_part_pointed_draw([
      [["12"], color],
      [["3"], color4],
    ]),
  });
  return lesson;
}
