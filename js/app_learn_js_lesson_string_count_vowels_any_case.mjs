import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_count_vowels } from "./app_learn_js_lesson_string_count_vowels.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_string_lower } from "./app_learn_js_lesson_string_lower.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_count_vowels_any_case() {
  arguments_assert(arguments, 0);
  ('how many vowels a string holds, uppercase ones too: let count = 0, then for each index i, let c = s[i]; if ("aeiou".includes(c.toLowerCase())) { count++; }; writes out 5 for "Amen and amen"');
  ("2026-11-24, at the human's asking (should the vowel test lowercase first?): not in Vowel? itself, where every letter is lowercase and the change would alter no answer, but here, straight after Count the vowels, where the miss is shown first: the A of Amen is not counted. Then the one new piece, c.toLowerCase(), already taught.");
  ('Not picked: "aeiouAEIOU".includes(c), which is as right but reuses nothing.');
  ("Every string has at least one uppercase vowel, so the old program always writes out a different, smaller number. The short strings Eat, Oak and Ivy are there for the step-by-step quiz and the guided example, which draw only the questions whose loops run 1, 2 or 3 times.");
  ('The wrong programs are: the Count the vowels program without toLowerCase (misses the uppercase vowels), c.toUpperCase() (never in "aeiou", so 0) and console.log(s.length) (every character).');
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "Amen and amen";
  function inputs_get() {
    "three strings of three letters, then three of six sayings, shuffled together; each starts with an uppercase vowel";
    let shorts = ["Eat", "Oak", "Ivy"];
    let sayings = [
      "Amen and amen",
      "In the beginning was the Word",
      "Our Father in heaven",
      "Abraham believed God",
      "Ask and it will be given",
      "Elijah prayed",
    ];
    let taken = list_shuffle_take(sayings, 3);
    let both = list_concat(shorts, taken);
    list_shuffle(both);
    return both;
  }
  function program_with(saying, condition, logged) {
    let lines = [
      "let s = " + json_to(saying) + ";",
      "let count = 0;",
      "for (let i = 0; i < s.length; i++) {",
      "  let c = s[i];",
      "  if (" + condition + ") {",
      "    count++;",
      "  }",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let old_condition = '"aeiou".includes(c)';
  let right_condition = '"aeiou".includes(c.toLowerCase())';
  function program_of(saying2) {
    let code2 = program_with(saying2, right_condition, "count");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, old_condition, "count");
    let v2 = program_with(
      saying3,
      '"aeiou".includes(c.toUpperCase())',
      "count",
    );
    let v3 = program_with(saying3, right_condition, "s.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "counting the vowels remembered and shown missing an uppercase A, then lowercasing remembered, then the fixed count";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_count_vowels,
      [
        "",
        "if (" + old_condition + ") { count++; }",
        " in a loop counts the vowels in string ",
        "s",
      ],
    );
    app_learn_js_div_cycle_code(box_one, [
      "But ",
      '"aeiou"',
      " has only lowercase vowels, so the uppercase ",
      "A",
      " is not counted:",
    ]);
    let code_old = program_with(example_input, old_condition, "count");
    let lines_old = text_split_newline(code_old);
    let value_old = eval_console_log_lines(code_old);
    app_learn_js_code_lines_writes_out(box_one, lines_old, value_old);
    let box_lower = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_lower,
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
    app_learn_js_div_cycle_code(box_two, [
      "So ask about ",
      "c.toLowerCase()",
      " instead of ",
      "c",
      ", and the uppercase vowels are counted too:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Uppercase vowels too",
    "c.toLowerCase()",
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
