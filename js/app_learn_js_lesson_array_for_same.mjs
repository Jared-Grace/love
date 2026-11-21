import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_lesson_array_length } from "./app_learn_js_lesson_array_length.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_same_generic } from "./app_learn_js_lesson_array_for_same_generic.mjs";
export function app_learn_js_lesson_array_for_same() {
  arguments_assert(arguments, 0);
  ("whether two arrays are the same: let same = a.length === b.length; for (let i = 0; i < a.length; i++) { if (b[i] !== a[i]) { same = false; } } console.log(same); writes out true only when b is as long as a and holds the same items in the same order");
  ("2026-11-21, approved by the human: the first of three lessons comparing two arrays (the same, one more, double), right after a value the loop only ever sets one way. The one new fact is that same starts as whether the lengths are equal, so a b with an extra item is never called the same.");
  ("The writing is a first draft by Claude 2026-11-21.");
  function above(root, context) {
    "the found value and length remembered, then the comparison; hands back the box the example goes in";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "",
        "found",
        " started ",
        "false",
        ", the ",
        "if",
        " set it one way, and nothing set it back",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_length,
      ["", "a.length", " is how many items ", "a", " holds"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Two arrays are the same when they are the same length and each item is the same. ",
      "same",
      " starts as ",
      "a.length === b.length",
      ", so if the two arrays have different lengths then ",
      "same",
      " is ",
      "false",
      ".",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Then the loop sets ",
      "same",
      " to ",
      "false",
      " when an item differs, and nothing sets it back:",
    ]);
    return box_three;
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The same array?",
    "a.length === b.length",
  );
  function relate(x) {
    return x;
  }
  let lesson = app_learn_js_lesson_array_for_same_generic(
    name_id,
    above,
    "a[i]",
    relate,
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  );
  return lesson;
}
