import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_index_steps_two } from "./app_learn_js_lesson_array_index_steps_two.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for() {
  arguments_assert(arguments, 0);
  ("every item of an array written out by a for loop: let a = ['love', 'joy', 'peace']; for (let i = 0; i < 3; i++) { console.log(a[i]); } writes out love then joy then peace");
  ("The one new fact is that the lines of the lesson before - a[i], i++, a[i] again - are what a for loop writes for us: i starts at 0, the loop runs while i < 3, and i++ steps it. Always three items, so the 3 written in the loop is the count of items; writing a.length there is the next lesson.");
  ("Chosen by the human 2026-11-10, after a[i] stepped up twice by hand. The writing is a first draft by Claude 2026-11-11.");
  function above(root, context, example, example_by_hand, walk) {
    "the stepping by hand remembered, then the same program written as a for loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_steps_two,
      ["this writes out every item, one by one:"],
    );
    example_by_hand(box_one);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A ",
      "for",
      " loop can do the same, with ",
      "console.log(a[i]);",
      " written once:",
    ]);
    example(box_two);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "i",
      " starts at ",
      "0",
      ", the first index, and the loop stops once ",
      "i",
      " reaches ",
      "3",
      ", the number of items",
    ]);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every item, with a for loop",
    "for (let i = 0; i < 3; i++) { ... }",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_count: 3,
    bound: "3",
    bound_fewer: "2",
    example_items: ["love", "joy", "peace"],
  });
  return lesson;
}
