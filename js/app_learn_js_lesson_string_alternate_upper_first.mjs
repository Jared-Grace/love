import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_if_even } from "./app_learn_js_lesson_array_for_if_even.mjs";
import { app_learn_js_lesson_array_for_first_letters } from "./app_learn_js_lesson_array_for_first_letters.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_alternate_upper_first() {
  arguments_assert(arguments, 0);
  ('a word made to alternate, uppercase first: let out = "", then for each index i, let c = s[i]; if (i % 2 === 0) { out = out + c.toUpperCase(); } else { out = out + c.toLowerCase(); }; writes out JeSuS for "jesus"');
  ("2026-11-24, at the human's asking: after Count the lowercase letters, the first of three alternating lessons - this, the same with lowercase first, then whether a word already alternates. The even index check of Every other item, with an if, choosing the case of each letter, added onto a string the way First letters adds. One loop, nothing inside another.");
  ("The short words joy, God and sin are there for the step-by-step quiz and the guided example, which draw only the questions whose loops run 1, 2 or 3 times. MARY is there so toLowerCase visibly changes letters too.");
  ("The wrong programs are: the two methods swapped (lowercase first), toUpperCase in both branches (every letter uppercase) and out = c.toUpperCase() without out + (only the last letter).");
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
  function program_with(word, line_even, line_odd) {
    let lines = [
      "let s = " + json_to(word) + ";",
      'let out = "";',
      "for (let i = 0; i < s.length; i++) {",
      "  let c = s[i];",
      "  if (i % 2 === 0) {",
      "    " + line_even,
      "  } else {",
      "    " + line_odd,
      "  }",
      "}",
      "console.log(out);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(word2) {
    let code2 = program_with(
      word2,
      "out = out + c.toUpperCase();",
      "out = out + c.toLowerCase();",
    );
    return code2;
  }
  function wrong_programs_of(word3) {
    let v = program_with(
      word3,
      "out = out + c.toLowerCase();",
      "out = out + c.toUpperCase();",
    );
    let v2 = program_with(
      word3,
      "out = out + c.toUpperCase();",
      "out = out + c.toUpperCase();",
    );
    let v3 = program_with(
      word3,
      "out = c.toUpperCase();",
      "out = c.toLowerCase();",
    );
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(word4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the even index check and adding onto a string remembered, then the two together, choosing the case of each letter";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_if_even,
      [
        "",
        "i % 2 === 0",
        " is true at the even indexes 0, 2, 4, and false at the odd ones",
      ],
    );
    let box_adding = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_adding,
      context,
      app_learn_js_lesson_array_for_first_letters,
      ["", "first = first + w[0]", " adds onto the end of a string"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With an ",
      "else",
      ", the letters at even indexes are added in uppercase and the others in lowercase, so the letters of ",
      "out",
      " alternate, starting with uppercase:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Make it alternate",
    "out = out + c.toUpperCase()",
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
