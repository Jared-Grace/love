import { app_code_example_number_part_pointed_draw } from "./app_code_example_number_part_pointed_draw.mjs";
import { app_code_line_number_part_pointed_draw } from "./app_code_line_number_part_pointed_draw.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_remainder } from "./app_code_lesson_statement_name_remainder.mjs";
import { list_between_space_nb } from "./list_between_space_nb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
export function app_code_lesson_statement_name_digit_split() {
  arguments_assert(arguments, 0);
  ("a number's last digit: let last_digit = n % 10; - the number left in front of it is the next lesson's, split out at the human's word, 2026-09-27, so each lesson teaches one line. The explanation is the human's words and ends on the line itself; the chairs in rows of 10 that it used to explain by were cut with the rest. Not picked: keeping both lines here, which asked a learner to take in % and Math.floor at once.");
  ("Chosen for later use: adding up a number's digits, reversing a number, and checking one reads the same both ways all take one digit off at a time with this line and the next lesson's, once loops are taught.");
  ("The remainder lesson is the one remembered, on its own example 14 and 4, since % 10 is a remainder and the writing no longer speaks of chairs, 2026-09-28. Not picked: the column lesson, remembered while the chairs in rows of 10 explained the digit. The worked program is 123, the writing's first number, so the explained sum is the one run.");
  ("No digit is 0, and the five answers differ.");
  ("Later wording from the human, 2026-09-28: the last digit of each number said before it is worked out, the 3 blue and the 7 green, asked as a question and taken as yes; and a box asking why 10 and not 9 or 11, answered by the count of digits. That box stands last, just above the worked program, because the program closes the explanation's last box. Not picked: one colour for both last digits, which would not tell the two numbers apart; and the why box after the program, which has no place to stand.");
  ("The opening is the human's, 2026-09-27, sent without a lesson named: two whole numbers, the question of the last digit, and % 10 answering it on both. Picked this lesson because it is the only one that teaches % 10. Not picked: the column lesson, which uses % on chairs rather than digits.");
  let names = ["n"];
  let n = list_first(names);
  let ten = "10";
  ("the name is last_digit, the human picked from three, 2026-09-28: it reads as the title and says which digit, and pairs with the next lesson's rest. Not picked: digit, which does not say which of the digits; and last, which does not say last what");
  let digit = "last_digit";
  let percent = js_operator_percent_symbol();
  let left_over = js_code_binary_spaced_nb(n, percent, ten);
  let line_digit = js_code_let_statement(digit, left_over);
  let step = {
    middle: [line_digit],
    logged: [digit],
  };
  let value_names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(value_names);
  let name_b = list_second(value_names);
  let remainder = "remainder";
  let divided = js_code_binary_spaced_nb(name_a, percent, name_b);
  let line_remainder = js_code_let_statement(remainder, divided);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [name_a, 14],
      [name_b, 4],
    ],
    [line_remainder],
    [remainder],
  );
  function values_get() {
    "four of the five, in a fresh order each screen";
    let candidates = [[47], [95], [258], [61], [734]];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  function by(number) {
    "% and a number as one chip, such as % 10";
    let spaced = list_between_space_nb([percent, number]);
    let chip = text_combine_multiple(spaced);
    return chip;
  }
  let by_ten = by(ten);
  let color = app_code_highlight_color();
  let color2 = app_code_highlight_color_second();
  let pointers = [
    [["3"], color],
    [["7"], color2],
  ];
  function pointed(parts) {
    "a line whose last digits wear their colours: the 3 of 123 blue and the 7 of 4567 green, wherever they are said or worked out, and at the end of 123 and 4567 themselves, asked by the human 2026-09-28";
    let draw = app_code_line_number_part_pointed_draw(parts, pointers);
    return draw;
  }
  let three = js_code_binary_result_nb("123", percent, ten, "3");
  let seven = js_code_binary_result_nb("4567", percent, ten, "7");
  let v = pointed(["The last digit of ", "123", " is ", "3"]);
  let v2 = pointed(["The last digit of ", "4567", " is ", "7"]);
  let v3 = pointed(["", three]);
  let v4 = pointed(["", seven]);
  let v5 = by("9");
  let v6 = by("11");
  let color3 = app_code_highlight_color();
  let v7 = pointed([
    "Let's suppose we have a whole number, like ",
    "123",
    " or ",
    "4567",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Last digit",
    title_code: line_digit,
    names,
    values_get,
    example_values: [123],
    step,
    remember_lesson: app_code_lesson_statement_name_remainder,
    remember_parts: [
      "we can find the remainder (",
      percent,
      ") of dividing one number by another:",
    ],
    remember_lines,
    explain: [
      v7,
      v,
      v2,
      app_code_explain_container_next,
      ["How can we get the last digit?"],
      ["Using ", by_ten, ":"],
      v3,
      v4,
      ["", by_ten, " always returns the last digit"],
      ["", line_digit],
      app_code_explain_container_next,
      [
        "Why is it ",
        by_ten,
        " and not ",
        v5,
        " or ",
        v6,
        " or ",
        percent,
        " for some other number?",
      ],
      [
        "There are ",
        "10",
        " different digits: ",
        "1",
        " ",
        "2",
        " ",
        "3",
        " ",
        "4",
        " ",
        "5",
        " ",
        "6",
        " ",
        "7",
        " ",
        "8",
        " ",
        "9",
        " ",
        "0",
      ],
      ["Therefore ", by_ten, " gives you the last digit of a number"],
      [
        "The number of different digits is the number you ",
        percent,
        " by to get the last digit of a number",
      ],
    ],
    decoys: null,
    example_pointers: app_code_example_number_part_pointed_draw([
      [["3"], color3],
    ]),
  });
  return lesson;
}
