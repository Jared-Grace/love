import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_any } from "./app_learn_js_lesson_array_any.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_index_generic } from "./app_learn_js_lesson_array_index_generic.mjs";
export function app_learn_js_lesson_array_index_name() {
  arguments_assert(arguments, 0);
  ("the index given a name first: let a = ['love', 'joy', 'peace']; let i = 2; console.log(a[i]); writes out peace");
  ("The one new fact is that the index may be a name holding a number, so a[i] reads the same item as a[2] when i is 2. It is the step before a loop, where i is the name that changes.");
  ("Chosen by the human 2026-11-10, the first of four: a[i], then a[i] with i++ between, then a for loop to 3, then a for loop to a.length. The writing is a first draft by Claude 2026-11-10.");
  function above(root, context, example, walk) {
    "a[3] remembered, then the index written as a name";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_any,
      ["", "a[3]", " is the fourth item, since counting starts at ", "0", "."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "The index does not have to be written as a number. It can be a name that holds a number:",
    ]);
    app_learn_js_div_cycle_code(box_two, ["", "let i = 2;"]);
    app_learn_js_div_cycle_code(box_two, [
      "Then ",
      "a[i]",
      " is the same as ",
      "a[2]",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "An index can be a name",
    "a[i]",
  );
  let lesson = app_learn_js_lesson_array_index_generic({
    name_id,
    above,
    item_count: 3,
    indexes: [0, 1, 2],
    index_name: "i",
    index_steps: 0,
    steps: true,
    example: {
      items: ["love", "joy", "peace"],
      index: 2,
    },
  });
  return lesson;
}
