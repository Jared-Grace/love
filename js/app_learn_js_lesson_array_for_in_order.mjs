import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_next } from "./app_learn_js_lesson_array_for_next.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_in_order() {
  arguments_assert(arguments, 0);
  ("whether an array is in order, smallest first: let sorted = true; for (let i = 0; i < a.length - 1; i++) { if (a[i] > a[i + 1]) { sorted = false; } } console.log(sorted); writes out true for [2, 5, 8] and false for [6, 3, 8]");
  ("The one new fact is comparing each item with the next one, a[i] > a[i + 1], inside the loop that stops one early, so every pair side by side is asked once. The rest is Is joy here? turned around: sorted starts true and the if only ever sets it false. It stands just before Swap if bigger, which asks the same question of each pair and then swaps, so it leads into sorting.");
  ("Half the arrays asked are in order and half are not, so true and false are both answers; an array out of order always ends with its last two items in order, so the else mistake shows.");
  ("The wrong answers are writing sorted out inside the loop (one line every run), an else setting it back to true (only the last pair decides), starting it false (always false), and the comparison turned around, a[i] < a[i + 1] (asks for biggest first).");
  ("Not picked as a wrong answer: running on to i < a.length, which reads a[a.length], undefined, and asking whether a number is bigger than undefined is always false, so it never changes the answer and could never be offered. Not picked as the lesson's shape: stopping at the first pair out of order with break, which is shorter to run but adds a second new fact.");
  ("Chosen by the human 2026-11-20. The writing is a first draft by Claude 2026-11-20.");
  let items_in_order = [2, 5, 8];
  let items_out_of_order = [6, 3, 8];
  function above(root, context, example, example_by_hand, walk) {
    "the next item remembered, a value the if sets one way remembered, then sorted for an array in order and one not";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_next,
      [
        "inside a loop that stops at ",
        "i < a.length - 1",
        ", ",
        "a[i + 1]",
        " is the item after ",
        "a[i]",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "a value the ",
        "if",
        " only ever sets one way, as ",
        "found = true;",
        ", says after the loop whether the ",
        "if",
        " was ever ",
        "true",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "a[i] > a[i + 1]",
      " asks whether an item is bigger than the one after it. ",
      "sorted",
      " starts ",
      "true",
      ", and the ",
      "if",
      " sets it to ",
      "false",
      " at a pair out of order. Here every item is smaller than the next, so ",
      "sorted",
      " stays ",
      "true",
      ":",
    ]);
    example(box_three, items_in_order);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Here ",
      "6 > 3",
      ", so ",
      "sorted",
      " is set to ",
      "false",
      ", and nothing sets it back:",
    ]);
    example(box_four, items_out_of_order);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Are they in order?",
    "a[i] > a[i + 1]",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    in_order_sometimes: true,
    ways: [
      {
        start: 0,
        fewer: true,
        step: 1,
        condition: "a[i] > a[i + 1]",
        keep_name: "sorted",
        keep_start: true,
        keep_set: "sorted = false;",
      },
      {
        start: 0,
        fewer: true,
        step: 1,
        condition: "a[i] > a[i + 1]",
        keep_name: "sorted",
        keep_start: true,
        keep_set: "sorted = false;",
        keep_log: "inside",
      },
      {
        start: 0,
        fewer: true,
        step: 1,
        condition: "a[i] > a[i + 1]",
        keep_name: "sorted",
        keep_start: true,
        keep_set: "sorted = false;",
        keep_else: "sorted = true;",
      },
      {
        start: 0,
        fewer: true,
        step: 1,
        condition: "a[i] > a[i + 1]",
        keep_name: "sorted",
        keep_start: false,
        keep_set: "sorted = false;",
      },
      {
        start: 0,
        fewer: true,
        step: 1,
        condition: "a[i] < a[i + 1]",
        keep_name: "sorted",
        keep_start: true,
        keep_set: "sorted = false;",
      },
    ],
  });
  return lesson;
}
