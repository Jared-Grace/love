import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_index_name } from "./app_learn_js_lesson_array_index_name.mjs";
import { app_learn_js_lesson_array_for_if_even } from "./app_learn_js_lesson_array_for_if_even.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_find() {
  arguments_assert(arguments, 0);
  ('where an item is: for (let i = 0; i < a.length; i++) { if (a[i] === "joy") { console.log(i); } } visits every index and writes out the index of joy');
  ("Two things are new, each small: the if asks about the item a[i] rather than the index i, and what is written out is the index i rather than the item. Every array asked holds joy exactly once, at a place drawn at random, so there is always one index to find.");
  ("The wrong answers are writing out the item instead of the index (joy itself), no if at all (every index), and counting from 1 instead of 0 (i + 1, where a person would say joy is).");
  ("Chosen by the human 2026-11-12, after the two lessons with an if asking about the index, and before the lessons keeping a true or false value across runs. The writing is a first draft by Claude 2026-11-12.");
  let items = ["peace", "love", "joy", "kindness"];
  function above(root, context, example, example_by_hand, walk) {
    "the index and the item remembered, an if inside a for remembered, then the if asked of the item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_name,
      [
        "",
        "i",
        " is an index, a number, and ",
        "a[i]",
        " is the item at that index",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_if_even,
      [
        "an ",
        "if",
        " inside a ",
        "for",
        " decides which runs write something out",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "The ",
      "if",
      " can ask about the item instead: ",
      'a[i] === "joy"',
      " is ",
      "true",
      " only at the index where ",
      "joy",
      " is. Writing out ",
      "i",
      " there says where ",
      "joy",
      " is:",
    ]);
    example(box_three, items);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "joy",
      " is the third item, but indexes start at ",
      "0",
      ", so its index is ",
      "2",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is joy?",
    'if (a[i] === "joy")',
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [3, 4, 5, 6],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_always: "joy",
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        logs: "i",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        logs: "a[i]",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        logs: "i",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 'a[i] === "joy"',
        logs: "i + 1",
      },
    ],
  });
  return lesson;
}
