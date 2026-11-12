import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_last_index } from "./app_learn_js_lesson_array_last_index.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_backwards() {
  arguments_assert(arguments, 0);
  ("the items of an array written out last to first by a for loop: for (let i = a.length - 1; i >= 0; i--) { console.log(a[i]); }");
  ("The new fact is that a loop over an array can run down as well as up: it starts at the last index, a.length - 1, asks i >= 0 so index 0 is still read, and takes away 1 each time. Each part was taught on its own: the last index, i >= 0, and i-- in a for.");
  ("The wrong answers are the loop running up, which writes the items first to last; asking i > 0, which stops before the first item; and starting at a.length - 2, which skips the last item. Rejected: starting at a.length, the mistake most often made, because its first read is a[a.length], whose answer, undefined, is not taught yet.");
  ("The loop ends with i at -1, so the walk says -1 >= 0 is false. A number below zero was shown before this, by Math.abs(-5); no lesson before this one compares one.");
  ("The arrays asked hold 2 to 5 items. Every wrong loop writes out something different from the right one at every size from 2 up.");
  ("Chosen by the human 2026-11-12, after Every other item (odd indexes). The writing is a first draft by Claude 2026-11-12.");
  let items = ["love", "joy", "peace", "patience"];
  let items_two = ["kindness", "goodness"];
  function above(root, context, example, example_by_hand, walk) {
    "the last index remembered, then the loop down from it over 4 items, then over 2, where i >= 0 is what lets the first item be read";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_last_index,
      ["the last index is ", "a.length - 1"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Starting at ",
      "i = a.length - 1",
      " and taking away ",
      "1",
      " with ",
      "i--",
      " reads the items from the last to the first:",
    ]);
    example(box_two, items);
    walk(box_two, items);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "The loop asks ",
      "i >= 0",
      ", so index ",
      "0",
      ", the first item, is read too:",
    ]);
    example(box_three, items_two);
    walk(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Backwards",
    "i = a.length - 1; i >= 0; i--",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [2, 3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    ways: [
      {
        start: null,
        start_back: 1,
        op: ">=",
        end: 0,
        fewer: false,
        step: -1,
      },
      {
        start: 0,
        fewer: false,
      },
      {
        start: null,
        start_back: 1,
        op: ">",
        end: 0,
        fewer: false,
        step: -1,
      },
      {
        start: null,
        start_back: 2,
        op: ">=",
        end: 0,
        fewer: false,
        step: -1,
      },
    ],
  });
  return lesson;
}
