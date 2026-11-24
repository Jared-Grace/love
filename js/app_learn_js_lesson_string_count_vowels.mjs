import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_vowel } from "./app_learn_js_lesson_string_vowel.mjs";
import { app_learn_js_lesson_string_count_lowercase } from "./app_learn_js_lesson_string_count_lowercase.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_string_count_vowels() {
  arguments_assert(arguments, 0);
  ('how many vowels a string holds: let count = 0, then for each index i, let c = s[i]; if ("aeiou".includes(c)) { count++; }; writes out 3 for "jesus wept"');
  ("2026-11-24, at the human's asking: after Vowel?, the same loop as Count the lowercase letters with the vowel test. One loop, nothing inside another.");
  ('Every string is lowercase, since an uppercase vowel is not in "aeiou" and would not be counted; that is left for a later lesson rather than taught by surprise. The short strings joy, eat and god are there for the step-by-step quiz and the guided example, which draw only the questions whose loops run 1, 2 or 3 times; each holds at least one vowel, so the count visibly moves.');
  ('The wrong programs are: c.includes("aeiou") (the line turned around, never true, so 0), !"aeiou".includes(c) (counts everything else, spaces too) and console.log(s.length) (every character).');
  ("The writing is a first draft by Claude 2026-11-24.");
  let example_input = "jesus wept";
  function inputs_get() {
    "three strings of three letters, then three of six sayings, shuffled together";
    let shorts = ["joy", "eat", "god"];
    let sayings = [
      "jesus wept",
      "love one another",
      "the lord is my shepherd",
      "rejoice in the lord always",
      "pray without ceasing",
      "god is love",
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
  let right_condition = '"aeiou".includes(c)';
  function program_of(saying2) {
    let code2 = program_with(saying2, right_condition, "count");
    return code2;
  }
  function wrong_programs_of(saying3) {
    let v = program_with(saying3, 'c.includes("aeiou")', "count");
    let v2 = program_with(saying3, '!"aeiou".includes(c)', "count");
    let v3 = program_with(saying3, right_condition, "s.length");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(saying4) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the vowel test and counting the lowercase letters remembered, then the vowel test counted over every character";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_vowel,
      ["", right_condition, " is true only when ", "c", " is a vowel"],
    );
    let box_counting = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_counting,
      context,
      app_learn_js_lesson_string_count_lowercase,
      [
        "",
        "if (c !== big) { count++; }",
        " in a loop counts the lowercase letters in string ",
        "s",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "In the same way, ",
      "if (" + right_condition + ") { count++; }",
      " in a loop counts the vowels in string ",
      "s",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Count the vowels",
    "if (" + right_condition + ")",
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
