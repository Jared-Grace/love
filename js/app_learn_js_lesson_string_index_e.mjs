import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_find } from "./app_learn_js_lesson_array_for_find.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_string_index_e() {
  arguments_assert(arguments, 0);
  ('where a letter is in a string: let s = "love"; for (let i = 0; i < s.length; i++) { if (s[i] === "e") { console.log(i); } } writes out 3, the index of "e"');
  ("2026-11-13, at the human's asking: the third step of the string lessons, on the way to .includes. Nothing is new but the pairing: the loop over a string's letters, and the if that finds joy in an array, asked of a letter instead");
  ("The words are mercy, obey, love, hope and grace: each holds e exactly once, as every array of the joy lesson holds joy once, so there is always one index to find, and it falls at 1, 2, 3 or 4. Not picked: peace, which holds e twice, and kindness and goodness, which write out 8 runs for one question");
  ("The wrong answers are the joy lesson's: writing out the letter instead of the index, no if at all, and counting from 1 instead of 0. The writing is a first draft by Claude 2026-11-13");
  let letters = ["l", "o", "v", "e"];
  function above(root, context, example, example_by_hand, walk) {
    "finding joy in an array remembered, then the same if asked of a string's letters";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_find,
      [
        "this ",
        "if",
        " inside a loop writes out the index of ",
        "joy",
        " in an array: ",
        'if (a[i] === "joy")',
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "The same ",
      "if",
      " finds a letter in a string: ",
      's[i] === "e"',
      " is ",
      "true",
      " only at the index where ",
      "e",
      " is. Writing out ",
      "i",
      " there says where ",
      "e",
      " is:",
    ]);
    example(box_two, letters);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "e",
      " is the fourth letter, but indexes start at ",
      "0",
      ", so its index is ",
      "3",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is e?",
    'if (s[i] === "e")',
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    words: ["mercy", "obey", "love", "hope", "grace"],
    item_counts: [3],
    bound: "s.length",
    bound_fewer: "s.length - 1",
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 's[i] === "e"',
        logs: "i",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 's[i] === "e"',
        logs: "s[i]",
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
        condition: 's[i] === "e"',
        logs: "i + 1",
      },
    ],
  });
  return lesson;
}
