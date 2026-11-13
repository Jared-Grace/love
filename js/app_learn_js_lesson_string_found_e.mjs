import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_lesson_string_index_e } from "./app_learn_js_lesson_string_index_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_string_found_e() {
  arguments_assert(arguments, 0);
  ('whether a letter is in a string at all: let s = "obey"; let found = false; for (let i = 0; i < s.length; i++) { if (s[i] === "e") { found = true; } } console.log(found); writes out true, and false for a word without e');
  ("2026-11-13, at the human's asking: the fourth step of the string lessons, the one just before .includes, which answers this same question in one line. Nothing is new but the pairing: the is-joy-here loop asked of a string's letters");
  ("The words with e are mercy, obey and help, where e is never the last letter, since an else setting found back to false is right exactly when it is, so that mistake would hide. The words without e are joy, kind and good. Every other question takes one of each, so a set always holds true and false. Not picked: love, hope and grace, which end in e");
  ("The wrong answers are the is-joy-here lesson's: writing found out inside the loop, an else setting it back to false, and starting it true. The writing is a first draft by Claude 2026-11-13");
  let letters_with = ["o", "b", "e", "y"];
  let letters_without = ["j", "o", "y"];
  function above(root, context, example, example_by_hand, walk) {
    "finding whether joy is in an array remembered, finding e remembered, then found with e and without it";
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
        ", the ",
        "if",
        " sets it to ",
        "true",
        ", and after the loop it says whether ",
        "joy",
        " is in an array",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_string_index_e,
      [
        "",
        's[i] === "e"',
        " is ",
        "true",
        " only at the index where ",
        "e",
        " is",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "So the same loop says whether a string has an ",
      "e",
      ":",
    ]);
    example(box_three, letters_with);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Without ",
      "e",
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
    example(box_four, letters_without);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Is e here?",
    "found = true;",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    words: ["mercy", "obey", "help"],
    words_without: ["joy", "kind", "good"],
    item_counts: [3],
    bound: "s.length",
    bound_fewer: "s.length - 1",
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 's[i] === "e"',
        keep_name: "found",
        keep_start: false,
        keep_set: "found = true;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 's[i] === "e"',
        keep_name: "found",
        keep_start: false,
        keep_set: "found = true;",
        keep_log: "inside",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 's[i] === "e"',
        keep_name: "found",
        keep_start: false,
        keep_set: "found = true;",
        keep_else: "found = false;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: 's[i] === "e"',
        keep_name: "found",
        keep_start: true,
        keep_set: "found = true;",
      },
    ],
  });
  return lesson;
}
