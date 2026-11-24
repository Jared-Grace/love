import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_lower } from "./app_learn_js_lesson_string_lower.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_is_uppercase() {
  arguments_assert(arguments, 0);
  ('whether one character is an uppercase letter: let c = "J"; let low = c.toLowerCase(); console.log(c !== low); writes out true, and false for "j", "!" and a space');
  ("2026-11-24, at the human's asking: one character at a time. Then, asked next, moved before No lowercase?, because one character is simpler than a whole string; so it no longer leans on No lowercase? and says the two lines about symbols itself. The test is the one that turns round: an uppercase letter is one that toLowerCase changes, since c === c.toUpperCase() is true of ! too.");
  ("The characters are letters of the shared Bible sayings, three uppercase and three lowercase, with ! and a space, so the symbol trap comes up.");
  ("The wrong programs are: console.log(c === low) (the opposite), toUpperCase with c === low (true of ! and the space too), and console.log(c.length === low.length) (always true).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "J";
  function inputs_get() {
    "six of eight characters, shuffled";
    let characters = ["J", "G", "R", "w", "l", "e", "!", " "];
    let shuffled = list_shuffle_take(characters, 6);
    return shuffled;
  }
  function program_with(character, method, logged) {
    let lines = [
      "let c = " + json_to(character) + ";",
      "let low = c." + method + "();",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(character2) {
    let code2 = program_with(character2, "toLowerCase", "c !== low");
    return code2;
  }
  function wrong_programs_of(character3) {
    let v = program_with(character3, "toLowerCase", "c === low");
    let v2 = program_with(character3, "toUpperCase", "c === low");
    let v3 = program_with(character3, "toLowerCase", "c.length === low.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(character4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "what toLowerCase does remembered, then which characters it changes";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_lower,
      [
        "",
        "s.toLowerCase()",
        " changes every uppercase letter in ",
        "s",
        " to lowercase",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    ("2026-11-24, the human's wording, made plural and plainer: uppercasing and lowercasing only change letters, and spaces and other symbols stay the same. True of every string these lessons use. Not said: that every letter changes, which Chinese, Arabic and Hebrew letters do not, and the few symbols that do change, circled letters and Roman numerals, never appear here.");
    html_div_text(box_two, "Uppercasing and lowercasing only change letters");
    html_div_text(box_two, "Spaces and other symbols stay the same");
    app_learn_js_div_cycle_code(box_two, [
      "A lowercase letter, or a symbol like ",
      '"!"',
      ", stays the same when it is lowercased",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Only an uppercase letter changes when it is lowercased, so ",
      "c !== low",
      " is true only when ",
      "c",
      " is an uppercase letter:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Uppercase letter?",
    "c !== low",
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
