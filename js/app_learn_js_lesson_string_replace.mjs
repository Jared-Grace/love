import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_search_put_program } from "./app_learn_js_search_put_program.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_replace_hand } from "./app_learn_js_lesson_string_replace_hand.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_love_joy_peace_orders } from "./app_learn_js_love_joy_peace_orders.mjs";
export function app_learn_js_lesson_string_replace() {
  arguments_assert(arguments, 0);
  ('only the first search in a string changed to put: let s = "love, joy, peace"; let search = ", "; let put = " and "; let t = s.replace(search, put); console.log(t); writes out love and joy, peace');
  ("2026-11-22, at the human's asking: after Replace by hand, which builds the same from indexOf, slice and +; replace does it in one call, and replaceAll comes next. search and put are named, as in Replace by hand.");
  ('The wrong programs are: s.replaceAll(search, put) (every one changed), search = "," (the space after the comma stays, so two spaces stand after and), and console.log(s) (s is not changed).');
  ("The words are always love, joy and peace, so there are always two commas, and changing only the first shows.");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(words, search, call, logged) {
    let middle = ["let t = s." + call + "(search, put);"];
    let code = app_learn_js_search_put_program(words, search, middle, logged);
    return code;
  }
  function program_of(words2) {
    let code2 = program_with(words2, ", ", "replace", "t");
    return code2;
  }
  function wrong_programs_of(words3) {
    let v = program_with(words3, ", ", "replaceAll", "t");
    let v2 = program_with(words3, ",", "replace", "t");
    let v3 = program_with(words3, ", ", "replace", "s");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(words4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "replacing by hand remembered, then replace doing it in one call";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_replace_hand,
      [
        "",
        "before + put + after",
        " changed the first ",
        "search",
        " to ",
        "put",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "s.replace(search, put)",
      " does the same in one line: it changes only the first ",
      "search",
      " to ",
      "put",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "replace",
      " does not change ",
      "s",
      "; it gives a new string:",
    ]);
    let code3 = program_of(example_input);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Replace the first",
    "s.replace(search, put)",
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
