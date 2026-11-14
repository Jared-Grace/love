import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_at_last } from "./app_learn_js_lesson_array_for_at_last.mjs";
import { app_learn_js_lesson_expression_and } from "./app_learn_js_lesson_expression_and.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_at_first() {
  arguments_assert(arguments, 0);
  ('where the FIRST joy is: let at = -1; for (let i = 0; i < a.length; i++) { if (a[i] === "joy" && at === -1) { at = i; } } console.log(at); - at is set only while it is still -1, so only the first joy sets it');
  ("2026-11-14, at the human's asking: the first joy found with the -1 the student already starts at, and && the student already knows, so nothing here is new but how they join. It comes before a.indexOf, which gives the first joy too. Not picked here: break, which stops the loop at the first joy, and is a new idea left for later. Questions hold joy twice, twice, once and not at all.");
  ("The wrong answers are the loop without && at === -1 (the last joy), starting at 0 (at === -1 is then never true, so 0 every time), and keeping the item instead of its index. The writing is a first draft by Claude 2026-11-14.");
  let items_twice = ["joy", "love", "joy", "peace"];
  let items_twice_later = ["love", "joy", "peace", "joy"];
  function above(root, context, example, example_by_hand, walk) {
    "the last joy remembered, && remembered, then the first joy";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at_last,
      [
        "with ",
        "joy",
        " twice, the second ",
        "at = i;",
        " replaces the first, so ",
        "at",
        " ends at the last ",
        "joy",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_expression_and,
      ["", "&&", " is ", "true", " only when both sides are ", "true"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "at",
      " is ",
      "-1",
      " only until the first ",
      "joy",
      " is seen. Adding ",
      "&& at === -1",
      " to the ",
      "if",
      " lets only the first ",
      "joy",
      " set ",
      "at",
      ":",
    ]);
    example(box_three, items_twice);
    example(box_three, items_twice_later);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is the first joy?",
    "&& at === -1",
  );
  let condition_first = 'a[i] === "joy" && at === -1';
  let condition_any = 'a[i] === "joy"';
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
        condition: condition_first,
        keep_name: "at",
        keep_start: -1,
        keep_set: "at = i;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: condition_any,
        keep_name: "at",
        keep_start: -1,
        keep_set: "at = i;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: condition_first,
        keep_name: "at",
        keep_start: 0,
        keep_set: "at = i;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: condition_first,
        keep_name: "at",
        keep_start: -1,
        keep_set: "at = a[i];",
      },
    ],
  });
  return lesson;
}
