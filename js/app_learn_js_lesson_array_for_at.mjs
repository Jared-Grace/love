import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_find } from "./app_learn_js_lesson_array_for_find.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_at() {
  arguments_assert(arguments, 0);
  ('where an item is, or -1 when it is not there: let at = -1; for (let i = 0; i < a.length; i++) { if (a[i] === "joy") { at = i; } } console.log(at); writes out the index of joy, or -1 without it');
  ('2026-11-14, at the human\'s asking: the long way of a.indexOf("joy"), so the lesson on it has nothing left unexplained. It joins Where is joy?, which wrote out the index inside the loop, with Is joy here?, which kept a value from before the loop; the one new fact is -1, a start that is no index at all, so it can only still be there when joy never was. Half the arrays asked hold joy, once, and half do not, so -1 and an index are both answers.');
  ("The wrong answers are starting at 0 (joy seems to be at index 0 when it is not there), writing out at inside the loop (one line every run), and keeping the item instead of its index (joy itself). The writing is a first draft by Claude 2026-11-14.");
  let items_with = ["love", "joy", "peace"];
  let items_without = ["love", "peace", "patience"];
  function above(root, context, example, example_by_hand, walk) {
    "the index of joy remembered, a value kept from before the loop remembered, then at with joy and without it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_find,
      [
        "",
        "console.log(i);",
        " inside the ",
        "if",
        " writes out the index where ",
        "joy",
        " is",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "",
        "found",
        " starts ",
        "false",
        " before the loop, and the ",
        "if",
        " sets it to ",
        "true",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "at",
      " starts ",
      "-1",
      ", which is no index. The ",
      "if",
      " sets it to ",
      "i",
      " when ",
      "joy",
      " is seen, so after the loop ",
      "at",
      " is where ",
      "joy",
      " is:",
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
      "at",
      " stays ",
      "-1",
      ":",
    ]);
    example(box_four, items_without);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is joy, if anywhere?",
    "let at = -1;",
  );
  let condition = 'a[i] === "joy"';
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
