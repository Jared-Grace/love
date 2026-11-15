import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_object_people_renamed } from "./app_learn_js_object_people_renamed.mjs";
import { list_first } from "./list_first.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_learn_js_object_code } from "./app_learn_js_object_code.mjs";
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
import { equal } from "./equal.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_log } from "./app_learn_js_lesson_array_log.mjs";
import { app_learn_js_lesson_object_property_set } from "./app_learn_js_lesson_object_property_set.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_log() {
  arguments_assert(arguments, 0);
  ('writing out a whole object: let p = { name: "Abram", town: "Ur" }; p.name = "Abraham"; console.log(p); writes out { name: "Abraham", town: "Ur" }');
  ('2026-11-15, the human\'s idea ("what about logging an object for log(counts) not log(counts.joy)?"), after Setting a property: the one new fact is how a whole object looks written out, so every counting lesson after it can end with the whole tally. How it looks is ',
    fn_name("js_value_console_text"),
    "'s choice: the way a learner types the object.");
  ("A set is four questions, four people: two with the line setting the new name and two without, shuffled - so a learner who always picks the changed object is wrong half the time, and the setting line has to be read.");
  ("Reading forwards, the wrong answers are the object before or after the change (whichever is not the answer), the name alone, and the object with its quotes left off. Reading backwards, the wrong programs are the same program with the setting line added or taken away, and writing out p.name; each kept only when it writes out something else.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let name = "p";
  let keys = ["name", "town"];
  let people = app_learn_js_object_people_renamed();
  let example_person = list_first(people);
  function program_with(person, set, read) {
    "the program, with or without the line setting the new name, writing out read";
    let right = app_learn_js_object_code(person, keys);
    let code2 = js_code_let_statement(name, right);
    let lines = [code2];
    if (set) {
      lines.push(name + ".name = " + json_to(person.renamed) + ";");
    }
    let statement = js_code_console_log_statement(read);
    lines.push(statement);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(person, set) {
    let code = program_with(person, set, name);
    return code;
  }
  function batch_get() {
    "four programs, each person once, two setting the new name and two not, shuffled";
    let order = people.slice();
    list_shuffle(order);
    let sets = [true, true, false, false];
    let codes = [];
    for (let i = 0; less_than(i, list_size(order)); i++) {
      let item = list_get(order, i);
      let item2 = list_get(sets, i);
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
  function set_of(code) {
    "whether the program sets the new name: three lines, not two";
    let list2 = text_split_newline(code);
    let left = list_size(list2);
    let s = equal(left, 3);
    return s;
  }
  function decoys(question, answer) {
    "the object before and after, the name alone, and the object without quotes; each once, never the answer";
    let person = person_of(question);
    let set = set_of(question);
    let shown_name = set ? person.renamed : person.name;
    let code3 = program_of(person, true);
    let text = eval_console_log_lines(code3);
    let code4 = program_of(person, false);
    let text2 = eval_console_log_lines(code4);
    let candidates = [
      text,
      text2,
      shown_name,
      "{ name: " + shown_name + ", town: " + person.town + " }",
    ];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the setting line added or taken away, and writing out p.name; kept only when they write out something else";
    let person = person_of(answer);
    let set = set_of(answer);
    let neq = not_equal(set, true);
    let v2 = program_of(person, neq);
    let v3 = program_with(person, set, name + ".name");
    let programs = [v2, v3];
    let out_answer = eval_console_log_lines(answer);
    function differs(code) {
      let left2 = eval_console_log_lines(code);
      let ne = not_equal(left2, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "a whole array written out and setting a property remembered, then a whole object written out";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_log,
      ["", "console.log(a);", " writes out the whole array ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_property_set,
      ["", 'p.name = "Abraham";', " sets the property named ", "name"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "In the same way, ",
      "console.log(p);",
      " writes out the whole object ",
      "p",
      ":",
    ]);
    let plain = program_of(example_person, false);
    let lines2 = text_split_newline(plain);
    let value = eval_console_log_lines(plain);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "It is written the way it was made, so after a property is set, the new value shows:",
    ]);
    let changed = program_of(example_person, true);
    let lines3 = text_split_newline(changed);
    let value2 = eval_console_log_lines(changed);
    app_learn_js_code_lines_writes_out(box_three, lines3, value2);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Writing out a whole object",
    "console.log(p);",
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
