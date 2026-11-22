import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_at_last } from "./app_learn_js_lesson_array_for_at_last.mjs";
import { app_learn_js_lesson_array_index_of_first } from "./app_learn_js_lesson_array_index_of_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_last_index_of() {
  arguments_assert(arguments, 0);
  ('where the last of an item is, in one line: let a = ["joy", "love", "joy", "peace"]; console.log(a.lastIndexOf("joy")); writes out 2');
  ("2026-11-22, at the human's asking: after Index of the first joy. .indexOf does what the first-joy loop does; .lastIndexOf does what the last-joy loop does.");
  ("A set is six questions, four or five words, joy twice among them at different places, so the first joy and the last always differ.");
  ('The wrong programs are: a.indexOf("joy") (the first joy), a.includes("joy") (true, not where), and a.lastIndexOf("joy") + 1 (counted from 1).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let pool = ["love", "peace", "patience", "kindness", "goodness"];
  let example_input = ["joy", "love", "joy", "peace"];
  function program_with(items, logged) {
    "let a = items; console.log(logged);";
    let codes = list_map(items, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, 'a.lastIndexOf("joy")');
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, 'a.indexOf("joy")');
    let v2 = program_with(items3, 'a.includes("joy")');
    let v3 = program_with(items3, 'a.lastIndexOf("joy") + 1');
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_sized(size) {
    "size words, joy twice among them";
    let count = subtract(size, 2);
    let others = list_shuffle_take(pool, count);
    let all = list_concat(others, ["joy", "joy"]);
    let shuffled = list_shuffle_take(all, size);
    return shuffled;
  }
  function inputs_get() {
    "four or five words, three times each, shuffled";
    let inputs = list_map([4, 4, 4, 5, 5, 5], input_sized);
    let shuffled2 = list_shuffle_take(inputs, 6);
    return shuffled2;
  }
  function above(root, context) {
    "the last-joy loop and .indexOf remembered, then .lastIndexOf";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at_last,
      [
        "a loop setting ",
        "at = i;",
        " at every ",
        '"joy"',
        " ended at the last one",
      ],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_of_first,
      ["", 'a.indexOf("joy")', " gave the first one's index"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'a.lastIndexOf("joy")',
      " gives the last one's index, as the loop did:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Index of the last joy",
    'a.lastIndexOf("joy")',
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
