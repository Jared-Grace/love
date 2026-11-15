import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_object_people_renamed } from "./app_learn_js_object_people_renamed.mjs";
import { list_first } from "./list_first.mjs";
import { app_learn_js_object_code } from "./app_learn_js_object_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_find } from "./list_find.mjs";
import { list_last } from "./list_last.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_property } from "./app_learn_js_lesson_object_property.mjs";
import { app_learn_js_lesson_array_set } from "./app_learn_js_lesson_array_set.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property_set() {
  arguments_assert(arguments, 0);
  ('setting a property: let p = { name: "Abram", town: "Ur" }; p.name = "Abraham"; console.log(p.name); writes out Abraham');
  ("2026-11-15, the second lesson of objects, after Reading a property: p.name = ... sets a property the way a[1] = ... sets an item, which is already taught, so the one new fact is that the dot works on the left of = too.");
  ("Every program is a name God or Jesus changed, so setting the name says something true: Abram to Abraham and Sarai to Sarah, both from Ur (Genesis 11:31, 17:5, 17:15); Simon to Peter, from Bethsaida (John 1:42, 44); Saul to Paul, from Tarsus (Acts 13:9). Not picked: setting the town, which would move a person somewhere they never lived.");
  ("A set is four questions, each person once, two writing out p.name and two writing out p.town, shuffled - the town questions ask for the property the line did not set, so a learner who always answers the new value is wrong half the time.");
  ("Reading forwards, the wrong answers are the old name, the new name, and the town, whichever is not the answer. Reading backwards, the wrong programs are the same program without the setting line, and the same program writing out the other property; each kept only when it writes out something else.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let name = "p";
  let people = app_learn_js_object_people_renamed();
  let example_person = list_first(people);
  function object_code(person) {
    let code = app_learn_js_object_code(person, ["name", "town"]);
    return code;
  }
  function program_with(person, set, key) {
    "the program, with or without the line setting the new name, writing out p.<key>";
    let right = object_code(person);
    let code2 = js_code_let_statement(name, right);
    let lines = [code2];
    if (set) {
      lines.push(name + ".name = " + json_to(person.renamed) + ";");
    }
    let statement = js_code_console_log_statement(name + "." + key);
    lines.push(statement);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(person, key) {
    let code = program_with(person, true, key);
    return code;
  }
  function batch_get() {
    "four programs, each person once, two writing out p.name and two p.town, shuffled";
    let order = people.slice();
    list_shuffle(order);
    let asked = ["name", "name", "town", "town"];
    let codes = [];
    for (let i = 0; less_than(i, list_size(order)); i++) {
      let item = list_get(order, i);
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
    "the person whose old name stands on the program's first line";
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
    "the property the program writes out, read off its last line";
    let list2 = text_split_newline(code);
    let last = list_last(list2);
    let key = text_includes(last, name + ".name") ? "name" : "town";
    return key;
  }
  function decoys(question, answer) {
    "the old name, the new name and the town, each once, never the answer";
    let person = person_of(question);
    let candidates = [person.name, person.renamed, person.town];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "without the setting line, and writing out the other property; kept only when they write out something else";
    let person = person_of(answer);
    let key = key_of(answer);
    let other = equal(key, "name") ? "town" : "name";
    let v2 = program_with(person, false, key);
    let v3 = program_of(person, other);
    let programs = [v2, v3];
    let out_answer = eval_console_log_lines(answer);
    function differs(code) {
      let left = eval_console_log_lines(code);
      let ne = not_equal(left, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "reading a property remembered, setting an item remembered, then setting a property";
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
      app_learn_js_lesson_array_set,
      ["", 'a[1] = "kindness";', " sets an item of an array"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "God changed Abram's name to Abraham. In the same way as ",
      'a[1] = "kindness";',
      ", ",
      'p.name = "Abraham";',
      " sets the property named ",
      "name",
      ":",
    ]);
    let code = program_of(example_person, "name");
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "p.name",
      " was ",
      '"Abram"',
      ", and is now ",
      '"Abraham"',
      ". ",
      "p.town",
      " is still ",
      '"Ur"',
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "Abraham",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Setting a property",
    'p.name = "Abraham";',
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
