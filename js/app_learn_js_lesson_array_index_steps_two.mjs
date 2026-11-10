import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_index_step } from "./app_learn_js_lesson_array_index_step.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_index_generic } from "./app_learn_js_lesson_array_index_generic.mjs";
export function app_learn_js_lesson_array_index_steps_two() {
  arguments_assert(arguments, 0);
  ("the named index stepped up twice, reading every item of an array of three: let a = ['love', 'joy', 'peace']; let i = 0; console.log(a[i]); i++; console.log(a[i]); i++; console.log(a[i]); writes out love then joy then peace");
  ("The one new fact is that stepping again keeps reaching the next item, until the whole array is written out - what the loop of the next lesson does, written out by hand. Always from 0 with three items, so the reads end on the last item.");
  ("Chosen by the human 2026-11-10, between a[i] with one i++ and a for loop to 3. The writing is a first draft by Claude 2026-11-10.");
  function above(root, context, example, walk) {
    "one i++ remembered, then a second one reaching the last item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_step,
      ["after ", "i++", ", the same ", "a[i]", " reads the next item."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Another ",
      "i++",
      " reads the item after that. Here every item of the array is written out, one by one:",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every item, one by one",
    "i++",
  );
  let lesson = app_learn_js_lesson_array_index_generic({
    name_id,
    above,
    item_count: 3,
    indexes: [0],
    index_name: "i",
    index_steps: 2,
    steps: true,
    example: {
      items: ["love", "joy", "peace"],
      index: 0,
    },
  });
  return lesson;
}
