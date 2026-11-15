import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_object_people } from "./app_learn_js_object_people.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_learn_js_object_code } from "./app_learn_js_object_code.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
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
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_property_bracket } from "./app_learn_js_lesson_object_property_bracket.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property_key() {
  arguments_assert(arguments, 0);
  ('reading a property whose name is kept in a variable: let p = { name: "Mary", town: "Nazareth" }; let k = "town"; console.log(p[k]); writes out Nazareth');
  ('2026-11-15, the second small step from p.name to counts[word]++ (human: "goal is easy learning curve"), after Reading a property with brackets: p[k] with k holding "town" reads the same as p["town"]. This is what counts[word]++ needs, since there the property\'s name is whatever word the loop is on.');
  ("A set is four questions, four people, k holding name twice and town twice, shuffled.");
  ('Reading forwards, the wrong answers are the other value, the text k holds, and the letter k itself. Reading backwards, the wrong programs are k holding the other property\'s name, and p["k"], which asks for a property named k and so writes out undefined - the quotes are the difference this lesson teaches.');
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let name = "p";
  let key_name = "k";
  let keys = ["name", "town"];
  let people = app_learn_js_object_people();
  let example_person = list_first(people);
  function program_with(person, key, read) {
    let right = app_learn_js_object_code(person, keys);
    let code2 = js_code_let_statement(name, right);
    let right2 = json_to(key);
    let code3 = js_code_let_statement(key_name, right2);
    let statement = js_code_console_log_statement(read);
    let code = list_join_newline([code2, code3, statement]);
    return code;
  }
  function program_of(person, key) {
    let code = program_with(person, key, name + "[" + key_name + "]");
    return code;
  }
  function batch_get() {
    "four programs, four different people, k holding name twice and town twice, shuffled";
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
    "the text k holds, read off the program's second line";
    let list2 = text_split_newline(code);
    let line = list_get(list2, 1);
    let part2 = json_to("name");
    let key = text_includes(line, part2) ? "name" : "town";
    return key;
  }
  function other_of(key) {
    let other = equal(key, "name") ? "town" : "name";
    return other;
  }
  function decoys(question, answer) {
    "the other value, the text k holds, and the letter k; each once, never the answer";
    let person = person_of(question);
    let key = key_of(question);
    let property_name = other_of(key);
    let value = property_get(person, property_name);
    let candidates = [value, key, key_name];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "k holding the other property's name, and p[\"k\"]; kept only when they write out something else";
    let person = person_of(answer);
    let key = key_of(answer);
    let v2 = other_of(key);
    let v3 = program_of(person, v2);
    let v4 = program_with(person, key, name + "[" + json_to(key_name) + "]");
    let programs = [v3, v4];
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
    "p[\"town\"] remembered, then p[k] with k holding \"town\"";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property_bracket,
      ["", 'p["town"]', " means the same as ", "p.town"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "The property's name can be kept in a variable. If ",
      "k",
      " is ",
      '"town"',
      ", then ",
      "p[k]",
      " means the same as ",
      'p["town"]',
      ":",
    ]);
    let code = program_of(example_person, "town");
    let lines2 = text_split_newline(code);
    let value2 = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines2, value2);
    app_learn_js_div_cycle_code(box_two, [
      "There are no quotes around ",
      "k",
      ", so it is the variable, and its value ",
      '"town"',
      " is the property's name",
    ]);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "Nazareth",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A property's name in a variable",
    "p[k]",
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
