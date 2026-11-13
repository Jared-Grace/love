import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_find } from "./app_learn_js_lesson_array_for_find.mjs";
import { app_learn_js_lesson_string_includes_e } from "./app_learn_js_lesson_string_includes_e.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_array_for_generic } from "./app_learn_js_lesson_array_for_generic.mjs";
export function app_learn_js_lesson_array_for_includes_e() {
  arguments_assert(arguments, 0);
  ('which words of an array hold a letter: for (let i = 0; i < a.length; i++) { if (a[i].includes("e")) { console.log(a[i]); } } writes out each word that has an e');
  ("2026-11-13, at the human's asking: the stepping stone before How many have e?, so .includes meets the array loop with nothing else new - the word itself is written out, as Where is joy? wrote out an index, and counting comes one lesson later. The one new fact is that the if asks a question of the item, where Where is joy? compared the item with a word.");
  ("The wrong answers are writing out the index i instead of the word, no if at all (every word), and the ! of it (the words without e, the other half). The words are How many have e?'s pool, five with e and four without, so nearly every array holds some of each - measured 2026-11-13, 2 questions in 2000 drew no word with e and write out nothing, accepted as rare. The writing is a first draft by Claude 2026-11-13");
  let example_items = ["love", "joy", "peace", "kind"];
  function above(root, context, example, example_by_hand, walk) {
    "an if asking about the item remembered, .includes remembered, then writing out the words with e";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_find,
      [
        "an ",
        "if",
        " inside the loop can ask about the item ",
        "a[i]",
        ", as ",
        'a[i] === "joy"',
        " does",
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
      ". Only the words with ",
      '"e"',
      " are written out:",
    ]);
    example(box_three, example_items);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Which have e?",
    'if (a[i].includes("e"))',
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
        logs: "a[i]",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition,
        logs: "i",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        logs: "a[i]",
      },
      {
        start: 0,
        fewer: false,
        step: 1,
        condition: "!" + condition,
        logs: "a[i]",
      },
    ],
  });
  return lesson;
}
