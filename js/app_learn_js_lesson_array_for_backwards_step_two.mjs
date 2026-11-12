import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_backwards } from "./app_learn_js_lesson_array_for_backwards.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_backwards_step_two() {
  arguments_assert(arguments, 0);
  ("every other item of an array written out last to first by a for loop: for (let i = a.length - 1; i >= 0; i -= 2) { console.log(a[i]); }");
  ("The new fact is that which items a loop reads going down depends on where it starts: from the last index it always reads the last item, and then the first item only when the count of items is odd. Each part was taught on its own: the loop down from a.length - 1, jumps of 2 over an array, and i -= 2.");
  ("The wrong answers are the loop down by 1 (i--), which reads every item; the same jumps starting at a.length - 2, which reads the other half; and the jumps of 2 running up from 0, which reads the even indexes first to last. Each writes out something different from the right loop at every size from 2 up.");
  ("The arrays asked hold 3 to 6 items, odd sizes beside even ones, since with an odd size the first item is read and with an even size it is skipped.");
  ("Chosen by Claude 2026-11-12, as the next array lesson after Backwards, at the human's asking for one there. The writing is a first draft by Claude 2026-11-12. Not picked: an if inside a loop over an array, finding where an item is, a larger new idea that needs a builder of its own.");
  let items = ["love", "joy", "peace", "patience", "kindness"];
  let items_four = ["love", "joy", "peace", "patience"];
  function above(root, context, example, example_by_hand, walk) {
    "the loop down remembered, then i -= 2 over 5 items, then over 4, where the first item is skipped";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_backwards,
      [
        "this loop reads the items from the last to the first: ",
        "i = a.length - 1; i >= 0; i--",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "i -= 2",
      " takes away ",
      "2",
      " each time instead of ",
      "1",
      ", so the loop reads every other item, at indexes ",
      "4",
      ", ",
      "2",
      " and ",
      "0",
      ":",
    ]);
    example(box_two, items);
    walk(box_two, items);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      "4",
      " items, ",
      "i",
      " is ",
      "3",
      ", then ",
      "1",
      ", then ",
      "-1",
      ". ",
      "-1 >= 0",
      " is ",
      "false",
      ", so the first item, at index ",
      "0",
      ", is never read:",
    ]);
    example(box_three, items_four);
    walk(box_three, items_four);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Backwards, every other item",
    "i -= 2",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5, 6],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    ways: [
      {
        start: null,
        start_back: 1,
        op: ">=",
        end: 0,
        fewer: false,
        step: -2,
      },
      {
        start: null,
        start_back: 1,
        op: ">=",
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
        step: -2,
      },
      {
        start: 0,
        fewer: false,
        step: 2,
      },
    ],
  });
  return lesson;
}
