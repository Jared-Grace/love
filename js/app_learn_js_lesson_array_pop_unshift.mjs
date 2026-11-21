import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_pop_value } from "./app_learn_js_lesson_array_pop_value.mjs";
import { app_learn_js_lesson_array_unshift } from "./app_learn_js_lesson_array_unshift.mjs";
import { app_learn_js_lesson_array_shift_push } from "./app_learn_js_lesson_array_shift_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_pop_unshift() {
  arguments_assert(arguments, 0);
  ('moving the last item to the front: let a = ["love", "joy", "peace"]; let last = a.pop(); a.unshift(last); console.log(a); writes out ["peace", "love", "joy"]');
  ("2026-11-22, at the human's asking: the twin of First to the end, right after it. It puts together what pop gives back (366) and unshift (367) - nothing new.");
  ("A set is six questions, arrays of three and four items three times each, shuffled.");
  ("The wrong programs are: the unshift left out (the last item is lost), shift and push in place of pop and unshift (the first item moves to the end instead), and push in place of unshift (the last item goes back where it was).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(items, middle) {
    "let a = [...]; then the middle lines; then console.log(a);";
    let codes = list_map(items, json_to);
    let head = "let a = " + js_code_array(codes) + ";";
    let before = list_concat([head], middle);
    let lines = list_concat(before, ["console.log(a);"]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, [
      "let last = a.pop();",
      "a.unshift(last);",
    ]);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, ["let last = a.pop();"]);
    let v2 = program_with(items3, ["let first = a.shift();", "a.push(first);"]);
    let v3 = program_with(items3, ["let last = a.pop();", "a.push(last);"]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_sized(size) {
    let list = fruits_of_the_spirit();
    let items5 = list_shuffle_take(list, size);
    return items5;
  }
  function inputs_get() {
    "arrays of three and four items three times each, shuffled";
    let inputs = list_map([3, 3, 3, 4, 4, 4], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "pop, unshift and the first item moved to the end remembered, then the last item moved to the front";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_pop_value,
      ["", "a.pop()", " removes the last item and gives it back"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_unshift,
      ["", "a.unshift()", " adds an item to the front of ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_array_shift_push,
      [
        "",
        "a.shift()",
        " then ",
        "a.push()",
        " moved the first item to the end",
      ],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Now suppose we want to move the last item to the front",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "First ",
      "a.pop()",
      " takes it off the end, and we keep it in ",
      "last",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "Then ",
      "a.unshift(last)",
      " puts it on the front:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_four, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Last to the front",
    "a.unshift(last);",
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
