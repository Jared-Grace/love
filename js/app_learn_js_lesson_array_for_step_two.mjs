import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_start_two } from "./app_learn_js_lesson_array_for_start_two.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_step_two() {
  arguments_assert(arguments, 0);
  ("every other item written out by a for loop: for (let i = 0; i < a.length; i += 2) { console.log(a[i]); }");
  ("The new fact is that the last part of the loop decides which items are read, not only where it starts: i += 2 jumps over every second index, so the loop reads indexes 0, 2, 4. i += 2 in a for was taught on numbers already; here it picks items of an array.");
  ("The wrong answers are the loop over every item (i++), the same jumps starting at 1 (the other half of the items), and the same jumps starting at 2 (one item fewer at the front).");
  ("The arrays asked hold 3 to 6 items, odd sizes beside even ones, since with an even size the last index is skipped and with an odd size it is read.");
  ("Chosen by the human 2026-11-11, as the every-other-item lesson after starting at 2. The writing is a first draft by Claude 2026-11-11.");
  let items = ["love", "joy", "peace", "patience", "kindness"];
  let items_four = ["love", "joy", "peace", "patience"];
  function above(root, context, example, example_by_hand, walk) {
    "starting at 2 remembered, then i += 2 over 5 items, then over 4, where the last item is skipped";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_start_two,
      ["starting at ", "i = 2", " skips indexes ", "0", " and ", "1"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "i += 2",
      " adds ",
      "2",
      " each time instead of ",
      "1",
      ", so the loop reads every other item, at indexes ",
      "0",
      ", ",
      "2",
      " and ",
      "4",
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
      "0",
      ", then ",
      "2",
      ", then ",
      "4",
      ". ",
      "4 < 4",
      " is ",
      "false",
      ", so the last item, at index ",
      "3",
      ", is never read:",
    ]);
    example(box_three, items_four);
    walk(box_three, items_four);
  }
  ("Titled Every other item (even indexes) 2026-11-12 by the human's choice, to pair with the next lesson, Every other item (odd indexes). It reads indexes 0, 2, 4.");
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every other item (even indexes)",
    "i += 2",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5, 6],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    ways: [
      {
        start: 0,
        fewer: false,
        step: 2,
      },
      {
        start: 0,
        fewer: false,
        step: 1,
      },
      {
        start: 1,
        fewer: false,
        step: 2,
      },
      {
        start: 2,
        fewer: false,
        step: 2,
      },
    ],
  });
  return lesson;
}
