import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_lesson_statement_name_increment } from "./app_learn_js_lesson_statement_name_increment.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_count() {
  arguments_assert(arguments, 0);
  ('how many times an item is there: let count = 0; for (let i = 0; i < a.length; i++) { if (a[i] === "joy") { count++; } } console.log(count); writes out how many times joy is in the array');
  ("The one new fact is that the value kept across runs can be a number that goes up, where the lesson before kept true or false. The shape is the same as Is joy here?, with count++ for found = true, so the step is small. The arrays hold joy none, one, two or three times, so every count up to three is asked.");
  ("The wrong answers are starting count at 1 (one too many), count = 1 in place of count++ (the habit of the lesson before: 1 for any joy, never more), and writing count out inside the loop (one line every run).");
  ("Chosen by the human 2026-11-13, after Is joy here?. Not picked: resetting count in an else as a wrong answer, which counts only the joys at the end - it is the mistake the lesson before already offered. The writing is a first draft by Claude 2026-11-13.");
  let items_two = ["joy", "love", "joy", "peace"];
  function above(root, context, example, example_by_hand, walk) {
    "found remembered, ++ remembered, then count";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "",
        "found",
        " starts ",
        "false",
        " and the ",
        "if",
        " sets it to ",
        "true",
        " when ",
        "joy",
        " is seen",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_statement_name_increment,
      ["", "++", " adds ", "1", " to a name"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "count",
      " starts ",
      "0",
      ". Each time ",
      "joy",
      " is seen, ",
      "count++;",
      " adds ",
      "1",
      ", so after the loop ",
      "count",
      " is how many times ",
      "joy",
      " is there:",
    ]);
    example(box_three, items_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "How many joys?",
    "count++;",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [4, 5, 6],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_repeated: "joy",
    repeat_counts: [0, 1, 2, 3],
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        keep_name: "count",
        keep_start: 0,
        keep_set: "count++;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        keep_name: "count",
        keep_start: 1,
        keep_set: "count++;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        keep_name: "count",
        keep_start: 0,
        keep_set: "count = 1;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        keep_name: "count",
        keep_start: 0,
        keep_set: "count++;",
        keep_log: "inside",
      },
    ],
  });
  return lesson;
}
