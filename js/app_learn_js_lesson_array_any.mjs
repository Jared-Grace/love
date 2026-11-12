import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_second } from "./app_learn_js_lesson_array_second.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_index_generic } from "./app_learn_js_lesson_array_index_generic.mjs";
export function app_learn_js_lesson_array_any() {
  arguments_assert(arguments, 0);
  ("any item of an array of four: let a = ['love', 'joy', 'peace', 'patience']; console.log(a[3]); writes out patience, the fourth");
  ("The one new fact is that the counting from 0 reaches every item the same way, so the last of four is a[3]. Four items rather than three, so the last index is not the count of items.");
  ("The third lesson of arrays, chosen by the human 2026-11-06. The writing is a first draft by Claude 2026-11-06.");
  function above(root, context, example, walk) {
    "a[1] remembered, then the same counting reaching the fourth item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_second,
      ["", "a[1]", " is the second item, since counting starts at ", "0", "."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "In a JS array, the first item is ",
      "a[0]",
      " and the second item is ",
      "a[1]",
    ]);
    app_learn_js_div_cycle_code(box_two, ["This counting continues"]);
    app_learn_js_div_cycle_code(box_two, ["So the third item is ", "a[2]"]);
    app_learn_js_div_cycle_code(box_two, ["And the fourth item is ", "a[3]"]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Any item of an array",
    "a[3]",
  );
  let lesson = app_learn_js_lesson_array_index_generic({
    name_id,
    above,
    item_count: 4,
    indexes: [0, 1, 2, 3],
    index_name: null,
    index_steps: 0,
    steps: true,
    example: {
      items: ["love", "joy", "peace", "patience"],
      index: 3,
    },
  });
  return lesson;
}
