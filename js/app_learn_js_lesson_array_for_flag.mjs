import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_if_even } from "./app_learn_js_lesson_array_for_if_even.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_flag() {
  arguments_assert(arguments, 0);
  ("every other item by a value kept across runs: let on = true; for (let i = 0; i < a.length; i++) { if (on) { console.log(a[i]); } on = !on; } writes out the items at indexes 0, 2, 4 - the same items as if (i % 2 === 0), found by flipping a true or false value each run instead of by a remainder");
  ("The one new fact is that a value made before the loop keeps what the last run left in it: on = !on turns true into false and false into true, so the runs take turns.");
  ("The wrong answers are on starting false (the other half), the flip written inside the if (on turns false after the first item and never turns back, so only the first item), and no flip at all (every item).");
  ("Chosen by the human 2026-11-12, as the next lesson after Where is joy?, the first of the lessons keeping a true or false value across runs. The writing is a first draft by Claude 2026-11-12.");
  let items = ["love", "joy", "peace", "patience", "kindness"];
  function above(root, context, example, example_by_hand, walk) {
    "the even if remembered, then the flag made and flipped";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_if_even,
      [
        "inside a ",
        "for",
        ", ",
        "if (i % 2 === 0)",
        " writes out only the items at the even indexes",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "!",
      " turns ",
      "true",
      " into ",
      "false",
      " and ",
      "false",
      " into ",
      "true",
      ", so ",
      "on = !on",
      " flips ",
      "on",
      " each time it runs",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "on",
      " is made before the loop, so each run sees what the run before left in it. It starts ",
      "true",
      ", so the first item is written out, the second is not, and they take turns:",
    ]);
    example(box_three, items);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "These are the same items as ",
      "if (i % 2 === 0)",
      " writes out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every other item, by flipping",
    "on = !on",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5, 6],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        flag_start: true,
        flip: "after",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        flag_start: false,
        flip: "after",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        flag_start: true,
        flip: "inside",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        flag_start: true,
        flip: "none",
      },
    ],
  });
  return lesson;
}
