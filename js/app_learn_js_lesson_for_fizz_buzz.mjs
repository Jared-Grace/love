import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_for_fizz_buzz_ifs } from "./app_learn_js_lesson_for_fizz_buzz_ifs.mjs";
import { app_learn_js_lesson_while_and } from "./app_learn_js_lesson_while_and.mjs";
import { app_learn_js_lesson_else_if_else } from "./app_learn_js_lesson_else_if_else.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_for_fizz_buzz() {
  arguments_assert(arguments, 0);
  ('FizzBuzz: for (let i = 13; i <= 15; i++) { if (i % 3 === 0 && i % 5 === 0) { console.log("FizzBuzz"); } else if (i % 3 === 0) { console.log("Fizz"); } else if (i % 5 === 0) { console.log("Buzz"); } else { console.log(i); } } writes out 13, 14 and FizzBuzz');
  ("2026-11-21, approved by the human: FizzBuzz, the most asked interview warm-up, right after the lesson where two ifs each ask on their own. Here an else if chain answers once per number, so the test for both goes first. && is used, not i % 15, because && says both in words a student already knows.");
  ("A set is six questions: three ranges that hold 15 or 30 and three that do not, shuffled; each range is 3 or 4 numbers.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: the test for both put last, where it is never reached (15 writes out Fizz); || in place of && (every number dividing by 3 or by 5 writes out FizzBuzz); and no else (the other numbers are not written out). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_input = [13, 15];
  let both = ["i % 3 === 0 && i % 5 === 0", '"FizzBuzz"'];
  let either = ["i % 3 === 0 || i % 5 === 0", '"FizzBuzz"'];
  let three = ["i % 3 === 0", '"Fizz"'];
  let five = ["i % 5 === 0", '"Buzz"'];
  function program_with(input, tests, with_else) {
    "for (let i = start; i <= end; i++) { if (test) { console.log(word); } else if ... else { console.log(i); } }";
    let start = list_get(input, 0);
    let end = list_get(input, 1);
    let lines = ["for (let i = " + start + "; i <= " + end + "; i++) {"];
    let opening = "  if (";
    for (let t of tests) {
      lines.push(opening + list_get(t, 0) + ") {");
      lines.push("    console.log(" + list_get(t, 1) + ");");
      opening = "  } else if (";
    }
    if (with_else) {
      lines.push("  } else {");
      lines.push("    console.log(i);");
    }
    lines.push("  }");
    lines.push("}");
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, [both, three, five], true);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, [three, five, both], true);
    let v2 = program_with(input3, [either, three, five], true);
    let v3 = program_with(input3, [both, three, five], false);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "three ranges holding 15 or 30 and three not, shuffled";
    let with_both = [
      [13, 15],
      [14, 16],
      [15, 18],
      [28, 30],
      [29, 32],
      [30, 33],
    ];
    let without = [
      [1, 4],
      [5, 7],
      [8, 10],
      [17, 20],
      [21, 24],
      [24, 26],
    ];
    let a = list_shuffle_take(with_both, 3);
    let b = list_shuffle_take(without, 3);
    let taken = list_concat(a, b);
    let inputs = list_shuffle_take(taken, 6);
    return inputs;
  }
  function above(root, context) {
    "two ifs, && and else remembered, then FizzBuzz";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_fizz_buzz_ifs,
      [
        "with two ",
        "if",
        " statements, ",
        "15",
        " wrote out ",
        '"Fizz"',
        " and ",
        '"Buzz"',
        " on two lines",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_while_and,
      ["", "&&", " is ", "true", " only when both sides are ", "true"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_else_if_else,
      ["", "else", " runs when no test before it is ", "true"],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "FizzBuzz writes out ",
      '"Fizz"',
      " for a number that divides by ",
      "3",
      ", ",
      '"Buzz"',
      " for one that divides by ",
      "5",
      ", ",
      '"FizzBuzz"',
      " for one that divides by both, and the number itself otherwise.",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "In an ",
      "else if",
      " chain only one part runs, so the test for both goes first. Otherwise ",
      "i % 3 === 0",
      " would answer first and ",
      "15",
      " would write out only ",
      '"Fizz"',
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_four, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "FizzBuzz",
    "i % 3 === 0 && i % 5 === 0",
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
