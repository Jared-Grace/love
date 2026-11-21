import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_palindrome } from "./app_learn_js_lesson_string_palindrome.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_string_palindrome_generic } from "./app_learn_js_lesson_string_palindrome_generic.mjs";
export function app_learn_js_lesson_string_palindrome_half() {
  arguments_assert(arguments, 0);
  ('a palindrome checked over the first half only: let w = "level"; let same = true; for (let i = 0; i < w.length / 2; i++) { if (w[i] !== w[w.length - 1 - i]) { same = false; } } console.log(same); writes out true');
  ("2026-11-21, approved by the human: right after the palindrome over every letter. The loop over every letter compares each pair twice, once from each end, so stopping at the middle gives the same answer in half the runs. Stopping at the first pair that differs (break) was proposed too and skipped by the human, since it changes nothing a student sees written out.");
  ("The writing is a first draft by Claude 2026-11-21.");
  function above(root, context) {
    "the palindrome remembered, then only the first half; hands back the box the example goes in";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_palindrome,
      [
        "",
        "w[i] !== w[w.length - 1 - i]",
        " compared each letter with its mirror, over every letter",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "In ",
      '"level"',
      ", index ",
      "0",
      " is compared with ",
      "4",
      ", and later index ",
      "4",
      " is compared with ",
      "0",
      ". Over every letter, each pair is checked twice.",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "So the loop can stop at the middle: ",
      "i < w.length / 2",
      " checks each pair once and gives the same answer:",
    ]);
    return box_two;
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Only half",
    "i < w.length / 2",
  );
  let lesson = app_learn_js_lesson_string_palindrome_generic(
    name_id,
    above,
    "i < w.length / 2",
  );
  return lesson;
}
