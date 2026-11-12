import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_if_even } from "./app_learn_js_lesson_array_for_if_even.mjs";
import { app_learn_js_lesson_array_for_step_two_odd } from "./app_learn_js_lesson_array_for_step_two_odd.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_if_odd() {
  arguments_assert(arguments, 0);
  ("the odd half of Every other item, with an if: for (let i = 0; i < a.length; i++) { if (i % 2 === 1) { console.log(a[i]); } } visits every index and writes out only the items at the odd ones - the same items as starting at 1 with i += 2");
  ("The one new fact is that a remainder of 1 picks the other half: the if is the even lesson's with 0 changed to 1. It mirrors how Every other item (odd indexes) followed Every other item (even indexes).");
  ("The wrong answers are the even remainder (the other half), no if at all (every item), and the same if starting at 2 (the odd items but the first of them). Rejected: the same if starting at 1, which writes out exactly the right answer, since index 0 is even and would never have been written out anyway.");
  ("Chosen by the human 2026-11-12, right after Every other item, with an if. The writing is a first draft by Claude 2026-11-12.");
  let items = ["love", "joy", "peace", "patience", "kindness", "goodness"];
  function above(root, context, example, example_by_hand, walk) {
    "the even if remembered, then the odd step remembered, then the odd if";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_if_even,
      [
        "inside a ",
        "for",
        ", ",
        "if (i % 2 === 0)",
        " writes out only the items at the even indexes",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_step_two_odd,
      [
        "starting at ",
        "i = 1",
        " with ",
        "i += 2",
        " reads the items at indexes ",
        "1",
        ", ",
        "3",
        " and ",
        "5",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "An odd number divided by ",
      "2",
      " leaves ",
      "1",
      ", so ",
      "i % 2 === 1",
      " is true only at the odd indexes, and only those items are written out:",
    ]);
    example(box_three, items);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "These are the same items as starting at ",
      "i = 1",
      " with ",
      "i += 2",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every other item, with an if (odd indexes)",
    "if (i % 2 === 1)",
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
        step: 1,
        remainder: 1,
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        remainder: 0,
      },
      {
        start: 0,
        fewer: false,
        step: 1,
      },
      {
        start: 2,
        fewer: false,
        step: 1,
        remainder: 1,
      },
    ],
  });
  return lesson;
}
