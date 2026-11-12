import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_step_two } from "./app_learn_js_lesson_array_for_step_two.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_step_two_odd() {
  arguments_assert(arguments, 0);
  ("the other half of the items written out by a for loop: for (let i = 1; i < a.length; i += 2) { console.log(a[i]); } reads indexes 1, 3, 5 - the items that i = 0 with i += 2 jumped over");
  ("The new fact is that the start and the step work together: the step decides how far apart the items are, the start decides which of them come first. Nothing else is new, since both starting at 1 and i += 2 were taught.");
  ("The wrong answers are the jumps starting at 0 (the other half), starting at 1 with i++ (every item but the first), and the jumps starting at 2.");
  ("The arrays asked hold 3 to 6 items. Rejected: 2 items, where starting at 1 writes out the same one item whether i goes up by 1 or by 2, so two answers would be right.");
  ("Chosen by the human 2026-11-11, after Every other item. The writing is a first draft by Claude 2026-11-11.");
  let items = ["love", "joy", "peace", "patience", "kindness", "goodness"];
  let items_five = ["love", "joy", "peace", "patience", "kindness"];
  function above(root, context, example, example_by_hand, walk) {
    "i += 2 from 0 remembered, then from 1 over 6 items, then over 5, where it reads one fewer";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_step_two,
      [
        "starting at ",
        "i = 0",
        " with ",
        "i += 2",
        " reads indexes ",
        "0",
        ", ",
        "2",
        " and ",
        "4",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Starting at ",
      "i = 1",
      " instead reads indexes ",
      "1",
      ", ",
      "3",
      " and ",
      "5",
      ", the items that were jumped over:",
    ]);
    example(box_two, items);
    walk(box_two, items);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      "5",
      " items, ",
      "i",
      " is ",
      "1",
      ", then ",
      "3",
      ", then ",
      "5",
      ". ",
      "5 < 5",
      " is ",
      "false",
      ", so only ",
      "2",
      " items are read:",
    ]);
    example(box_three, items_five);
    walk(box_three, items_five);
  }
  ("Titled 2026-11-12 after the human asked for Every other item (odd), so it stands beside Every other item as its partner. The word indexes is added because odd items alone reads as the first, third and fifth, which are the items at the even indexes 0, 2 and 4 - the other half from the one this lesson writes out.");
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every other item (odd indexes)",
    "let i = 1; ... i += 2",
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
        fewer: false,
        step: 2,
      },
      {
        start: 0,
        fewer: false,
        step: 2,
      },
      {
        start: 1,
        fewer: false,
        step: 1,
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
