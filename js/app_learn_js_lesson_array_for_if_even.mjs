import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_for_if_even } from "./app_learn_js_lesson_for_if_even.mjs";
import { app_learn_js_lesson_array_for_step_two } from "./app_learn_js_lesson_array_for_step_two.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_if_even() {
  arguments_assert(arguments, 0);
  ("every other item picked out by an if instead of by the step: for (let i = 0; i < a.length; i++) { if (i % 2 === 0) { console.log(a[i]); } } visits every index and writes out only the items at the even ones - the same items as starting at 0 with i += 2");
  ("The one new fact is that the if a for already asked of its counter, n % 2 === 0, can be asked of the index i, while what is written out is the item a[i]. Nothing else is new: the remainder test inside a for and every other item were both taught.");
  ("The wrong answers are the odd remainder (the other half), no if at all (every item), and the same if starting at 1 (every other item but the first).");
  ("The arrays asked hold 3 to 6 items, as in Every other item. Rejected: 2 items, where the even indexes are only 0 and starting at 1 writes out nothing, too little to tell the loops apart.");
  ("Chosen by the human 2026-11-12, after Backwards, every other item, as the first of the lessons with an if inside a loop over an array: the smaller step before an if that asks about the item itself. The writing is a first draft by Claude 2026-11-12.");
  let items = ["love", "joy", "peace", "patience", "kindness", "goodness"];
  function above(root, context, example, example_by_hand, walk) {
    "the remainder if remembered, then every other item remembered, then the two together: the if asked of the index";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_if_even,
      [
        "",
        "n % 2 === 0",
        " is true only when ",
        "n",
        " is even, so a ",
        "for",
        " with that ",
        "if",
        " writes out only the even numbers",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_step_two,
      [
        "starting at ",
        "i = 0",
        " with ",
        "i += 2",
        " reads the items at indexes ",
        "0",
        ", ",
        "2",
        " and ",
        "4",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "The same ",
      "if",
      " can ask about the index ",
      "i",
      ". ",
      "i++",
      " visits every index, and only the items at the even ones are written out:",
    ]);
    example(box_three, items);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "These are the same items ",
      "i += 2",
      " reads. ",
      "i += 2",
      " jumps over the odd indexes; ",
      "i % 2 === 0",
      " visits them, and is ",
      "false",
      " there, so nothing is written out for them",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every other item, with an if",
    "if (i % 2 === 0)",
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
        remainder: 0,
      },
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
      },
      {
        start: 1,
        fewer: false,
        step: 1,
        remainder: 0,
      },
    ],
  });
  return lesson;
}
