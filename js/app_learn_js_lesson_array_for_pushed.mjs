import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_push_last } from "./app_learn_js_lesson_array_push_last.mjs";
import { app_learn_js_lesson_array_for_length } from "./app_learn_js_lesson_array_for_length.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_pushed() {
  arguments_assert(arguments, 0);
  ('every item of an array a push grew, written out by a for loop: let a = ["love", "joy"]; a.push("peace"); for (let i = 0; i < a.length; i++) { console.log(a[i]); } writes out love then joy then peace');
  ("2026-11-13, the human's stepping stone after Where a push adds: two items, a third pushed, then a for loop over all three. The one new fact is that the loop sees the pushed item like any other - a.length already counts it, so i < a.length reaches it.");
  ("The wrong answers are the loops known for going wrong - starting at 1, stopping one short, and both. Stopping one short writes out exactly the items from before the push, so the mistake of forgetting the push is offered too, with no decoy of its own.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let items = ["love", "joy", "peace"];
  function above(root, context, example, example_by_hand, walk) {
    "the push to the end and the loop over any array remembered, then the two together";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_push_last,
      ["", "a.push()", " adds the item at the end of ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_length,
      ["", "i < a.length", " makes a loop write out every item of ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "After a push, ",
      "a.length",
      " counts the pushed item too, so the loop writes it out last:",
    ]);
    example(box_three, items);
    walk(box_three, items);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A loop after a push",
    "a.push()",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    pushed: true,
    ways: [
      {
        start: 0,
        fewer: false,
      },
      {
        start: 1,
        fewer: false,
      },
      {
        start: 0,
        fewer: true,
      },
      {
        start: 1,
        fewer: true,
      },
    ],
  });
  return lesson;
}
