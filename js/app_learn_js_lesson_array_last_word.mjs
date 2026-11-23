import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_last } from "./app_learn_js_lesson_array_last.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_last_word() {
  arguments_assert(arguments, 0);
  ('the last word of a sentence: let s = "pray for one another"; let a = s.split(" "); console.log(a[a.length - 1]); writes out another');
  ("2026-11-23, at the human's asking: after First word. Split at a space, then the last item, is the last word. Nothing in it is new.");
  ("Sayings from the New Testament letters of two to five words, so where the last word sits changes from one to the next.");
  ("The wrong programs are: console.log(s[s.length - 1]) (the last letter, not the last word) and console.log(a[0]) (the first word). Not picked: a[a.length] (one past the end), since the step-through cannot yet show a value that is not there.");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "pray for one another";
  function inputs_get() {
    "five sayings of two to five words, shuffled";
    let sayings = [
      "rejoice always",
      "pray without ceasing",
      "pray for one another",
      "let love be genuine",
      "do all things without grumbling",
    ];
    let shuffled = list_shuffle_take(sayings, 5);
    return shuffled;
  }
  function program_with(saying, logged) {
    'let s = "..."; let a = s.split(" "); console.log(logged);';
    let lines = [
      "let s = " + json_to(saying) + ";",
      'let a = s.split(" ");',
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(saying2) {
    let code2 = program_with(saying2, "a[a.length - 1]");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, "s[s.length - 1]");
    let v2 = program_with(saying3, "a[0]");
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "last item remembered, then asked of the words of a sentence";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_last,
      ["", "a[a.length - 1]", " is the last item of ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "After ",
      's.split(" ")',
      ", the items are words, so ",
      "a[a.length - 1]",
      " is the last word:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Last word",
    "a[a.length - 1]",
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
