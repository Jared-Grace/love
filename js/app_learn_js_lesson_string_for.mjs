import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_length } from "./app_learn_js_lesson_array_for_length.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_string_for() {
  arguments_assert(arguments, 0);
  ('every letter of a string written out by a for loop: let s = "joy"; for (let i = 0; i < s.length; i++) { console.log(s[i]); }');
  ("2026-11-13, at the human's asking: the second step of the string lessons, on the way to .includes. The one new fact is that s.length is how many letters a string has, so the loop over every item of an array runs over every letter of a string the same way");
  ("The words are love, joy and peace, the three shortest fruits of the Spirit, so a question writes out 3 to 5 letters. Not picked: every fruit, whose longest, faithfulness, would write out 12 lines for one question");
  ("The wrong answers are the loop's two known mistakes, as in the array lesson: starting at 1, stopping one short, and both");
  let letters = ["j", "o", "y"];
  function above(root, context, example, example_by_hand, walk) {
    "the loop over any array remembered, then the same loop over a string's letters";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_length,
      [
        "this loop writes out every item of an array of any size: ",
        "for (let i = 0; i < a.length; i++)",
      ],
    );
    app_learn_js_div_cycle_code(box_one, [
      "A string is read like an array of its letters, and ",
      "s.length",
      " is how many letters it has. So the same loop writes out every letter of a string:",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    example(box_two, letters);
    walk(box_two, letters);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Every letter of a string",
    "i < s.length",
  );
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    words: ["love", "joy", "peace"],
    item_counts: [3],
    bound: "s.length",
    bound_fewer: "s.length - 1",
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
