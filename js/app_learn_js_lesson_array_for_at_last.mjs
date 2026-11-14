import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_at } from "./app_learn_js_lesson_array_for_at.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_at_last() {
  arguments_assert(arguments, 0);
  ('the same loop as Where is joy, if anywhere?, over arrays holding joy twice: let at = -1; for (let i = 0; i < a.length; i++) { if (a[i] === "joy") { at = i; } } console.log(at); writes out where the LAST joy is, since each joy seen sets at again');
  ("2026-11-14, at the human's asking: finding the last joy is its own lesson, so the next one, the first joy, changes one thing a student has already watched. No new code here - only arrays with joy twice, which show what the loop always did. Questions hold joy twice, twice, once and not at all, so the last joy, the only joy and -1 are all answers.");
  ("The wrong answers are those of Where is joy, if anywhere?: starting at 0, writing out at inside the loop, and keeping the item instead of its index. The writing is a first draft by Claude 2026-11-14.");
  let items_twice = ["joy", "love", "joy", "peace"];
  function above(root, context, example, example_by_hand, walk) {
    "the loop remembered, then why it ends at the last joy, with joy twice";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at,
      [
        "",
        "at",
        " starts ",
        "-1",
        ", and the ",
        "if",
        " sets it to ",
        "i",
        " when ",
        "joy",
        " is seen",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "When ",
      "joy",
      " is there twice, the ",
      "if",
      " sets ",
      "at",
      " twice. The second time replaces the first, so after the loop ",
      "at",
      " is where the last ",
      "joy",
      " is:",
    ]);
    example(box_two, items_twice);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is the last joy?",
    "at = i;",
  );
  let condition = 'a[i] === "joy"';
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [4, 5],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_repeated: "joy",
    repeat_counts: [2, 2, 1, 0],
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "at",
        keep_start: -1,
        keep_set: "at = i;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "at",
        keep_start: 0,
        keep_set: "at = i;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "at",
        keep_start: -1,
        keep_set: "at = i;",
        keep_log: "inside",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "at",
        keep_start: -1,
        keep_set: "at = a[i];",
      },
    ],
  });
  return lesson;
}
