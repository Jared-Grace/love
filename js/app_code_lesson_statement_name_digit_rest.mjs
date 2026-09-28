import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_example_number_part_pointed_draw } from "./app_code_example_number_part_pointed_draw.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_line_number_part_pointed_draw } from "./app_code_line_number_part_pointed_draw.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_digit_split } from "./app_code_lesson_statement_name_digit_split.mjs";
export function app_code_lesson_statement_name_digit_rest() {
  arguments_assert(arguments, 0);
  ("the number left in front of a number's last digit: let rest = Math.floor(n / 10); - split from the last-digit lesson at the human's word, 2026-09-27, so each lesson teaches one line");
  ("The writing is the human's, 2026-09-28, in three boxes: what is wanted, shown on both numbers; how the code gets it, on 123; and the same on 4567, then the line. Numbers in the writing are code, as the last-digit lesson writes them.");
  ("It follows the last-digit lesson and reminds it, since the two lines together take a number apart. The writing starts from that lesson's own numbers, 123 and 4567, so the reader sees the same numbers cut the other way. Not picked: explaining it by chairs in rows of 10, whose row is the rest, which the last-digit lesson had before it lost its chairs; and saying the division shifts the digits, which names a picture the reader has not been shown.");
  ("No answer is 0, and the five answers differ.");
  ("The last program is coloured as the writing is, the kept 12 of 123 blue in its code and its output, asked by the human 2026-09-28; the reminder of the last-digit lesson is left plain, because there the 3 is what is coloured, and here blue already means the 12.");
  let names = ["n"];
  let n = list_first(names);
  let ten = "10";
  let digit = "last_digit";
  let rest = "rest";
  let percent = js_operator_percent_symbol();
  let slash = js_operator_division_symbol();
  let same = js_operator_triple_equal_symbol();
  let left_over = js_code_binary_spaced_nb(n, percent, ten);
  let line_digit = js_code_let_statement(digit, left_over);
  let divided = js_code_binary_spaced_nb(n, slash, ten);
  let floor_name = js_code_math_floor_name();
  let rounded = js_code_call_args(floor_name, [divided]);
  let line_rest = js_code_let_statement(rest, rounded);
  let step = {
    middle: [line_rest],
    logged: [rest],
  };
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [[n, 123]],
    [line_digit],
    [digit],
  );
  function values_get() {
    "four of the five, in a fresh order each screen";
    let candidates = [[47], [93], [258], [61], [734]];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let point = js_code_binary_result_nb("123", slash, ten, "12.3");
  let divided2 = js_code_binary_spaced_nb("123", slash, ten);
  let floored = js_code_call_args(floor_name, [divided2]);
  let whole = js_code_binary_spaced_nb(floored, same, "12");
  let divided3 = js_code_binary_spaced_nb("4567", slash, ten);
  let floored2 = js_code_call_args(floor_name, [divided3]);
  let whole2 = js_code_binary_spaced_nb(floored2, same, "456");
  let color = app_code_highlight_color();
  let color2 = app_code_highlight_color_second();
  ("the dot in 12.3 wears a third colour and the 3 after it a fourth, asked by the human 2026-09-28, so the dot that division puts in and the digit that rounding down takes away are each seen; the 3 of 123 stays plain, because a pointer on .3 names only the 3 after a dot");
  let color3 = app_code_highlight_color_third();
  let color4 = app_code_highlight_color_fourth();
  let pointers = [
    [["12"], color],
    [["456"], color2],
    [["."], color3],
    [[".3"], color4],
  ];
  function pointed(parts) {
    "a line whose kept digits wear the colours, the 12 of 123 blue and the 456 of 4567 green, wherever they are said or worked out, so what this line keeps is seen through every step; the last digit stays plain, since it is what is taken away. Asked by the human 2026-09-28, in place of the last digits coloured as the last-digit lesson colours them";
    let draw = app_code_line_number_part_pointed_draw(parts, pointers);
    return draw;
  }
  let pointers_moved = [
    [["12"], color],
    [["456"], color2],
    [["."], color3],
    [["3", ".3", "last digit"], color4],
  ];
  function moved(parts) {
    "a line where the last digit is followed as it moves: the words last digit, the 3 of 123 and the 3 after the dot all wear the fourth colour, asked by the human 2026-09-28 for the lines from dividing to rounding down. Not picked: the 3 of 123 coloured on every line, which would colour the 3 said to be removed before the division is taught, where only the kept 12 is the point";
    let draw = app_code_line_number_part_pointed_draw(parts, pointers_moved);
    return draw;
  }
  let v = pointed([
    "Suppose we have a whole number like ",
    "123",
    " or ",
    "4567",
  ]);
  let v2 = pointed([
    "For ",
    "123",
    " we remove the ",
    "3",
    " and keep the ",
    "12",
  ]);
  let v3 = pointed([
    "For ",
    "4567",
    " we remove the ",
    "7",
    " and keep the ",
    "456",
  ]);
  let v4 = moved(["", point]);
  let v5 = moved(["", whole]);
  let v6 = pointed(["The same process works for ", "4567", ":"]);
  let v7 = pointed(["", whole2]);
  let v8 = pointed([
    "Then ",
    floor_name,
    " rounds down, which removes the ",
    ".3",
    " from ",
    "12.3",
    ":",
  ]);
  let v9 = moved([
    "This puts the ",
    "",
    "last digit",
    "",
    " (",
    "3",
    ") after the ",
    ".",
    ":",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "All but the last digit",
    title_code: line_rest,
    names,
    values_get,
    example_values: [123],
    step,
    remember_lesson: app_code_lesson_statement_name_digit_split,
    remember_parts: ["we can get the last digit:"],
    remember_lines,
    explain: [
      v,
      ["Suppose we want to remove the last digit, and keep everything else"],
      v2,
      v3,
      app_code_explain_container_next,
      ["How do we get all but the last digit?"],
      ["In code, first we divide by ", "10"],
      v9,
      v4,
      v8,
      v5,
      app_code_explain_container_next,
      v6,
      v7,
      [
        "So dividing by ",
        ten,
        " and rounding down always leaves all but the last digit",
      ],
      ["", line_rest],
    ],
    decoys: null,
    example_pointers: app_code_example_number_part_pointed_draw([
      [["12"], color],
    ]),
  });
  return lesson;
}
