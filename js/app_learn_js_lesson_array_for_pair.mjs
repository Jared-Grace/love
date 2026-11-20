import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for } from "./app_learn_js_lesson_array_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_pair_generic } from "./app_learn_js_lesson_array_pair_generic.mjs";
export function app_learn_js_lesson_array_for_pair() {
  arguments_assert(arguments, 0);
  ("two arrays side by side: let a = [1, 2, 3]; let b = [4, 5, 6]; for (let i = 0; i < a.length; i++) { console.log(a[i] + b[i]); } writes out 5, 7 and 9");
  ("Chosen by the human 2026-11-20 (two arrays side by side, item 5 of the array list agreed that day). The one new fact is that one i can read two arrays: a[i] and b[i] are the items in the same place. The two arrays are always the same size, so i < a.length reaches every item of b too. The writing is a first draft by Claude 2026-11-20. Not picked: arrays of different sizes, which is a second new fact.");
  function above(root, context, example) {
    "a loop over an array remembered, then two arrays read with one i";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for,
      ["", "console.log(a[i]);", " in a loop writes out each item of ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "One ",
      "i",
      " can read two arrays. ",
      "a[i]",
      " and ",
      "b[i]",
      " are the items in the same place, so ",
      "a[i] + b[i]",
      " adds them in pairs:",
    ]);
    example(box_two, [1, 2, 3], [4, 5, 6]);
    app_learn_js_div_cycle_output(box_two, [
      "1 + 4",
      ", then ",
      "2 + 5",
      ", then ",
      "3 + 6",
      ", so ",
      "5",
      ", ",
      "7",
      " and ",
      "9",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Two arrays side by side",
    "a[i] + b[i]",
  );
  let lesson = app_learn_js_lesson_array_pair_generic({
    name_id,
    above,
    pushed: false,
  });
  return lesson;
}
