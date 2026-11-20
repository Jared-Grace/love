import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total } from "./app_learn_js_lesson_array_for_total.mjs";
import { app_learn_js_lesson_expression_greater_than } from "./app_learn_js_lesson_expression_greater_than.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_total_over() {
  arguments_assert(arguments, 0);
  ("only some items of an array added up: let total = 0; for (let i = 0; i < a.length; i++) { if (a[i] > 5) { total += a[i]; } } console.log(total); writes out the numbers bigger than 5 added together");
  ("The one new fact is that the line that adds may stand inside an if, so only some items are added. It joins Add them up with the if of How many joys?, which counted only some items. Each array holds at least one number above 5 and one not above it, so the loop with no if, or with its if turned around, never gives the right answer by luck.");
  ("The wrong answers are no if (every number is added), < in place of > (the numbers below 5 are added), total += 1; in place of total += a[i]; (the numbers over 5 are counted, not added - never the same, since each is 6 or more), and writing total out inside the loop (one line every run).");
  ("Chosen by the human 2026-11-20, as the next array lesson after Average. The writing is a first draft by Claude 2026-11-20. Not picked: >= 5, whose mistake of > shows only when a 5 is drawn; and adding only the even numbers, which asks for % on top of the new idea.");
  let items_two = [3, 8, 6];
  function above(root, context, example, example_by_hand, walk) {
    "total remembered, > remembered, then adding only some";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total,
      ["", "total += a[i];", " adds each item to ", "total"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_expression_greater_than,
      ["", ">", " is ", "true", " when the left is bigger than the right"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      "total += a[i];",
      " inside ",
      "if (a[i] > 5)",
      ", an item is added only when it is bigger than ",
      "5",
      ", so after the loop ",
      "total",
      " is only the numbers bigger than ",
      "5",
      " added up:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Add only some",
    "if (a[i] > 5)",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    split_at: 5,
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] > 5",
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
        condition: "a[i] < 5",
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] > 5",
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += 1;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] > 5",
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
        keep_log: "inside",
      },
    ],
  });
  return lesson;
}
