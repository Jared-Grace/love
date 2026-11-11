import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_length } from "./app_learn_js_lesson_array_for_length.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_inner() {
  arguments_assert(arguments, 0);
  ("every item but the first and the last written out by a for loop: for (let i = 1; i < a.length - 1; i++) { console.log(a[i]); }");
  ("The two changes are each one step from the loop over every item: starting at 1 skips index 0, the first item, and stopping at a.length - 1 skips the last index, the last item. The wrong answers are exactly the loops that make only one of those changes, or neither.");
  ("The arrays asked hold 3 to 6 items, so the loop runs 1 to 4 times. 2 items would make it run 0 times, writing out nothing; that is a new idea, left for its own lesson. Rejected: 5 items only, which the human said it need not be.");
  ("Chosen by the human 2026-11-11: loop over a sub-array, skipping the first and the last. The writing is a first draft by Claude 2026-11-11.");
  let items = ["love", "joy", "peace", "patience", "kindness"];
  function above(root, context, example, example_by_hand, walk) {
    "the loop over every item remembered, then its start and its end each moved in by one";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_length,
      [
        "this loop writes out every item of an array: ",
        "for (let i = 0; i < a.length; i++)",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Starting at ",
      "i = 1",
      " skips index ",
      "0",
      ", the first item. Stopping at ",
      "a.length - 1",
      " skips the last index, the last item:",
    ]);
    example(box_two, items);
    walk(box_two, items);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "All but the first and last",
    "i < a.length - 1",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5, 6],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    ways: [
      {
        start: 1,
        fewer: true,
      },
      {
        start: 0,
        fewer: false,
      },
      {
        start: 1,
        fewer: false,
      },
      {
        start: 0,
        fewer: true,
      },
    ],
  });
  return lesson;
}
