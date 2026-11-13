import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_find } from "./app_learn_js_lesson_array_for_find.mjs";
import { app_learn_js_lesson_array_for_flag } from "./app_learn_js_lesson_array_for_flag.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_found() {
  arguments_assert(arguments, 0);
  ('whether an item is there at all: let found = false; for (let i = 0; i < a.length; i++) { if (a[i] === "joy") { found = true; } } console.log(found); writes out true when joy is in the array and false when it is not');
  ("The one new fact is a true or false value that the loop only ever sets one way: it starts false, the if sets it to true, and nothing sets it back, so after the loop it says whether the if was ever true. It follows the where-is-joy lesson for the question and the flipping lessons for a value made before the loop. Half the arrays asked hold joy and half do not, so true and false are both answers.");
  ("The wrong answers are writing found out inside the loop (one line every run), an else setting it back to false (true only when joy is the last item), and starting it true (always true).");
  ("Chosen by the human 2026-11-13, after every third item. The writing is a first draft by Claude 2026-11-13.");
  let items_with = ["love", "joy", "peace"];
  let items_without = ["love", "peace", "patience"];
  function above(root, context, example, example_by_hand, walk) {
    "the if asked of the item remembered, a value made before the loop remembered, then found with joy and without it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_find,
      [
        "",
        'a[i] === "joy"',
        " is ",
        "true",
        " only at the index where ",
        "joy",
        " is",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_flag,
      [
        "a value made before the ",
        "for",
        ", as ",
        "let on = true;",
        ", keeps its value from one run to the next",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "found",
      " starts ",
      "false",
      ". The ",
      "if",
      " sets it to ",
      "true",
      " when ",
      "joy",
      " is seen, and nothing sets it back, so after the loop ",
      "found",
      " says whether ",
      "joy",
      " is there:",
    ]);
    example(box_three, items_with);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Without ",
      "joy",
      ", the ",
      "if",
      " is never ",
      "true",
      ", so ",
      "found",
      " stays ",
      "false",
      ":",
    ]);
    example(box_four, items_without);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Is joy here?",
    "found = true;",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_sometimes: "joy",
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        found_start: false,
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        found_start: false,
        found_log: "inside",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        found_start: false,
        found_else: true,
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        found_start: true,
      },
    ],
  });
  return lesson;
}
