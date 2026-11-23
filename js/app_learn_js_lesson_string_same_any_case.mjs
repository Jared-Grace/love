import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_lower } from "./app_learn_js_lesson_string_lower.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_same_any_case() {
  arguments_assert(arguments, 0);
  ('whether two words are the same word, whatever their capitals: let s = "God"; let t = "god"; let x = s.toLowerCase(); let y = t.toLowerCase(); console.log(x === y); writes out true');
  ("2026-11-23, at the human's asking: after Every letter small. Both words made small first, then compared, so a capital no longer makes them differ.");
  ("Each word is made small in a line of its own because the step-through calls toLowerCase only on a plain name, and only as the whole value of a line.");
  ("Four pairs are one word with different capitals, which === alone calls different; two are different words, so false comes up too.");
  ("The wrong programs are: console.log(s === t) (the capitals still count), console.log(x === t) (only one word made small) and console.log(x !== y) (the opposite).");
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = ["God", "god"];
  function inputs_get() {
    "six pairs of words, shuffled";
    let pairs = [
      ["God", "god"],
      ["love", "LOVE"],
      ["Joy", "JOY"],
      ["peace", "Peace"],
      ["Hope", "Faith"],
      ["grace", "Glory"],
    ];
    let shuffled = list_shuffle_take(pairs, 6);
    return shuffled;
  }
  function program_with(pair, logged) {
    let object = list_first(pair);
    let object2 = list_last(pair);
    let lines = [
      "let s = " + json_to(object) + ";",
      "let t = " + json_to(object2) + ";",
      "let x = s.toLowerCase();",
      "let y = t.toLowerCase();",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(pair2) {
    let code2 = program_with(pair2, "x === y");
    return code2;
  }
  function wrong_programs_of(pair3) {
    let v = program_with(pair3, "s === t");
    let v2 = program_with(pair3, "x === t");
    let v3 = program_with(pair3, "x !== y");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(pair4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "every letter small remembered, then two words both made small and compared";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_lower,
      ["", "s.toLowerCase()", " gives back the string with every letter small"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      '"God" === "god"',
      " is false, since a capital is a different letter. Made small first, both are ",
      '"god"',
      ", so they are the same:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Same word, any capitals",
    "x === y",
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
