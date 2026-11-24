import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_alternate_upper_first } from "./app_learn_js_lesson_string_alternate_upper_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_alternate_once() {
  arguments_assert(arguments, 0);
  ('Make it alternate written so out = out + is said once: let letter = ""; if (i % 2 === 0) { letter = c.toUpperCase(); } else { letter = c.toLowerCase(); } out = out + letter; writes out JeSuS for "jesus", as Make it alternate does');
  ("2026-11-24, at the human's asking: the line both branches shared is taken out of them, so each branch only works out the letter and the adding is written once, under the if. Asked next by the human: toLowerCase in the else rather than first, so no letter is worked out twice.");
  ('letter starts as "" rather than with no value, because let with no value is not taught. Not picked: let letter = c.toLowerCase(); with an if and no else, which works out the lowercase letter even when it is thrown away.');
  ("The wrong programs are: out = out + letter inside the if (only the even letters are added), out = out + letter above the if (letter is still empty, so nothing is added) and the two methods swapped (lowercase first).");
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "jesus";
  function inputs_get() {
    "three words of three letters, then three of six longer words, shuffled together";
    let shorts = ["joy", "God", "sin"];
    let words = ["jesus", "MARY", "peter", "amen", "grace", "hallelujah"];
    let taken = list_shuffle_take(words, 3);
    let both = list_concat(shorts, taken);
    list_shuffle(both);
    return both;
  }
  let upper = "letter = c.toUpperCase();";
  let lower = "letter = c.toLowerCase();";
  let add = "out = out + letter;";
  function program_with(word, inside) {
    let top = [
      "let s = " + json_to(word) + ";",
      'let out = "";',
      "for (let i = 0; i < s.length; i++) {",
      "  let c = s[i];",
      '  let letter = "";',
    ];
    let bottom = ["}", "console.log(out);"];
    let a = list_concat(top, inside);
    let lines = list_concat(a, bottom);
    let code = list_join_newline(lines);
    return code;
  }
  function branches(line_even, line_odd) {
    let r = [
      "  if (i % 2 === 0) {",
      "    " + line_even,
      "  } else {",
      "    " + line_odd,
      "  }",
    ];
    return r;
  }
  function program_of(word2) {
    let a2 = branches(upper, lower);
    let inside = list_concat(a2, ["  " + add]);
    let code2 = program_with(word2, inside);
    return code2;
  }
  function wrong_programs_of(word3) {
    let inside_if = [
      "  if (i % 2 === 0) {",
      "    " + upper,
      "    " + add,
      "  } else {",
      "    " + lower,
      "  }",
    ];
    let v = program_with(word3, inside_if);
    let b = branches(upper, lower);
    let above_if = list_concat(["  " + add], b);
    let v2 = program_with(word3, above_if);
    let a3 = branches(lower, upper);
    let swapped = list_concat(a3, ["  " + add]);
    let v3 = program_with(word3, swapped);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r2 = [];
    return r2;
  }
  function above(root, context) {
    "Make it alternate remembered, then the shared line taken out of the branches";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_alternate_upper_first,
      [
        "both branches add a letter with ",
        "out = out + ",
        ": one adds ",
        "c.toUpperCase()",
        ", the other ",
        "c.toLowerCase()",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Instead, each branch can only work out ",
      "letter",
      ", and ",
      "out = out + letter;",
      " under the ",
      "if",
      " adds it, written once. It writes out the same:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Add it once",
    "out = out + letter;",
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
