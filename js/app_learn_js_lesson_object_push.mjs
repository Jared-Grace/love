import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_empty_push } from "./app_learn_js_lesson_array_empty_push.mjs";
import { app_learn_js_lesson_object_list_index } from "./app_learn_js_lesson_object_list_index.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_push() {
  arguments_assert(arguments, 0);
  ('pushing an object: let people = []; people.push({ name: "Lydia", town: "Thyatira" }); people.push({ name: "Paul", town: "Tarsus" }); console.log(people[1].town); writes out Tarsus');
  ("2026-11-26, at the human's asking - the step before Each rise, as objects, which pushes { item, small, rise } in a loop. Both halves are taught: push adds an item to the end, and people[1].first reads a property of one item. The one new thing is that the item pushed can be an object.");
  ("The objects are written out in full rather than with { name, town } from variables: pushing two with the shorthand would need the variables given new values between the pushes, which is a second idea.");
  ("The people are the same people and towns as Reading a property.");
  ("A set is four questions, two people each, asking people[0] or people[1] and name or town, each once, shuffled.");
  ("Reading forwards, the wrong answers are the other person's same property and the same person's other property. Reading backwards, the wrong programs ask for the other index, ask for the other property, or push the two people in the other order; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let people = [
    ["Mary", "Nazareth"],
    ["Paul", "Tarsus"],
    ["Martha", "Bethany"],
    ["Lydia", "Thyatira"],
    ["Zacchaeus", "Jericho"],
    ["Peter", "Capernaum"],
  ];
  function push_line(person) {
    let text =
      "people.push({ name: " +
      json_to(person[0]) +
      ", town: " +
      json_to(person[1]) +
      " });";
    return text;
  }
  function program_of(drawn, index, key) {
    let v = push_line(drawn[0]);
    let v2 = push_line(drawn[1]);
    let lines = [
      "let people = [];",
      v,
      v2,
      "console.log(people[" + index + "]." + key + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs, two people each, every index with every property once, shuffled";
    let asks = [
      [0, "name"],
      [0, "town"],
      [1, "name"],
      [1, "town"],
    ];
    let codes = [];
    for (let i = 0; less_than(i, asks.length); i++) {
      let drawn = list_shuffle_take(people, 2);
      let v3 = program_of(drawn, asks[i][0], asks[i][1]);
      codes.push(v3);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function parts_of(code) {
    "the two people pushed, the index and the property asked for";
    let found = [
      ...code.matchAll(/people\.push\(\{ name: "(\w+)", town: "(\w+)" \}\);/g),
    ];
    let drawn = [
      [found[0][1], found[0][2]],
      [found[1][1], found[1][2]],
    ];
    let asked = code.match(/console\.log\(people\[(\d)\]\.(\w+)\);/);
    let parts = {
      drawn,
      index: Number(asked[1]),
      key: asked[2],
    };
    return parts;
  }
  function decoys(question, answer) {
    "the other person's same property, the same person's other property; never the answer";
    let parts = parts_of(question);
    let k = equal(parts.key, "name") ? 0 : 1;
    let other_person = parts.drawn[subtract(1, parts.index)];
    let same_person = parts.drawn[parts.index];
    let candidates = [other_person[k], same_person[subtract(1, k)]];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the other index, the other property, the pushes swapped; kept only when they write out something else";
    let parts = parts_of(answer);
    let other_key = equal(parts.key, "name") ? "town" : "name";
    let swapped = [parts.drawn[1], parts.drawn[0]];
    let difference = subtract(1, parts.index);
    let v4 = program_of(parts.drawn, difference, parts.key);
    let v5 = program_of(parts.drawn, parts.index, other_key);
    let v6 = program_of(swapped, parts.index, parts.key);
    let programs = [v4, v5, v6];
    let out_answer = eval_console_log_lines(answer);
    function differs(code) {
      let out = eval_console_log_lines(code);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "push remembered, people[1].first remembered, then pushing an object";
    let box_push = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_push,
      context,
      app_learn_js_lesson_array_empty_push,
      ["each ", "push", " adds one item to the end of the array"],
    );
    let box_index = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_index,
      context,
      app_learn_js_lesson_object_list_index,
      ["", "people[1].first", " is the second person's first name"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "The item pushed can be an object. Each ",
      "people.push({ ... })",
      " adds one person to the end:",
    ]);
    let code2 = program_of(
      [
        ["Lydia", "Thyatira"],
        ["Paul", "Tarsus"],
      ],
      1,
      "town",
    );
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Pushing an object",
    "people.push({ ... })",
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
