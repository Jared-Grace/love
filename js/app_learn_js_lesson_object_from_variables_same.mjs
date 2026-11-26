import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { equal } from "./equal.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_from_variables } from "./app_learn_js_lesson_object_from_variables.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_from_variables_same() {
  arguments_assert(arguments, 0);
  ('a variable with the same name as the property: let name = "Lydia"; let town = "Thyatira"; let p = { name: name, town: town }; console.log(p.town); writes out Thyatira');
  ("2026-11-26, at the human's asking - the step between { name: n, town: t } and the shorthand { name, town }: the word before the colon is the property, the word after it is the variable, and here they are spelled the same. So the only new thing is that the same word can be both.");
  ("The people are the same people and towns as Reading a property.");
  ("A set is four questions, four different people, two asking p.name and two asking p.town, shuffled.");
  ("Reading forwards, the wrong answers are the other value and the property's own name, the answer of reading name: name as writing out the word name. Reading backwards, the wrong programs quote the values, swap name and town after the colons, or ask for the other property; each is kept only if it writes out something other than the answer.");
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
  function program_with(person, object_text, key) {
    let lines = [
      "let name = " + json_to(person[0]) + ";",
      "let town = " + json_to(person[1]) + ";",
      "let p = " + object_text + ";",
      "console.log(p." + key + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let right_object = "{ name: name, town: town }";
  function program_of(person, key) {
    let code = program_with(person, right_object, key);
    return code;
  }
  function batch_get() {
    "four programs, four different people, two asking p.name and two asking p.town, shuffled";
    let drawn = list_shuffle_take(people, 4);
    let asked = ["name", "name", "town", "town"];
    let codes = [];
    for (let i = 0; less_than(i, drawn.length); i++) {
      let v = program_of(drawn[i], asked[i]);
      codes.push(v);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function person_of(code) {
    "the name and town, read off the first two lines";
    let found = code.match(/let name = "(\w+)";\nlet town = "(\w+)";/);
    let person = [found[1], found[2]];
    return person;
  }
  function key_of(code) {
    "the property the last line asks for";
    let found = code.match(/console\.log\(p\.(\w+)\);/);
    let r = found[1];
    return r;
  }
  function decoys(question, answer) {
    "the other value and the property name; never the answer";
    let person = person_of(question);
    let key = key_of(question);
    let other_value = equal(key, "name") ? person[1] : person[0];
    let candidates = [other_value, key];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "values quoted, swapped after the colons, the other property; kept only when they write out something else";
    let person = person_of(answer);
    let key = key_of(answer);
    let other = equal(key, "name") ? "town" : "name";
    let v2 = program_with(person, '{ name: "name", town: "town" }', key);
    let v3 = program_with(person, "{ name: town, town: name }", key);
    let v4 = program_with(person, right_object, other);
    let programs = [v2, v3, v4];
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
    "{ name: n } remembered, then the variable named name";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_from_variables,
      ["", "name: n", " gives ", "name", " the value ", "n", " holds"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "The variable can have the same name as the property. In ",
      "name: name",
      ", the ",
      "name",
      " before the colon is the property, and the ",
      "name",
      " after it is the variable:",
    ]);
    let code2 = program_of(["Lydia", "Thyatira"], "town");
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The same name twice",
    "{ name: name, town: town }",
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
