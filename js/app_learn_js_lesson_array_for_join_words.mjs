import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_copy } from "./app_learn_js_lesson_string_copy.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_join_words() {
  arguments_assert(arguments, 0);
  ('the words of an array added onto one string: let a = ["love", "joy", "peace"]; let s = ""; for (let i = 0; i < a.length; i++) { s = s + a[i]; } console.log(s); writes out lovejoypeace');
  ("2026-11-22, at the human's asking: before the comma lessons. Copying a string (447) added one letter at a time; here each item is a whole word, so the words run together, which is what the next lesson's comma is for.");
  ("A set is six questions, three or four words from the fruits of the Spirit.");
  ("The wrong programs are: s = a[i]; without s + (only the last word is kept), console.log(a) in place of console.log(s) (the array, not the string), and the loop starting at 1 (the first word missed).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(items, start, inside, logged) {
    "let a = [...]; let s = \"\"; for (let i = start; ...) { inside } console.log(logged);";
    let codes = list_map(items, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      'let s = "";',
      "for (let i = " + start + "; i < a.length; i++) {",
      "  " + inside,
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, 0, "s = s + a[i];", "s");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, 0, "s = a[i];", "s");
    let v2 = program_with(items3, 0, "s = s + a[i];", "a");
    let v3 = program_with(items3, 1, "s = s + a[i];", "s");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_sized(size) {
    let list = fruits_of_the_spirit();
    let items5 = list_shuffle_take(list, size);
    return items5;
  }
  function inputs_get() {
    "three or four words, three times each, shuffled";
    let inputs = list_map([3, 3, 3, 4, 4, 4], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "adding letters onto a string remembered, then adding whole words";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_copy,
      ["", "b = b + a[i];", " in a loop added one letter at a time to ", "b"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose ",
      "a",
      " is an array of words instead",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Then ",
      "s = s + a[i];",
      " adds a whole word each time:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, ["The words run together"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Words together",
    "s = s + a[i];",
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
