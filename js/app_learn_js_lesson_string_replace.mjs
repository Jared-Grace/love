import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_split_join } from "./app_learn_js_lesson_array_split_join.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_love_joy_peace_orders } from "./app_learn_js_love_joy_peace_orders.mjs";
export function app_learn_js_lesson_string_replace() {
  arguments_assert(arguments, 0);
  ('only the first comma and space in a string changed to " and ": let s = "love, joy, peace"; let t = s.replace(", ", " and "); console.log(t); writes out love and joy, peace');
  ("2026-11-22, at the human's asking: after Split then join, which changes every one; replace changes only the first, and replaceAll comes next.");
  ('The wrong programs are: s.replaceAll(", ", " and ") (every one changed), s.replace(",", " and ") (the space after the comma stays, so two spaces stand after and), and console.log(s) (s is not changed).');
  ("Three or four words, so there are always at least two commas, and changing only the first shows.");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(words, call, logged) {
    'let s = "..."; let t = s.call; console.log(logged);';
    let text = list_join(words, ", ");
    let lines = [
      "let s = " + json_to(text) + ";",
      "let t = s." + call + ";",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(words2) {
    let code2 = program_with(words2, 'replace(", ", " and ")', "t");
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, 'replaceAll(", ", " and ")', "t");
    let v2 = program_with(words3, 'replace(",", " and ")', "t");
    let v3 = program_with(words3, 'replace(", ", " and ")', "s");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(words4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "split then join remembered, then replace changing only the first";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_split_join,
      ["split then join changed every ", '", "', " to ", '" and "'],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      's.replace(", ", " and ")',
      " changes only the first ",
      '", "',
      " to ",
      '" and "',
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "replace",
      " does not change ",
      "s",
      "; it gives a new string:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Replace the first",
    's.replace(", ", " and ")',
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get: app_learn_js_love_joy_peace_orders,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
