import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_join_after } from "./app_learn_js_lesson_array_for_join_after.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_join_between() {
  arguments_assert(arguments, 0);
  ('the words of an array joined with a comma only between them: let s = ""; for (let i = 0; i < a.length; i++) { if (i > 0) { s = s + ", "; } s = s + a[i]; } console.log(s); writes out love, joy, peace');
  ("2026-11-22, at the human's asking: after the version that leaves a comma after the last word. The comma now goes before each word but the first, so an if (i > 0) is all it takes. Not picked: if (i < a.length - 1) after the word, which works too but is harder to read.");
  ("A set is six questions, three or four words from the fruits of the Spirit.");
  ("The wrong programs are: no if (a comma at the start), if (i > 1) (no comma after the first word), and the comma added after the word with no if (the previous lesson's comma at the end).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = ["love", "joy", "peace"];
  function program_with(items, inside) {
    "let a = [...]; let s = \"\"; for ... { inside lines } console.log(s);";
    let codes = list_map(items, json_to);
    let head = [
      "let a = " + js_code_array(codes) + ";",
      'let s = "";',
      "for (let i = 0; i < a.length; i++) {",
    ];
    let with_inside = list_concat(head, inside);
    let lines = list_concat(with_inside, ["}", "console.log(s);"]);
    let code = list_join_newline(lines);
    return code;
  }
  function between(asked) {
    "the comma, behind an if asking asked, then the word";
    let lines2 = [
      "  if (" + asked + ") {",
      '    s = s + ", ";',
      "  }",
      "  s = s + a[i];",
    ];
    return lines2;
  }
  function program_of(items2) {
    let v4 = between("i > 0");
    let code2 = program_with(items2, v4);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, ['  s = s + ", ";', "  s = s + a[i];"]);
    let v5 = between("i > 1");
    let v2 = program_with(items3, v5);
    let v3 = program_with(items3, ['  s = s + a[i] + ", ";']);
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
    "the comma after every word remembered, then the comma only between words";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_join_after,
      ["", 's = s + a[i] + ", ";', " left a comma after the last word too"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose we want a comma only between the words",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "So we add the comma before each word instead, except the first",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "The first word is at index ",
      "0",
      ", so ",
      "if (i > 0)",
      " skips the comma for it:",
    ]);
    let code3 = program_of(example_input);
    let lines3 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines3, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Commas between",
    "if (i > 0)",
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
