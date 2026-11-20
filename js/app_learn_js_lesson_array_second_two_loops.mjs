import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_second_items } from "./app_learn_js_second_items.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_second_generic } from "./app_learn_js_lesson_second_generic.mjs";
export function app_learn_js_lesson_array_second_two_loops() {
  arguments_assert(arguments, 0);
  ("the second biggest item of an array with two loops: the first loop keeps big, the biggest; the second keeps second, the biggest of the others, with if (a[i] > second && a[i] !== big). let a = [3, 8, 5, 6]; writes out 6");
  ("The first of four lessons on the second biggest number, approved by the human 2026-11-20: two loops, then one number moving down, then one number with else if, then the loop that does it all at once. This one asks for nothing new: the first loop is Biggest number, and the second is the same loop skipping big.");
  ("The wrong programs are the second test left out (second is then the biggest again), === in place of !== (only big gets through, so second is the biggest), and a[i] !== second in place of a[i] !== big (true whenever a[i] > second is, so it skips nothing). Each writes out the biggest number. The extra wrong answers are the last and the smallest numbers; the last is never the second biggest.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let example_items = [3, 8, 5, 6];
  function program_of(items, way) {
    let codes = list_map(items, json_to);
    let right = js_code_array(codes);
    let a_line = js_code_let_statement("a", right);
    let big_line = js_code_let_statement("big", "0");
    let big_if = js_code_if_lines("a[i] > big", "big = a[i];");
    let statements = list_concat(big_if, ["i++;"]);
    let big_loop = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      statements,
    );
    let second_line = js_code_let_statement("second", "0");
    let conditions = {
      right: "a[i] > second && a[i] !== big",
      no_check: "a[i] > second",
      equal: "a[i] > second && a[i] === big",
      not_second: "a[i] > second && a[i] !== second",
    };
    let second_if = js_code_if_lines(conditions[way], "second = a[i];");
    let statements2 = list_concat(second_if, ["i++;"]);
    let second_loop = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      statements2,
    );
    let log_line = js_code_console_log_statement("second");
    let lines = list_concat_multiple([
      [a_line, big_line],
      big_loop,
      [second_line],
      second_loop,
      [log_line],
    ]);
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
    "the last number and the smallest number";
    let least = Math.min(...items2);
    let object = list_last(items2);
    let json = json_to(object);
    let json2 = json_to(least);
    let answers = [json, json2];
    return answers;
  }
  function above(root, context, example) {
    "biggest remembered, then the second loop that skips big";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_biggest,
      ["", "if (a[i] > big) { big = a[i]; }", " keeps the biggest number"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "big",
      " is found by the first loop. The second loop does the same with ",
      "second",
      ", but ",
      "a[i] !== big",
      " skips the biggest, so after it ",
      "second",
      " is the biggest of the rest, the second biggest:",
    ]);
    example(box_two, example_items);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Second biggest: two loops",
    "a[i] !== big",
  );
  let lesson = app_learn_js_lesson_second_generic({
    name_id,
    above,
    inputs_get,
    program_of,
    ways: ["right", "no_check", "equal", "not_second"],
    extra_answers,
  });
  return lesson;
}
