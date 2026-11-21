import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_same_plus_one } from "./app_learn_js_lesson_array_for_same_plus_one.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_same_generic } from "./app_learn_js_lesson_array_for_same_generic.mjs";
export function app_learn_js_lesson_array_for_same_double() {
  arguments_assert(arguments, 0);
  ("whether each item of b is double the same item of a: let same = a.length === b.length; for (let i = 0; i < a.length; i++) { if (b[i] !== a[i] * 2) { same = false; } } console.log(same);");
  ("2026-11-21, approved by the human: the third of three lessons comparing two arrays. The loop is the same again; only the test changes, to a[i] * 2.");
  ("The writing is a first draft by Claude 2026-11-21.");
  function above(root, context) {
    "one more remembered, then double; hands back the box the example goes in";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_same_plus_one,
      [
        "",
        "b[i] !== a[i] + 1",
        " asked whether each item of ",
        "b",
        " is one more than the same item of ",
        "a",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "With the test ",
      "b[i] !== a[i] * 2",
      ", the same loop asks whether each item of ",
      "b",
      " is double the same item of ",
      "a",
      ":",
    ]);
    return box_two;
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Double each?",
    "b[i] !== a[i] * 2",
  );
  function relate(x) {
    let doubled = multiply(x, 2);
    return doubled;
  }
  let lesson = app_learn_js_lesson_array_for_same_generic(
    name_id,
    above,
    "a[i] * 2",
    relate,
    [
      [3, 1, 4],
      [6, 2, 8],
    ],
  );
  return lesson;
}
