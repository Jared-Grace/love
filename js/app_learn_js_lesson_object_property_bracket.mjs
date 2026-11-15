import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_object_people } from "./app_learn_js_object_people.mjs";
import { list_first } from "./list_first.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_learn_js_object_code } from "./app_learn_js_object_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_find } from "./list_find.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_property } from "./app_learn_js_lesson_object_property.mjs";
import { app_learn_js_lesson_array_first } from "./app_learn_js_lesson_array_first.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property_bracket() {
  arguments_assert(arguments, 0);
  ('reading a property with brackets: let p = { name: "Mary", town: "Nazareth" }; console.log(p["name"]); writes out Mary');
  ('2026-11-15, the first of the small steps from p.name to counting words with counts[word]++ (human: "goal is easy learning curve"): p["name"] means the same as p.name, and the brackets are the ones a[0] already uses, so the one new fact is that the name goes inside them in quotes. The steps after it: the name kept in a variable, p[k]; setting through brackets; a number property going up, counts["joy"]++; counts[w]++; starting from {}; then counting every word with a loop.');
  ("The same people and the same set as Reading a property: four people, two asking for name and two for town, shuffled.");
  ("Reading forwards, the wrong answers are the other value and the two property names. Reading backwards, the wrong programs are the same object asking for the other property, and another person asking for the same property.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let name = "p";
  let keys = ["name", "town"];
  let people = app_learn_js_object_people();
  let example_person = list_first(people);
  function read_of(key) {
    let read = name + "[" + json_to(key) + "]";
    return read;
  }
  function program_of(person, key) {
    let right = app_learn_js_object_code(person, keys);
    let head = js_code_let_statement(name, right);
    let code2 = read_of(key);
    let line = js_code_console_log_statement(code2);
    let code = list_join_newline([head, line]);
    return code;
  }
  function batch_get() {
    "four programs, four different people, two asking for name and two for town, shuffled";
    let drawn = list_shuffle_take(people, 4);
    let asked = ["name", "name", "town", "town"];
    let codes = [];
    for (let i = 0; less_than(i, list_size(drawn)); i++) {
      let item = list_get(drawn, i);
      let item2 = list_get(asked, i);
      let v = program_of(item, item2);
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
    "the person whose name appears on the program's first line";
    let list = text_split_newline(code);
    let head = list_first(list);
    function named(person) {
      let part = json_to(person.name);
      let found = text_includes(head, part);
      return found;
    }
    let person = list_find(people, named);
    return person;
  }
  function key_of(code) {
    "the property the program asks for, read off its last line";
    let list2 = text_split_newline(code);
    let last = list_get(list2, 1);
    let part2 = read_of("name");
    let key = text_includes(last, part2) ? "name" : "town";
    return key;
  }
  function other_of(key) {
    let other = equal(key, "name") ? "town" : "name";
    return other;
  }
  function decoys(question, answer) {
    "the other value, and the two property names; each once, never the answer";
    let person = person_of(question);
    let key = key_of(question);
    let other = other_of(key);
    let value = property_get(person, other);
    let candidates = [value, key, other];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same object asking for the other property, and another person asking for the same property";
    let person = person_of(answer);
    let key = key_of(answer);
    function someone_else(p) {
      let ne = not_equal(p.name, person.name);
      return ne;
    }
    let list3 = list_filter(people, someone_else);
    let stranger = list_random_item(list3);
    let v2 = other_of(key);
    let v3 = program_of(person, v2);
    let v4 = program_of(stranger, key);
    let programs = [v3, v4];
    return programs;
  }
  function above(root, context) {
    "p.name and a[0] remembered, then p[\"name\"] meaning the same as p.name";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property,
      ["", "p.name", " reads the property named ", "name"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_first,
      ["", "a[0]", " uses square brackets to read the first item of an array"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Square brackets can read a property too. ",
      'p["name"]',
      " means the same as ",
      "p.name",
      ":",
    ]);
    let code = program_of(example_person, "name");
    let lines2 = text_split_newline(code);
    let value2 = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines2, value2);
    app_learn_js_div_cycle_code(box_three, [
      "The property's name goes inside the brackets, in quotes: ",
      '"name"',
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "Mary",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reading a property with brackets",
    'p["name"]',
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
