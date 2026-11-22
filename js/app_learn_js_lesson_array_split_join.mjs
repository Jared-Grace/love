import { arguments_assert } from "./arguments_assert.mjs";
import { list_join } from "./list_join.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_split_space } from "./app_learn_js_lesson_array_split_space.mjs";
import { app_learn_js_lesson_array_join } from "./app_learn_js_lesson_array_join.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_love_joy_peace_orders } from "./app_learn_js_love_joy_peace_orders.mjs";
export function app_learn_js_lesson_array_split_join() {
  arguments_assert(arguments, 0);
  ('every comma and space in a string changed to " and ", by splitting it and joining the pieces: let s = "love, joy, peace"; let a = s.split(", "); let t = a.join(" and "); console.log(t); writes out love and joy and peace');
  ("2026-11-22, at the human's asking: split then join, before replace and replaceAll, so the long way comes first, as with join and slice.");
  ('The wrong programs are: a.join("and") (no spaces around and), s.split(",") (each word after the first keeps its space, so two spaces stand before it), and console.log(s) (s is not changed).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(words, separator, joiner, logged) {
    'let s = "..."; let a = s.split(separator); let t = a.join(joiner); console.log(logged);';
    let text = list_join(words, ", ");
    let lines = [
      "let s = " + json_to(text) + ";",
      "let a = s.split(" + json_to(separator) + ");",
      "let t = a.join(" + json_to(joiner) + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(words2) {
    let code2 = program_with(words2, ", ", " and ", "t");
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, ", ", "and", "t");
    let v2 = program_with(words3, ",", " and ", "t");
    let v3 = program_with(words3, ", ", " and ", "s");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(words4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "split and join remembered, then one after the other";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_split_space,
      ["", 's.split(", ")', " cut ", "s", " at each comma and space"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_join,
      ["", 'a.join(", ")', " put a comma and a space between the words"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, ["Suppose we have a string ", "s"]);
    app_learn_js_div_cycle_code(box_two, [
      "To change every ",
      '", "',
      " to ",
      '" and "',
      ", split ",
      "s",
      " at each ",
      '", "',
      ", then join the words with ",
      '" and "',
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Split then join",
    'a.join(" and ")',
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
