import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_string_mirror_index } from "./app_learn_js_lesson_string_mirror_index.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_js_definition_term } from "./app_learn_js_definition_term.mjs";
import { app_learn_js_cycle_code } from "./app_learn_js_cycle_code.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_string_palindrome_generic } from "./app_learn_js_lesson_string_palindrome_generic.mjs";
export function app_learn_js_lesson_string_palindrome() {
  arguments_assert(arguments, 0);
  ('whether a word is the same backwards: let a = "level"; let same = true; for (let i = 0; i < a.length; i++) { if (a[i] !== a[a.length - 1 - i]) { same = false; } } console.log(same); writes out true');
  ("2026-11-21, approved by the human: right after the mirror index. Every letter is compared with its mirror; the loop runs over every letter, though half would do, because simple to understand comes first. The lesson after checks only the first half.");
  ("The writing is a first draft by Claude 2026-11-21.");
  function above(root, context) {
    "the mirror and a value set one way remembered, then a palindrome; hands back the box the example goes in";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_string_mirror_index,
      ["The mirror of index ", "i", " is ", "a.length - 1 - i"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "A value set inside a loop one way, and never set back, says after the loop whether something was ever seen",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let line = html_div(box_three);
    html_span_text(line, "A word that is the same backwards is a ");
    app_learn_js_definition_term(line, "palindrome");
    app_learn_js_cycle_code(line, [
      ", as ",
      '"level"',
      " and ",
      '"noon"',
      " are.",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Each letter ",
      "a[i]",
      " is compared with the letter at its mirror, ",
      "a[a.length - 1 - i]",
      ". If any pair differs, ",
      "same",
      " is set to ",
      "false",
      ", and nothing sets it back:",
    ]);
    return box_three;
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Same backwards?",
    "a[a.length - 1 - i]",
  );
  let lesson = app_learn_js_lesson_string_palindrome_generic(
    name_id,
    above,
    "i < a.length",
  );
  return lesson;
}
