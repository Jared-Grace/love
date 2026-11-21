import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_same } from "./app_learn_js_lesson_array_for_same.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_same_generic } from "./app_learn_js_lesson_array_for_same_generic.mjs";
export function app_learn_js_lesson_array_for_same_plus_one() {
  arguments_assert(arguments, 0);
  ("whether each item of b is one more than the same item of a: let same = a.length === b.length; for (let i = 0; i < a.length; i++) { if (b[i] !== a[i] + 1) { same = false; } } console.log(same);");
  ("2026-11-21, approved by the human: the second of three lessons comparing two arrays. The loop is the lesson before's; only the test changes, to a[i] + 1, so the student practises the same check with a rule a little harder.");
  ("The writing is a first draft by Claude 2026-11-21.");
  function above(root, context) {
    "the same array remembered, then one more; hands back the box the example goes in";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_same,
      [
        "",
        "let same = a.length === b.length;",
        " then ",
        "b[i] !== a[i]",
        " in the loop asked whether two arrays are the same",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "The same loop can ask whether each item of ",
      "b",
      " is one more than the same item of ",
      "a",
      ". Only the test changes, to ",
      "b[i] !== a[i] + 1",
      ":",
    ]);
    return box_two;
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "One more each?",
    "b[i] !== a[i] + 1",
  );
  function relate(x) {
    let more = x + 1;
    return more;
  }
  let lesson = app_learn_js_lesson_array_for_same_generic(
    name_id,
    above,
    "a[i] + 1",
    relate,
    [
      [3, 1, 4],
      [4, 2, 5],
    ],
  );
  return lesson;
}
