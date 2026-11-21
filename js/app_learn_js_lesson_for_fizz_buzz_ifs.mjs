import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_for_if_even } from "./app_learn_js_lesson_for_if_even.mjs";
import { app_learn_js_lesson_else_if } from "./app_learn_js_lesson_else_if.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_for_fizz_buzz_ifs() {
  arguments_assert(arguments, 0);
  ('two ifs one after the other inside a for: for (let i = 9; i <= 15; i++) { if (i % 3 === 0) { console.log("Fizz"); } if (i % 5 === 0) { console.log("Buzz"); } } writes out Fizz, Buzz, Fizz, Fizz, Buzz; at 15 both ifs run, so Fizz and Buzz are on two lines');
  ("2026-11-21, asked for by the human: the step before FizzBuzz, so a student sees that two ifs one after the other each ask on their own, where an else if asks only when the test before it was false. The human's words: so they can see when it's independent, and see that it outputs Fizz Buzz, just on different lines.");
  ("A set is six questions: three ranges that hold 15 or 30, where both ifs run on one number, and three that do not, shuffled. Every range ends on a number that divides by 3 or 5, so leaving out the last number changes what is written out.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: else if in place of the second if (at 15 only Fizz), Fizz and Buzz swapped, and i < in place of i <= (the last number left out). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_input = [9, 15];
  function program_with(input, condition, three, five, second) {
    "for (let i = start; condition; i++) { if (i % 3 === 0) { console.log(three); } second (i % 5 === 0) { console.log(five); } }";
    let start = list_get(input, 0);
    let lines = [
      "for (let i = " + start + "; " + condition + "; i++) {",
      "  if (i % 3 === 0) {",
      "    console.log(" + three + ");",
      "  }" + second + " (i % 5 === 0) {",
      "    console.log(" + five + ");",
      "  }",
      "}",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let end = list_get(input2, 1);
    let code2 = program_with(
      input2,
      "i <= " + end,
      '"Fizz"',
      '"Buzz"',
      "\n  if",
    );
    return code2;
  }
  function wrong_programs_of(input3) {
    let end2 = list_get(input3, 1);
    let v = program_with(
      input3,
      "i <= " + end2,
      '"Fizz"',
      '"Buzz"',
      " else if",
    );
    let v2 = program_with(input3, "i <= " + end2, '"Buzz"', '"Fizz"', "\n  if");
    let v3 = program_with(input3, "i < " + end2, '"Fizz"', '"Buzz"', "\n  if");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "three ranges holding 15 or 30 and three not, shuffled";
    let both = [
      [9, 15],
      [12, 15],
      [13, 18],
      [14, 20],
      [26, 30],
      [28, 33],
    ];
    let neither = [
      [1, 5],
      [4, 9],
      [7, 10],
      [16, 21],
      [19, 24],
      [22, 25],
    ];
    let a = list_shuffle_take(both, 3);
    let b = list_shuffle_take(neither, 3);
    let taken = list_concat(a, b);
    let inputs = list_shuffle_take(taken, 6);
    return inputs;
  }
  function above(root, context) {
    "% inside a for and else if remembered, then two ifs that each ask on their own";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_if_even,
      [
        "",
        "i % 2 === 0",
        " inside a ",
        "for",
        " kept the numbers that divide by ",
        "2",
        " with nothing left over",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_else_if,
      [
        "",
        "else if",
        " asks its test only when the test before it was ",
        "false",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Here there is no ",
      "else",
      ". The two ",
      "if",
      " statements are one after the other, so each one asks on its own, every run.",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "15",
      " divides by ",
      "3",
      " and by ",
      "5",
      ", so at ",
      "15",
      " both ",
      "if",
      " statements run: ",
      '"Fizz"',
      " is written out and then ",
      '"Buzz"',
      " on the next line:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Fizz and Buzz",
    "if (i % 5 === 0)",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
