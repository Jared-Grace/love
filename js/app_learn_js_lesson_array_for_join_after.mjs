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
export function app_learn_js_lesson_array_for_join_after() {
  arguments_assert(arguments, 0);
  ('the words of an array joined into one string, a comma after each: let a = ["love", "joy", "peace"]; let s = ""; for (let i = 0; i < a.length; i++) { s = s + a[i] + ", "; } console.log(s); writes out love, joy, peace, - with a comma after the last word too');
  ("2026-11-22, at the human's asking: the simpler version first, the comma left after the last word. The next lesson leaves it out, and the one after that does it with join. Building a string with s = s + ... is taught in Copying a string (447).");
  ("A set is six questions, three or four words from the fruits of the Spirit.");
  ('The wrong programs are: the comma before each word (a comma at the start instead of the end), no comma at all (the words run together), and s = a[i] + ", " without s + (only the last word is kept).');
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(items, inside) {
    "let a = [...]; let s = \"\"; for ... { inside } console.log(s);";
    let codes = list_map(items, json_to);
    let lines = [
      "let a = " + js_code_array(codes) + ";",
      'let s = "";',
      "for (let i = 0; i < a.length; i++) {",
      "  " + inside,
      "}",
      "console.log(s);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, 's = s + a[i] + ", ";');
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, 's = s + ", " + a[i];');
    let v2 = program_with(items3, "s = s + a[i];");
    let v3 = program_with(items3, 's = a[i] + ", ";');
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
    "building a string remembered, then the words of an array joined with a comma after each";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_copy,
      ["", "b = b + a[i];", " in a loop added one letter at a time to ", "b"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose we want the words of an array in one string, with a comma between them",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Each time round, we add the word and then ",
      '", "',
      " to ",
      "s",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "There is a comma after the last word too",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Words with commas",
    's = s + a[i] + ", ";',
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
