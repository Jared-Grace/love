import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total_over } from "./app_learn_js_lesson_array_for_total_over.mjs";
import { app_learn_js_lesson_if_even } from "./app_learn_js_lesson_if_even.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_total_even() {
  arguments_assert(arguments, 0);
  ("only the even items of an array added up: let total = 0; for (let i = 0; i < a.length; i++) { if (a[i] % 2 === 0) { total += a[i]; } } console.log(total); writes out the even numbers added together");
  ("The one new fact is that the if of Add only some may ask the question of If even, a[i] % 2 === 0, so only the even items are added. Each array holds at least one even and one odd number, and its odd numbers never add up to what its even numbers do, so the loop with no if, or the one adding the odd numbers, never gives the right answer by luck.");
  ("The wrong answers are no if (every number is added), === 1 in place of === 0 (the odd numbers are added), total += 1; in place of total += a[i]; (the even numbers are counted, not added - never the same, since each is 2 or more), and writing total out inside the loop (one line every run).");
  ("Chosen by the human 2026-11-20, as the next array lesson after Two arrays side by side. The writing is a first draft by Claude 2026-11-20. Not picked: i % 2 === 0, which adds every other item by place, and is the lesson Every other item, with an if, already taught.");
  let items_two = [3, 8, 6];
  function above(root, context, example, example_by_hand, walk) {
    "Add only some remembered, If even remembered, then adding only the even items";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total_over,
      [
        "",
        "if (a[i] > 5)",
        " around ",
        "total += a[i];",
        " adds only the items bigger than ",
        "5",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_if_even,
      ["", "n % 2 === 0", " is ", "true", " when ", "n", " is even"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      "total += a[i];",
      " inside ",
      "if (a[i] % 2 === 0)",
      ", an item is added only when it is even, so after the loop ",
      "total",
      " is only the even numbers added up:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Add only the even numbers",
    "if (a[i] % 2 === 0)",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    even_and_odd: true,
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] % 2 === 0",
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] % 2 === 1",
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] % 2 === 0",
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += 1;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] % 2 === 0",
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
        keep_log: "inside",
      },
    ],
  });
  return lesson;
}
