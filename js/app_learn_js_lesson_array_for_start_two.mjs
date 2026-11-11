import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_inner } from "./app_learn_js_lesson_array_for_inner.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_start_two() {
  arguments_assert(arguments, 0);
  ("every item from the third on written out by a for loop: for (let i = 2; i < a.length; i++) { console.log(a[i]); }");
  ("The new fact is that where i starts decides whether the loop runs at all: the first thing it does is ask i < a.length, and when an array has only 2 items, 2 < 2 is false at once, so nothing is written out. Only one end moves, the start, so the wrong answers are starts one off - 1 and 3 - and 0, the loop over every item.");
  ("The arrays asked hold 2 to 5 items, each size once in every set of four, so a set always holds a loop that never runs beside loops that do, and is never all of one kind. Rejected: arrays of 2 only, which would teach that the answer is always nothing.");
  ("Chosen by the human 2026-11-11: the value of i decides whether the loop runs. The writing is a first draft by Claude 2026-11-11.");
  let items = ["love", "joy", "peace", "patience"];
  let items_two = ["love", "joy"];
  function above(root, context, example, example_by_hand, walk) {
    "starting at 1 remembered, then starting at 2, then the same loop over 2 items, which never runs";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_inner,
      ["starting at ", "i = 1", " skips index ", "0", ", the first item"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Starting at ",
      "i = 2",
      " skips indexes ",
      "0",
      " and ",
      "1",
      ", the first two items:",
    ]);
    example(box_two, items);
    walk(box_two, items);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "The loop asks ",
      "i < a.length",
      " before it runs even once. With only ",
      "2",
      " items, that is ",
      "2 < 2",
      ", which is ",
      "false",
      ", so the loop never runs:",
    ]);
    example(box_three, items_two);
    walk(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "From the third item on",
    "let i = 2",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [2, 3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    ways: [
      {
        start: 2,
        fewer: false,
      },
      {
        start: 1,
        fewer: false,
      },
      {
        start: 3,
        fewer: false,
      },
      {
        start: 0,
        fewer: false,
      },
    ],
  });
  return lesson;
}
