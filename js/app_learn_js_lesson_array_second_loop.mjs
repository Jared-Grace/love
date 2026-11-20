import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_if_else_if_lines_multiple } from "./js_code_if_else_if_lines_multiple.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_second_items } from "./app_learn_js_second_items.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_second_else_if } from "./app_learn_js_lesson_second_else_if.mjs";
import { app_learn_js_lesson_array_for } from "./app_learn_js_lesson_array_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
export function app_learn_js_lesson_array_second_loop() {
  arguments_assert(arguments, 0);
  ("the second biggest item of an array in one loop: let big = 0; let second = 0; for (let i = 0; i < a.length; i++) { if (a[i] > big) { second = big; big = a[i]; } else if (a[i] > second) { second = a[i]; } } console.log(second); with let a = [3, 8, 5, 6]; writes out 6");
  ("The last of four lessons on the second biggest number, approved by the human 2026-11-20: the one-number program from Second biggest: else if, run once for each item, with a[i] in place of n.");
  ("The wrong programs are the else if left out (a number that is only a new second is missed), the two lines of the first section in the other order (second gets the new top too), and else with no test (second ends as the last number that was not a new top). A wrong program is offered only when it writes out something else: with the else if left out the answer is still right whenever the second biggest comes before the biggest, so the arrays have it after the biggest in half the questions. The last number is never the second biggest. The extra wrong answers are the biggest and the last numbers.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let example_items = [3, 8, 5, 6];
  function program_of(items, way) {
    let codes = list_map(items, json_to);
    let right = js_code_array(codes);
    let code2 = js_code_let_statement("a", right);
    let code3 = js_code_let_statement("big", "0");
    let code4 = js_code_let_statement("second", "0");
    let lets = [code2, code3, code4];
    let top = equal(way, "swapped")
      ? ["big = a[i];", "second = big;"]
      : ["second = big;", "big = a[i];"];
    let if_lines = js_code_if_else_if_lines_multiple(
      "a[i] > big",
      top,
      "a[i] > second",
      ["second = a[i];"],
    );
    if (equal(way, "no_else_if")) {
      if_lines = js_code_if_lines_multiple("a[i] > big", top);
    }
    if (equal(way, "else_plain")) {
      if_lines = js_code_if_else_lines_multiple("a[i] > big", top, [
        "second = a[i];",
      ]);
    }
    let statements = list_concat(if_lines, ["i++;"]);
    let loop = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      statements,
    );
    let log_line = js_code_console_log_statement("second");
    let lines = list_concat_multiple([lets, loop, [log_line]]);
    let code = list_join_newline(lines);
    return code;
  }
  function inputs_get() {
    "six arrays, three of four numbers and three of five, the second biggest after the biggest in half of them";
    let sizes = [4, 4, 4, 5, 5, 5];
    let afters = [true, false, true, false, true, false];
    let inputs = [];
    for (let k = 0; less_than(k, sizes.length); k++) {
      let v = app_learn_js_second_items(sizes[k], afters[k]);
      inputs.push(v);
    }
    return inputs;
  }
  function extra_answers(items2) {
    "the biggest number and the last number";
    let most = Math.max(...items2);
    let json = json_to(most);
    let object = list_last(items2);
    let json2 = json_to(object);
    let answers = [json, json2];
    return answers;
  }
  function above(root, context, example) {
    "else if remembered, the array loop remembered, then the two put together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_second_else_if,
      [
        "",
        "if (n > big) { ... } else if (n > second) { ... }",
        " puts one number in its place",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for,
      ["", "a[i]", " is each item in turn, one run of the loop each"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "a[i]",
      " takes the place of ",
      "n",
      ", so each item in turn is a new top, a new second, or neither. After the loop ",
      "second",
      " is the second biggest:",
    ]);
    example(box_three, example_items);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Second biggest: one loop",
    "else if (a[i] > second)",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", "no_else_if", "swapped", "else_plain"],
    extra_answers,
  });
  return lesson;
}
