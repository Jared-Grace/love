import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_replace } from "./app_learn_js_lesson_string_replace.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_love_joy_peace_orders } from "./app_learn_js_love_joy_peace_orders.mjs";
export function app_learn_js_lesson_string_replace_all() {
  arguments_assert(arguments, 0);
  ('every comma and space in a string changed to " and " in one call: let s = "love, joy, peace"; let t = s.replaceAll(", ", " and "); console.log(t); writes out love and joy and peace, as split then join does');
  ("2026-11-22, at the human's asking: after Replace the first. The split then join program is shown beside it, writing out the same.");
  ('The wrong programs are: s.replace(", ", " and ") (only the first changed), s.replaceAll(",", " and ") (each space after a comma stays), and console.log(s) (s is not changed).');
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
    let code2 = program_with(words2, 'replaceAll(", ", " and ")', "t");
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, 'replace(", ", " and ")', "t");
    let v2 = program_with(words3, 'replaceAll(",", " and ")', "t");
    let v3 = program_with(words3, 'replaceAll(", ", " and ")', "s");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(words4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "replace remembered, then replaceAll beside split then join";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_replace,
      ["", 's.replace(", ", " and ")', " changed only the first ", '", "'],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      's.replaceAll(", ", " and ")',
      " changes every ",
      '", "',
      " to ",
      '" and "',
      ":",
    ]);
    let code3 = program_of(example_input);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(
      box_two,
      text_split_newline(code3),
      value,
    );
    app_learn_js_div_cycle_code(box_two, [
      "That is the same as split then join:",
    ]);
    let text2 = list_join(example_input, ", ");
    let code4 = list_join_newline([
      "let s = " + json_to(text2) + ";",
      'let a = s.split(", ");',
      'let t = a.join(" and ");',
      "console.log(t);",
    ]);
    let value2 = eval_console_log_lines(code4);
    app_learn_js_code_lines_writes_out(
      box_two,
      text_split_newline(code4),
      value2,
    );
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Replace all",
    's.replaceAll(", ", " and ")',
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
