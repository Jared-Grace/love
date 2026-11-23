import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_join } from "./app_learn_js_lesson_array_join.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_join_letters() {
  arguments_assert(arguments, 0);
  ('letters put back together with nothing between them: let a = ["j", "o", "y"]; let s = a.join(""); console.log(s); writes out joy');
  ("2026-11-23, at the human's asking: join with nothing between the quotes, which Join showed only as a wrong answer. Right after Split into letters, it undoes it.");
  ("The letters of one word of three to five letters from the fruits of the Spirit, so the array fits a phone's width.");
  ('The wrong programs are: join(", ") (a comma and space between the letters), join(" ") (a space between them), and console.log(a) (join does not change a).');
  ("The writing is a first draft by Claude 2026-11-23.");
  let example_input = "joy";
  function inputs_get() {
    "six words of three to five letters, shuffled";
    let words = ["joy", "love", "peace", "faith", "joy", "love"];
    let shuffled = list_shuffle_take(words, 6);
    return shuffled;
  }
  function program_with(word, separator, logged) {
    "let a = the letters of word; let s = a.join(separator); console.log(logged);";
    let list = word.split("");
    let codes = list_map(list, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      "let s = a.join(" + json_to(separator) + ");",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(word2, "", "s");
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(word3, ", ", "s");
    let v2 = program_with(word3, " ", "s");
    let v3 = program_with(word3, "", "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "join with a comma and space remembered, then join with nothing between the quotes";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_join,
      [
        "",
        'a.join(", ")',
        " puts a comma and space between the items of ",
        "a",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With nothing between the quotes, ",
      'a.join("")',
      " puts nothing between them, so letters make a word again:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Join with nothing",
    'a.join("")',
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
