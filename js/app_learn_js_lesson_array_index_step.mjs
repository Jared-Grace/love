import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_index_name } from "./app_learn_js_lesson_array_index_name.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_index_generic } from "./app_learn_js_lesson_array_index_generic.mjs";
export function app_learn_js_lesson_array_index_step() {
  arguments_assert(arguments, 0);
  ("the named index stepped up between two reads: let a = ['love', 'joy', 'peace']; let i = 0; console.log(a[i]); i++; console.log(a[i]); writes out love then joy");
  ("The one new fact is that the same a[i] reads a different item once i has changed. It is what a loop does on its first two turns, written out by hand.");
  ("Chosen by the human 2026-11-10, the second of four: a[i], then a[i] with i++ between, then a for loop to 3, then a for loop to a.length. The writing is a first draft by Claude 2026-11-10.");
  function above(root, context, example, walk) {
    "a[i] remembered, then i stepped up between two reads of it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_name,
      [
        "when ",
        "i",
        " is ",
        "2",
        ", ",
        "a[i]",
        " is the same as ",
        "a[2]",
        ".",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "i++",
      " adds ",
      "1",
      " to ",
      "i",
      ". After that, the same ",
      "a[i]",
      " reads the next item:",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The index can change",
    "i++",
  );
  let lesson = app_learn_js_lesson_array_index_generic({
    name_id,
    above,
    item_count: 4,
    indexes: [0, 1, 2],
    index_name: "i",
    index_steps: 1,
    example: {
      items: ["love", "joy", "peace", "patience"],
      index: 0,
    },
  });
  return lesson;
}
