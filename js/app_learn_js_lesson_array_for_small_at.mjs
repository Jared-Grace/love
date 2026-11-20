import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_smallest } from "./app_learn_js_lesson_array_for_smallest.mjs";
import { app_learn_js_lesson_array_for_at } from "./app_learn_js_lesson_array_for_at.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_small_at() {
  arguments_assert(arguments, 0);
  ("where the smallest item of an array is: let small = 10; let at = 0; for (let i = 0; i < a.length; i++) { if (a[i] < small) { small = a[i]; at = i; } } console.log(at); writes out the index of the smallest number");
  ("Smallest number and Where is it? put together: the if that keeps the smallest number also keeps its index, so the loop remembers two things at once. One loop, no nesting.");
  ("The wrong answers are at = i; after the if rather than inside it (at is set every run, so it ends as the last index), writing out small rather than at (the number, not where it is), no at = i; at all (at stays 0), and > in place of < (nothing is bigger than 10, so at stays 0). The smallest number is never first or last, and never the same as its own index, so none of these gives the right answer by luck.");
  ("Chosen by the human 2026-11-20, as an array lesson after Smallest number. The writing is a first draft by Claude 2026-11-20. Not picked: keeping only at and reading a[at] in the if, which saves a name but asks the learner to read an index inside an index.");
  let items_two = [4, 2, 9];
  function above(root, context, example, example_by_hand, walk) {
    "smallest remembered, at remembered, then both kept together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_smallest,
      ["", "if (a[i] < small) { small = a[i]; }", " keeps the smallest number"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_at,
      [
        "",
        "at = i;",
        " inside the ",
        "if",
        " keeps the index of what was found",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "at",
      " starts as ",
      "0",
      ". Each time ",
      "a[i]",
      " is smaller than ",
      "small",
      ", the ",
      "if",
      " keeps the number with ",
      "small = a[i];",
      " and where it is with ",
      "at = i;",
      ", so after the loop ",
      "at",
      " is the index of the smallest number:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is the smallest?",
    "at = i;",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    smallest_middle: true,
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 10,
        keep_also_name: "at",
        keep_also_start: 0,
        keep_set: ["small = a[i];", "at = i;"],
        keep_log_value: "at",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 10,
        keep_also_name: "at",
        keep_also_start: 0,
        keep_set: ["small = a[i];"],
        keep_after: ["at = i;"],
        keep_log_value: "at",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 10,
        keep_also_name: "at",
        keep_also_start: 0,
        keep_set: ["small = a[i];", "at = i;"],
        keep_log_value: "small",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] < small",
        keep_name: "small",
        keep_start: 10,
        keep_also_name: "at",
        keep_also_start: 0,
        keep_set: ["small = a[i];"],
        keep_log_value: "at",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "a[i] > small",
        keep_name: "small",
        keep_start: 10,
        keep_also_name: "at",
        keep_also_start: 0,
        keep_set: ["small = a[i];", "at = i;"],
        keep_log_value: "at",
      },
    ],
  });
  return lesson;
}
