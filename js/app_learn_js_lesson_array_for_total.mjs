import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count } from "./app_learn_js_lesson_array_for_count.mjs";
import { app_learn_js_lesson_statement_name_plus_assign } from "./app_learn_js_lesson_statement_name_plus_assign.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_total() {
  arguments_assert(arguments, 0);
  ("the items of an array added up: let total = 0; for (let i = 0; i < a.length; i++) { total += a[i]; } console.log(total); writes out all the numbers of the array added together");
  ("The one new fact is that the line kept across runs can add the item itself, where the lesson before added 1. The shape is the count lesson's with no if: every run adds, so the step is small. The arrays hold numbers 1 to 9.");
  ("The wrong answers are total = a[i]; in place of total += a[i]; (only the last number is kept), writing total out inside the loop (one line every run, the sum so far), and starting i at 1 (the first number is skipped).");
  ("Chosen by the human 2026-11-13, after How many joys?. Not picked: starting total at 1, which is a number nobody would write, so it teaches nothing. The writing is a first draft by Claude 2026-11-13.");
  ("2026-11-13, at the human's asking: every array lesson before this one holds words, so this, the first to hold numbers, says in a box of its own that an array can hold numbers too. Not picked: a lesson of its own before this one, which would have nothing to practise.");
  let items_two = [2, 5, 3];
  function above(root, context, example, example_by_hand, walk) {
    "count remembered, += remembered, then total";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count,
      ["", "count++;", " adds ", "1", " each time ", "joy", " is seen"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_statement_name_plus_assign,
      ["", "+=", " adds what is on its right to a name"],
    );
    let box_numbers = app_learn_js_container_light_blue(root);
    ("2026-11-13, the human's writing: the array of words remembered first, so the numbers have something to differ from");
    app_learn_js_div_cycle_code(box_numbers, [
      "Remember, arrays can hold strings:",
    ]);
    app_learn_js_div_cycle_code(box_numbers, [
      "",
      'let a = ["love", "joy", "peace"];',
    ]);
    app_learn_js_div_cycle_code(box_numbers, [
      "An array can hold numbers too, not only words: ",
      "let a = [2, 5, 3];",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "total",
      " starts as ",
      "0",
      ". Each run, ",
      "total += a[i];",
      " adds the item to ",
      "total",
      ", so after the loop ",
      "total",
      " is all the numbers added up:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Add them up",
    "total += a[i];",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ways: [
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
        keep_set: "total = a[i];",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
        keep_log: "inside",
      },
      {
        start: 1,
        fewer: false,
        step: 1,
        keep_name: "total",
        keep_start: 0,
        keep_set: "total += a[i];",
      },
    ],
  });
  return lesson;
}
