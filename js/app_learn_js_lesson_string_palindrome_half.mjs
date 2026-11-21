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
    ("the human's words 2026-11-21");
    app_learn_js_div_cycle_code(box_two, ["Suppose our word is ", '"level"']);
    app_learn_js_div_cycle_code(box_two, [
      "When we checked to see if our word is a palindrome, we compared index ",
      "0",
      " with index ",
      "4",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "But then later we compared index ",
      "4",
      " with index ",
      "0",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "When we loop from the first to the last letter, each pair is checked twice",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "How can we check each pair once?",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "We can stop the loop at the middle",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Then we check each earlier index with its later mirror pair index",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "For the code, we change ",
      "i < w.length",
      " to ",
      "i < w.length / 2",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "This checks each pair once and gives the same answer:",
    ]);
    return box_three;
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
