import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total } from "./app_learn_js_lesson_array_for_total.mjs";
import { app_learn_js_lesson_expression_greater_than } from "./app_learn_js_lesson_expression_greater_than.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_biggest() {
  arguments_assert(arguments, 0);
  ("the biggest item of an array: let big = 0; for (let i = 0; i < a.length; i++) { if (a[i] > big) { big = a[i]; } } console.log(big); writes out the biggest number of the array");
  ("The one new fact is that the if can compare the item with the value kept so far, where the lessons before compared it with a word written out. The arrays hold numbers 1 to 9, so starting big at 0 is below every one of them; starting at a[0], which works for any numbers, is left for later.");
  ("The wrong answers are < in place of > (big stays 0), big = a[i]; with no if around it (only the last number is kept), and writing big out inside the loop (one line every run, the biggest so far). The biggest number is never last, or the mistake with no if would give the right answer.");
  ("Chosen by the human 2026-11-13, after Add them up. Not picked: starting i at 1 as a wrong answer, which is right whenever the first number is not the biggest, so it would hide most of the time. The writing is a first draft by Claude 2026-11-13.");
  let items_two = [4, 9, 2];
  function above(root, context, example, example_by_hand, walk) {
    "total remembered, > remembered, then big";
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
      "",
      "big",
      " starts as ",
      "0",
      ". Each run, if ",
      "a[i]",
      " is bigger than ",
      "big",
      ", ",
      "big = a[i];",
      " keeps it, so after the loop ",
      "big",
      " is the biggest number in the array:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Biggest number",
    "a[i] > big",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    biggest_not_last: true,
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] > big",
        keep_name: "big",
        keep_start: 0,
        keep_set: "big = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] < big",
        keep_name: "big",
        keep_start: 0,
        keep_set: "big = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "big",
        keep_start: 0,
        keep_set: "big = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] > big",
        keep_name: "big",
        keep_start: 0,
        keep_set: "big = a[i];",
        keep_log: "inside",
      },
    ],
  });
  return lesson;
}
