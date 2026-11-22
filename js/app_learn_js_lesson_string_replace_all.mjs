import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_search_put_program } from "./app_learn_js_search_put_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_replace } from "./app_learn_js_lesson_string_replace.mjs";
import { app_learn_js_lesson_array_split_join } from "./app_learn_js_lesson_array_split_join.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_love_joy_peace_orders } from "./app_learn_js_love_joy_peace_orders.mjs";
export function app_learn_js_lesson_string_replace_all() {
  arguments_assert(arguments, 0);
  ('every search in a string changed to put in one call: let s = "love, joy, peace"; let search = ", "; let put = " and "; let t = s.replaceAll(search, put); console.log(t); writes out love and joy and peace, as split then join does');
  ("2026-11-22, at the human's asking: after Replace the first. The split then join program, with the same search and put, is shown beside it writing out the same, and Split then join is remembered by its lesson number.");
  ('The wrong programs are: s.replace(search, put) (only the first changed), search = "," (each space after a comma stays), and console.log(s) (s is not changed).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(words, search, call, logged) {
    let middle = ["let t = s." + call + "(search, put);"];
    let code = app_learn_js_search_put_program(words, search, middle, logged);
    return code;
  }
  function program_of(words2) {
    let code2 = program_with(words2, ", ", "replaceAll", "t");
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, ", ", "replace", "t");
    let v2 = program_with(words3, ",", "replaceAll", "t");
    let v3 = program_with(words3, ", ", "replaceAll", "s");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(words4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "replace and split then join remembered, then replaceAll beside split then join";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_replace,
      ["", "s.replace(search, put)", " changed only the first ", "search"],
    );
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_split_join,
      ["split then join changed every ", '", "', " to ", '" and "'],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "s.replaceAll(search, put)",
      " changes every ",
      "search",
      " to ",
      "put",
      ":",
    ]);
    let code3 = program_of(example_input);
    let value = eval_console_log_lines(code3);
    let lines = text_split_newline(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
    app_learn_js_div_cycle_code(box_two, [
      "That is the same as split then join:",
    ]);
    let code4 = app_learn_js_search_put_program(
      example_input,
      ", ",
      ["let a = s.split(search);", "let t = a.join(put);"],
      "t",
    );
    let value2 = eval_console_log_lines(code4);
    let lines2 = text_split_newline(code4);
    app_learn_js_code_lines_writes_out(box_two, lines2, value2);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Replace all",
    "s.replaceAll(search, put)",
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
