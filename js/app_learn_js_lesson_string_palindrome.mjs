import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_mirror_index } from "./app_learn_js_lesson_string_mirror_index.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_bold_term } from "./app_learn_js_lesson_bold_term.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_string_palindrome_generic } from "./app_learn_js_lesson_string_palindrome_generic.mjs";
export function app_learn_js_lesson_string_palindrome() {
  arguments_assert(arguments, 0);
  ('whether a word is the same backwards: let w = "level"; let same = true; for (let i = 0; i < w.length; i++) { if (w[i] !== w[w.length - 1 - i]) { same = false; } } console.log(same); writes out true');
  ("2026-11-21, approved by the human: right after the mirror index. Every letter is compared with its mirror; the loop runs over every letter, though half would do, because simple to understand comes first. The lesson after checks only the first half.");
  ("The writing is a first draft by Claude 2026-11-21.");
  function above(root, context) {
    "the mirror and a value set one way remembered, then a palindrome; hands back the box the example goes in";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_mirror_index,
      ["the mirror of index ", "i", " is ", "a.length - 1 - i"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "a value set inside a loop one way, and never set back, says after the loop whether something was ever seen",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("the human's words 2026-11-21");
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we have a word like ",
      '"word"',
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we spell ",
      '"word"',
      " backwards",
    ]);
    app_learn_js_div_cycle_code(box_three, ["Then we have: ", '"drow"']);
    app_learn_js_div_cycle_code(box_three, [
      "",
      '"drow"',
      " and ",
      '"word"',
      " are different",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "But suppose we have ",
      '"noon"',
      " as our word",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we spell ",
      '"noon"',
      " backwards",
    ]);
    app_learn_js_div_cycle_code(box_three, ["Then we still have ", '"noon"']);
    app_learn_js_lesson_bold_term(
      box_three,
      "If we have a word, and we spell it backwards, but it's the same word when spelled backwards, then that word is called a ",
      "palindrome",
    );
    app_learn_js_div_cycle_code(box_three, [
      "Another example of a palindrome is ",
      '"level"',
    ]);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "How do we solve whether or not a word ",
      "w",
      " is a palindrome?",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "We compare each letter ",
      "w[i]",
      " with the letter at its mirror, ",
      "w[w.length - 1 - i]",
      ". If any pair is different, ",
      "same",
      " is set to ",
      "false",
      ", and nothing sets ",
      "same",
      " back to ",
      "true",
      ":",
    ]);
    return box_four;
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Same backwards?",
    "w[w.length - 1 - i]",
  );
  let lesson = app_learn_js_lesson_string_palindrome_generic(
    name_id,
    above,
    "i < w.length",
  );
  return lesson;
}
