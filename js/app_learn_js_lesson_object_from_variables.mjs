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
import { app_learn_js_lesson_statement_name_value } from "./app_learn_js_lesson_statement_name_value.mjs";
import { app_learn_js_lesson_object_property } from "./app_learn_js_lesson_object_property.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_from_variables() {
  arguments_assert(arguments, 0);
  ('an object built from variables: let n = "Lydia"; let t = "Thyatira"; let p = { name: n, town: t }; console.log(p.town); writes out Thyatira');
  ("2026-11-26, at the human's asking - a step towards pushing objects in a loop: the values in the braces are variables, not quoted text, so p.town holds whatever t holds. The variables are n and t, not name and town, so the property name and the variable cannot be mistaken for each other; { name: name } and then { name } can come after.");
  ("The people are the same people and towns as Reading a property.");
  ("A set is four questions, four different people, two asking p.name and two asking p.town, shuffled.");
  ("Reading forwards, the wrong answers are the other value, the variable's own letter (n or t), and the property name. Reading backwards, the wrong programs quote the letters, swap n and t, or ask for the other property; each is kept only if it writes out something other than the answer.");
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
      "let n = " + json_to(person[0]) + ";",
      "let t = " + json_to(person[1]) + ";",
      "let p = " + object_text + ";",
      "console.log(p." + key + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  let right_object = "{ name: n, town: t }";
  function program_of(person, key) {
    let code = program_with(person, right_object, key);
    return code;
  }
  function batch_get() {
    "four programs, four different people, two asking p.name and two asking p.town, shuffled";
    let drawn = list_shuffle_take(people, 4);
    let asked = ["name", "name", "town", "town"];
    let codes = [];
    for (let i = 0; i < drawn.length; i++) {
      codes.push(program_of(drawn[i], asked[i]));
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
    let found = code.match(/let n = "(\w+)";\nlet t = "(\w+)";/);
    let person = [found[1], found[2]];
    return person;
  }
  function key_of(code) {
    "the property the last line asks for";
    let found = code.match(/console\.log\(p\.(\w+)\);/);
    return found[1];
  }
  function decoys(question, answer) {
    "the other value, the variable's letter, and the property name; never the answer";
    let person = person_of(question);
    let key = key_of(question);
    let is_name = key === "name";
    let other_value = is_name ? person[1] : person[0];
    let letter = is_name ? "n" : "t";
    let candidates = [other_value, letter, key];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "letters quoted, n and t swapped, the other property; kept only when they write out something else";
    let person = person_of(answer);
    let key = key_of(answer);
    let other = key === "name" ? "town" : "name";
    let programs = [
      program_with(person, '{ name: "n", town: "t" }', key),
      program_with(person, "{ name: t, town: n }", key),
      program_with(person, right_object, other),
    ];
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
    "a variable and p.name remembered, then variables in the braces";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_statement_name_value,
      ["", 'let n = "Lydia";', " gives the name ", "n", " to ", '"Lydia"'],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_property,
      ["", "p.name", " reads the property named ", "name"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "A property can take its value from a variable. ",
      "name: n",
      " gives ",
      "name",
      " the value ",
      "n",
      " holds:",
    ]);
    let code3 = program_of(["Lydia", "Thyatira"], "town");
    let lines3 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines3, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "An object from variables",
    "{ name: n, town: t }",
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
