import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_pair } from "./app_learn_js_lesson_array_for_pair.mjs";
import { app_learn_js_lesson_array_for_push_double } from "./app_learn_js_lesson_array_for_push_double.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_pair_generic } from "./app_learn_js_lesson_array_pair_generic.mjs";
export function app_learn_js_lesson_array_for_pair_push() {
  arguments_assert(arguments, 0);
  ("two arrays side by side into a third: let a = [1, 2, 3]; let b = [4, 5, 6]; let c = []; for (let i = 0; i < a.length; i++) { c.push(a[i] + b[i]); } and a for loop writing out each item of c writes out 5, 7 and 9");
  ("Asked for by the human 2026-11-20: pushing in place of console.log, as its own lesson after Two arrays side by side. The one new fact is putting the pair added into a new array, as Doubled into a new array put a[i] * 2 into one; a and b are left as they were. The writing is a first draft by Claude 2026-11-20.");
  function above(root, context, example) {
    "side by side remembered, pushing into a new array remembered, then both together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_pair,
      ["", "a[i] + b[i]", " adds the items in the same place"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_push_double,
      ["", "b.push(a[i] * 2);", " puts each item doubled into a new array"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Push ",
      "a[i] + b[i]",
      " into an empty ",
      "c",
      ", and ",
      "c",
      " holds the pairs added up, while ",
      "a",
      " and ",
      "b",
      " stay as they were:",
    ]);
    example(box_three, [1, 2, 3], [4, 5, 6]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Side by side into a new array",
    "c.push(a[i] + b[i]);",
  );
  let lesson = app_learn_js_lesson_array_pair_generic({
    name_id,
    above,
    pushed: true,
  });
  return lesson;
}
