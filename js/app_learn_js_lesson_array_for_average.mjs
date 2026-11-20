import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total } from "./app_learn_js_lesson_array_for_total.mjs";
import { app_learn_js_lesson_operators_division } from "./app_learn_js_lesson_operators_division.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_average() {
  arguments_assert(arguments, 0);
  ("the average of an array: let total = 0; for (let i = 0; i < a.length; i++) { total += a[i]; } console.log(total / a.length); writes out the numbers added up, divided by how many there are");
  ("The one new fact is that what is written out after the loop may be worked out from the kept name, here total divided by a.length. The loop is Add them up's, unchanged. Each array's numbers add up to a multiple of how many there are, so the average is always a whole number a learner can work out by hand.");
  ("The wrong answers are writing out total with no division (the sum, not the average), writing out total / a.length inside the loop (one line every run), and starting i at 1 (the first number is skipped).");
  ("Chosen by the human 2026-11-20, as the next array lesson after Smallest number. The writing is a first draft by Claude 2026-11-20. Not picked: a name of its own for the average, let avg = total / a.length;, which is one more line to read for no new idea; and dividing by a.length - 1, whose answer is rarely a whole number, so it would give itself away.");
  let items_two = [2, 5, 8];
  function above(root, context, example, example_by_hand, walk) {
    "total remembered, / remembered, then the average";
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
      app_learn_js_lesson_operators_division,
      ["", "/", " divides the left by the right"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "The average is all the numbers added up, divided by how many there are. After the loop, ",
      "total",
      " is all the numbers added up and ",
      "a.length",
      " is how many there are, so ",
      "total / a.length",
      " is the average:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Average",
    "total / a.length",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    average_whole: true,
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
        keep_log_value: "total / a.length",
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
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
        keep_log_value: "total / a.length",
        keep_log: "inside",
      },
      {
        start: 1,
        fewer: false,
        step: 1,
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
        keep_log_value: "total / a.length",
      },
    ],
  });
  return lesson;
}
