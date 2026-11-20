import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_lesson_expression_less_than } from "./app_learn_js_lesson_expression_less_than.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_smallest() {
  arguments_assert(arguments, 0);
  ("the smallest item of an array: let small = 10; for (let i = 0; i < a.length; i++) { if (a[i] < small) { small = a[i]; } } console.log(small); writes out the smallest number of the array");
  ("The mirror of Biggest number: < in place of >, and small starting above every item where big started below every one. The arrays hold numbers 1 to 9, so 10 is above them all; starting at a[0], which works for any numbers, is still left for later.");
  ("The wrong answers are small starting at 0 (0 is below every item, so small stays 0 - the one new thing this lesson has to teach), > in place of < (nothing is bigger than 10, so small stays 10), small = a[i]; with no if around it (only the last number is kept), and writing small out inside the loop (one line every run). The smallest number is never last, or the mistake with no if would give the right answer.");
  ("Chosen by the human 2026-11-20, as the next array lesson after a talk about staying with arrays. The writing is a first draft by Claude 2026-11-20. Not picked: starting small at 9, the biggest item there can be, which is right but asks the learner to see why an item equal to 9 still works.");
  let items_two = [4, 2, 9];
  function above(root, context, example, example_by_hand, walk) {
    "biggest remembered, < remembered, then small";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_biggest,
      ["", "if (a[i] > big) { big = a[i]; }", " keeps the biggest number"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_expression_less_than,
      ["", "<", " is ", "true", " when the left is smaller than the right"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "small",
      " starts as ",
      "10",
      ", which is bigger than every number in the array. Each run, if ",
      "a[i]",
      " is smaller than ",
      "small",
      ", ",
      "small = a[i];",
      " keeps it, so after the loop ",
      "small",
      " is the smallest number in the array:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Smallest number",
    "a[i] < small",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    smallest_not_last: true,
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 10,
        keep_set: "small = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 0,
        keep_set: "small = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] > small",
        keep_name: "small",
        keep_start: 10,
        keep_set: "small = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "small",
        keep_start: 10,
        keep_set: "small = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 10,
        keep_set: "small = a[i];",
        keep_log: "inside",
      },
    ],
  });
  return lesson;
}
