import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for } from "./app_learn_js_lesson_array_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_length() {
  arguments_assert(arguments, 0);
  ("every item of an array of any size written out by a for loop: for (let i = 0; i < a.length; i++) { console.log(a[i]); }");
  ("The one new fact is that the 3 the loop stopped at was the number of items, so writing a.length there makes the same loop write out every item of an array of any size. The arrays asked hold 2, 3 or 4 items, so the loop is seen to fit each one; the example holds 4, so it is not the 3 of the lesson before.");
  ("Chosen by the human 2026-11-10, after the for loop to 3. The writing is a first draft by Claude 2026-11-11.");
  let items = ["love", "joy", "peace", "patience"];
  function above(root, context, example, example_by_hand, walk) {
    "the loop to 3 remembered, then a.length written in place of the 3";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for,
      [
        "this loop writes out every item of an array of ",
        "3",
        " items: ",
        "for (let i = 0; i < 3; i++)",
      ],
    );
    app_learn_js_div_cycle_code(box_one, [
      "The ",
      "3",
      " is the number of items. An array with ",
      "4",
      " items needs ",
      "i < 4",
      " instead",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.length",
      " is always the number of items, so ",
      "i < a.length",
      " fits an array of any size:",
    ]);
    example(box_two, items);
    walk(box_two, items);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every item, of any array",
    "i < a.length",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [2, 3, 4],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    ways: [
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
      {
        start: 1,
        fewer: true,
      },
    ],
  });
  return lesson;
}
