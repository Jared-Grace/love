import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_flag } from "./app_learn_js_lesson_array_for_flag.mjs";
import { app_learn_js_lesson_array_for_if_odd } from "./app_learn_js_lesson_array_for_if_odd.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_flag_false() {
  arguments_assert(arguments, 0);
  ("the odd half of Every other item, by flipping: let on = false; for (let i = 0; i < a.length; i++) { if (on) { console.log(a[i]); } on = !on; } writes out the items at indexes 1, 3, 5 - the same items as if (i % 2 === 1)");
  ("The one new fact is that where on starts decides which half is written out: the flipping lesson's program with true changed to false. It mirrors how the odd if followed the even if.");
  ("The wrong answers are on starting true (the even half), the flip written inside the if (on starts false, so the if never runs, the flip inside it never runs either, and nothing is written out), and starting true with the flip inside the if (only the first item). Rejected as a separate wrong answer: no flip at all, which starting false also writes nothing for, the same as the flip inside the if, so it would be offered once anyway.");
  ("Chosen by the human 2026-11-12, right after Every other item, by flipping. The writing is a first draft by Claude 2026-11-12.");
  let items = ["love", "joy", "peace", "patience", "kindness", "goodness"];
  function above(root, context, example, example_by_hand, walk) {
    "the flipping lesson remembered, the odd if remembered, then on started false";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_flag,
      [
        "starting ",
        "on",
        " at ",
        "true",
        " and flipping it with ",
        "on = !on",
        " writes out the items at the even indexes",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_if_odd,
      ["", "if (i % 2 === 1)", " writes out only the items at the odd indexes"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Starting ",
      "on",
      " at ",
      "false",
      " instead, the first item is not written out, the second is, and they take turns:",
    ]);
    example(box_three, items);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "These are the same items as ",
      "if (i % 2 === 1)",
      " writes out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every other item, by flipping (odd indexes)",
    "let on = false;",
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
        flag_start: false,
        flip: "after",
      },
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
        flip: "inside",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        flag_start: true,
        flip: "inside",
      },
    ],
  });
  return lesson;
}
