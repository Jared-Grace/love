import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_smallest } from "./app_learn_js_lesson_array_for_smallest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_start_first() {
  arguments_assert(arguments, 0);
  ("the smallest item of any array: let small = a[0]; for (let i = 1; i < a.length; i++) { if (a[i] < small) { small = a[i]; } } console.log(small); writes out the smallest number, whatever the numbers are");
  ("The one new fact is starting small at the first item, a[0], which is in the array, so it is never smaller than the answer, whatever numbers the array holds. Smallest number started small at 10, which works only while every item is below 10; here the arrays hold numbers 11 to 19, so starting at 10 writes out 10 - the mistake this lesson exists to show. The loop starts at i = 1, since a[0] is already in small; starting at i = 0 would also be right, so it is never offered as a mistake.");
  ("The wrong answers are small starting at 10 (every item is bigger, so small stays 10), small starting at 0 (small stays 0), > in place of < (the biggest is kept), and writing small out inside the loop (one line every run). Not offered: no if around small = a[i];, which keeps the last item - ruling out its lucky match would need the smallest never last, and the builder's way of doing that puts it first, where the loop would never change small at all.");
  ("Chosen by the human 2026-11-20 (start at the first item). Built by a Claude fork 2026-11-20 as a first draft. Not picked: the biggest number started at a[0], equally right, but Smallest number is the lesson just before, so its own loop is the one to change.");
  let items_two = [14, 12, 17];
  function above(root, context, example, example_by_hand, walk) {
    "smallest remembered, then starting at the first item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_smallest,
      ["", "let small = 10;", " works only when every number is below ", "10"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Start ",
      "small",
      " as ",
      "a[0]",
      ", the first item. It is in the array, so this works for any numbers, even ones bigger than ",
      "10",
      ". The loop starts at ",
      "i = 1",
      ", since ",
      "a[0]",
      " is already in ",
      "small",
      ":",
    ]);
    example(box_two, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Start at the first item",
    "let small = a[0];",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [11, 12, 13, 14, 15, 16, 17, 18, 19],
    ways: [
      {
        start: 1,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start_code: "a[0]",
        keep_set: "small = a[i];",
      },
      {
        start: 1,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 10,
        keep_set: "small = a[i];",
      },
      {
        start: 1,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 0,
        keep_set: "small = a[i];",
      },
      {
        start: 1,
        fewer: false,
        step: 1,
        condition: "a[i] > small",
        keep_name: "small",
        keep_start_code: "a[0]",
        keep_set: "small = a[i];",
      },
      {
        start: 1,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start_code: "a[0]",
        keep_set: "small = a[i];",
        keep_log: "inside",
      },
    ],
  });
  return lesson;
}
