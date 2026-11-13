import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_if_even } from "./app_learn_js_lesson_array_for_if_even.mjs";
import { app_learn_js_lesson_expression_remainder_3 } from "./app_learn_js_lesson_expression_remainder_3.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_if_third() {
  arguments_assert(arguments, 0);
  ("every third item, with an if: for (let i = 0; i < a.length; i++) { if (i % 3 === 0) { console.log(a[i]); } } writes out the items at indexes 0, 3, 6");
  ("The one new fact is that the if of the even lesson works for any count, with 2 changed to 3. It follows the two flipping lessons because a true or false value only takes turns between two, so every third item is where a remainder does what flipping cannot.");
  ("The wrong answers are the remainder 1 (indexes 1, 4), the even if (every other item, the habit just built), and no if at all (every item). Arrays hold 4 to 7 items, so a question writes out two items or three.");
  ("Chosen by the human 2026-11-13, asked as what about % 3 printing, after the two flipping lessons. Not picked: three lessons for the remainders 0, 1 and 2, as even and odd had - the other remainders are offered as wrong answers instead. The writing is a first draft by Claude 2026-11-13.");
  let items = [
    "love",
    "joy",
    "peace",
    "patience",
    "kindness",
    "goodness",
    "faithfulness",
  ];
  function above(root, context, example, example_by_hand, walk) {
    "the even if remembered, % 3 remembered, why flipping cannot, then the if with 3";
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
        " writes out every other item",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_expression_remainder_3,
      [
        "",
        "% 3",
        " is the remainder after dividing by ",
        "3",
        ": ",
        "0",
        ", ",
        "1",
        " or ",
        "2",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Flipping ",
      "on",
      " only takes turns between two. For every third item, ",
      "i % 3 === 0",
      " is ",
      "true",
      " at indexes ",
      "0",
      ", ",
      "3",
      ", ",
      "6",
      ", and only those items are written out:",
    ]);
    example(box_three, items);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every third item",
    "if (i % 3 === 0)",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [4, 5, 6, 7],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "i % 3 === 0",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "i % 3 === 1",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "i % 2 === 0",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
      },
    ],
  });
  return lesson;
}
