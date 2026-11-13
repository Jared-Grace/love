import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_count } from "./app_learn_js_lesson_array_for_count.mjs";
import { app_learn_js_lesson_string_includes_e } from "./app_learn_js_lesson_string_includes_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_count_e() {
  arguments_assert(arguments, 0);
  ('how many words of an array hold a letter: let count = 0; for (let i = 0; i < a.length; i++) { if (a[i].includes("e")) { count++; } } console.log(count); writes out how many of the words have an e');
  ("2026-11-13, at the human's asking: the last step of the string lessons, where .includes is used inside the array loop. The one new fact is that the if can ask a question of the item itself, where How many joys? compared the item with a word. The shape is How many joys?'s, so the wrong answers are its own: count starting at 1, count = 1 in place of count++, and writing count out inside the loop.");
  ("The words are a pool of their own, five with e and four without, since all but one of the fruits of the Spirit has an e and nearly every count would be the array's size. Not stepped through: the step tracer cannot step through .includes yet.");
  let example_items = ["love", "joy", "peace", "kind"];
  function above(root, context, example, example_by_hand, walk) {
    "counting joy remembered, .includes remembered, then counting the words with e";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_count,
      [
        "",
        "count",
        " starts ",
        "0",
        " and ",
        "count++;",
        " adds ",
        "1",
        " each time ",
        "joy",
        " is seen",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_string_includes_e,
      ["", 's.includes("e")', " is ", "true", " if ", "s", " has ", '"e"'],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Each ",
      "a[i]",
      " is a word, so ",
      'a[i].includes("e")',
      " asks whether that word has ",
      '"e"',
      ". Then after the loop ",
      "count",
      " is how many words have ",
      '"e"',
      ":",
    ]);
    example(box_three, example_items);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "How many have e?",
    'a[i].includes("e")',
  );
  let condition = 'a[i].includes("e")';
  let lesson = app_learn_js_lesson_array_for_generic({
    name_id,
    above,
    item_counts: [4, 5, 6],
    bound: "a.length",
    bound_fewer: "a.length - 1",
    item_pool: [
      "love",
      "peace",
      "hope",
      "mercy",
      "grace",
      "joy",
      "kind",
      "good",
      "faith",
    ],
    ways: [
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "count",
        keep_start: 0,
        keep_set: "count++;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "count",
        keep_start: 1,
        keep_set: "count++;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "count",
        keep_start: 0,
        keep_set: "count = 1;",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        keep_name: "count",
        keep_start: 0,
        keep_set: "count++;",
        keep_log: "inside",
      },
    ],
  });
  return lesson;
}
