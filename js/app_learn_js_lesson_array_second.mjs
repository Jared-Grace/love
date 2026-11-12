import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_first } from "./app_learn_js_lesson_array_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_index_generic } from "./app_learn_js_lesson_array_index_generic.mjs";
export function app_learn_js_lesson_array_second() {
  arguments_assert(arguments, 0);
  ("the second item of an array: let a = ['love', 'joy', 'peace']; console.log(a[1]); writes out joy");
  ("The one new fact is that counting from 0 makes a[1] the second item, not the first. Reading a[1] as the first item, or as the number 1, are both wrong answers on every screen.");
  ("The second lesson of arrays, chosen by the human 2026-11-06. The writing is a first draft by Claude 2026-11-06.");
  function above(root, context, example, walk) {
    "a[0] remembered, then a[1] the second item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_first,
      ["", "a[0]", " is the first item of an array."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Someone might think that ",
      "a[2]",
      " would return the second item in the list, because the number ",
      "2",
      ' can be "second". However in JS, we use ',
      "1",
      " (and not ",
      "2",
      ") to refer to the second item in a list:",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The second item of an array",
    "a[1]",
  );
  let lesson = app_learn_js_lesson_array_index_generic({
    name_id,
    above,
    item_count: 3,
    indexes: [1],
    index_name: null,
    index_steps: 0,
    steps: true,
    example: {
      items: ["love", "joy", "peace"],
      index: 1,
    },
  });
  return lesson;
}
