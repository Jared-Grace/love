import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { equal } from "./equal.mjs";
import { js_code_if_else_if_lines_multiple } from "./js_code_if_else_if_lines_multiple.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_second_numbers } from "./app_learn_js_second_numbers.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_else_if } from "./app_learn_js_lesson_else_if.mjs";
import { app_learn_js_lesson_second_moves } from "./app_learn_js_lesson_second_moves.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
export function app_learn_js_lesson_second_else_if() {
  arguments_assert(arguments, 0);
  ("one number finding its place: let big = 8; let second = 5; let n = 6; if (n > big) { second = big; big = n; } else if (n > second) { second = n; } writes out 8 then 6");
  ("The third of four lessons on the second biggest number, approved by the human 2026-11-20. n lands in one of three places: a new top (the old top moves down to second), a new second (the top stays), or neither (nothing changes). Two questions each.");
  ("The wrong programs are the else if left out (a new second is missed), else with no test (second becomes n even when n is below it), n > big asked again in place of n > second (the second test can never be true), and the two lines of the first section in the other order (second gets the new top too). Each place has at least one wrong program that writes out something else there. The extra wrong answers are the two numbers in the other order and the numbers before the if.");
  ("The writing is a first draft by Claude 2026-11-20.");
  function program_of(input, way) {
    let code2 = js_code_let_statement("big", input.big + "");
    let code3 = js_code_let_statement("second", input.second + "");
    let code4 = js_code_let_statement("n", input.n + "");
    let lets = [code2, code3, code4];
    let top = equal(way, "swapped")
      ? ["big = n;", "second = big;"]
      : ["second = big;", "big = n;"];
    let if_lines = js_code_if_else_if_lines_multiple(
      "n > big",
      top,
      "n > second",
      ["second = n;"],
    );
    if (equal(way, "no_else_if")) {
      if_lines = js_code_if_lines_multiple("n > big", top);
    }
    if (equal(way, "else_plain")) {
      if_lines = js_code_if_else_lines_multiple("n > big", top, [
        "second = n;",
      ]);
    }
    if (equal(way, "repeat_big")) {
      if_lines = js_code_if_else_if_lines_multiple("n > big", top, "n > big", [
        "second = n;",
      ]);
    }
    let statement = js_code_console_log_statement("big");
    let statement2 = js_code_console_log_statement("second");
    let logs = [statement, statement2];
    let lines = list_concat_multiple([lets, if_lines, logs]);
    let code = list_join_newline(lines);
    return code;
  }
  function inputs_get() {
    "six sets of numbers: n above big, between the two, and below both, twice each";
    let kinds = ["above", "above", "between", "between", "below", "below"];
    let inputs = list_map(kinds, app_learn_js_second_numbers);
    return inputs;
  }
  function extra_answers(input2) {
    "the two numbers in the other order, and the numbers before the if";
    let joined = list_join_newline([input2.big, input2.second]);
    let joined2 = list_join_newline([input2.second, input2.big]);
    let joined3 = list_join_newline([input2.n, input2.big]);
    let answers = [joined, joined2, joined3];
    return answers;
  }
  function above(root, context, example) {
    "else if remembered, moving down remembered, then the three places";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_else_if,
      [
        "",
        "else if (b) { ... }",
        " runs when ",
        "a",
        " is ",
        "false",
        " and ",
        "b",
        " is ",
        "true",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_second_moves,
      [
        "",
        "second = big;",
        " comes before ",
        "big = n;",
        ", so the old top moves down",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "n",
      " lands in one of three places. Bigger than ",
      "big",
      ": a new top, and the old top moves down to second:",
    ]);
    example(box_three, {
      big: 8,
      second: 5,
      n: 9,
    });
    app_learn_js_div_cycle_code(box_three, [
      "Not bigger than ",
      "big",
      " but bigger than ",
      "second",
      ": a new second, and the top stays. ",
      "else if (n > second)",
      " asks this only when the first test was ",
      "false",
      ":",
    ]);
    example(box_three, {
      big: 8,
      second: 5,
      n: 6,
    });
    app_learn_js_div_cycle_code(box_three, [
      "Bigger than neither: nothing changes:",
    ]);
    example(box_three, {
      big: 8,
      second: 5,
      n: 2,
    });
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Second biggest: else if",
    "else if (n > second)",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", "no_else_if", "else_plain", "repeat_big", "swapped"],
    extra_answers,
  });
  return lesson;
}
