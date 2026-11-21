import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_object_people } from "./app_learn_js_object_people.mjs";
import { list_first } from "./list_first.mjs";
import { app_learn_js_object_code } from "./app_learn_js_object_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_find } from "./list_find.mjs";
import { json_from } from "./json_from.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_property_key } from "./app_learn_js_lesson_object_property_key.mjs";
import { app_learn_js_lesson_array_for } from "./app_learn_js_lesson_array_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property_keys_for() {
  arguments_assert(arguments, 0);
  ('reading every property with a loop: let p = { name: "Mary", town: "Nazareth" }; let keys = ["town", "name"]; for (let i = 0; i < keys.length; i++) { let k = keys[i]; console.log(p[k]); } writes out Nazareth and Mary');
  ("2026-11-16, at the human's asking, whose words were: reading and writing to p.a and p[k] are closer to building blocks - should there be any lessons in there that use those building blocks in some greater context, reusing what was taught already. The first such lesson: nothing in it is new. A for loop over an array is the loop of Every item, and p[k] is the read of A property's name in a variable; the loop hands k each property's name in turn. It is also the first program where p[k] is needed, since no p.something could read a property named by whatever the loop is on.");
  ("A set is four questions, four people, the names array in the object's order twice and the other way round twice, shuffled. k is set from keys[i] on a line of its own, so the read is p[k] exactly as taught.");
  ('Reading forwards, the wrong answers are the property names themselves, the values in the other order, and undefined twice. Reading backwards, the wrong programs write out k instead of p[k], ask for p["k"], which is undefined, and list the names the other way round; each is kept only if it writes out something other than the answer.');
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let object_keys = ["name", "town"];
  let people = app_learn_js_object_people();
  let example_person = list_first(people);
  function program_with(person, keys, read) {
    let right = app_learn_js_object_code(person, object_keys);
    let head = js_code_let_statement("p", right);
    let codes = list_map(keys, json_to);
    let array = js_code_array(codes);
    let keys_line = js_code_let_statement("keys", array);
    let k_line = js_code_let_statement("k", "keys[i]");
    let log_line = js_code_console_log_statement(read);
    let for_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < keys.length",
      [k_line, log_line, "i++;"],
    );
    let lines = list_concat([head, keys_line], for_lines);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(person, keys) {
    let code = program_with(person, keys, "p[k]");
    return code;
  }
  function batch_get() {
    "four programs, four different people, the names in the object's order twice and the other way round twice, shuffled";
    let drawn = list_shuffle_take(people, 4);
    let orders = [object_keys, object_keys, ["town", "name"], ["town", "name"]];
    let codes = [];
    for (let j = 0; less_than(j, list_size(drawn)); j++) {
      let person = list_get(drawn, j);
      let keys = list_get(orders, j);
      let code = program_of(person, keys);
      codes.push(code);
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
      let object = property_get(person, "name");
      let part = json_to(object);
      let found = text_includes(head, part);
      return found;
    }
    let person = list_find(people, named);
    return person;
  }
  function keys_of(code) {
    "the names array, read off the program's second line";
    let list2 = text_split_newline(code);
    let line = list_get(list2, 1);
    let v = line.lastIndexOf(";");
    let after = line.slice(line.indexOf("=") + 1, v);
    let keys = json_from(after);
    return keys;
  }
  function reversed_of(keys) {
    let copy = keys.slice();
    copy.reverse();
    return copy;
  }
  function values_of(person, keys) {
    function value_of(key) {
      let value = property_get(person, key);
      return value;
    }
    let values = list_map(keys, value_of);
    return values;
  }
  function decoys(question, answer) {
    "the property names, the values in the other order, and undefined twice; each once, never the answer";
    let person = person_of(question);
    let keys = keys_of(question);
    let names = list_join_newline(keys);
    let v4 = reversed_of(keys);
    let list3 = values_of(person, v4);
    let other = list_join_newline(list3);
    let missing = list_join_newline(["undefined", "undefined"]);
    let candidates = [names, other, missing];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "k instead of p[k], p[\"k\"], and the names the other way round; kept only when they write out something else";
    let person = person_of(answer);
    let keys = keys_of(answer);
    let v1 = program_with(person, keys, "k");
    let v2 = program_with(person, keys, 'p["k"]');
    let v5 = reversed_of(keys);
    let v3 = program_of(person, v5);
    let programs = [v1, v2, v3];
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
    "p[k] and a for loop over an array remembered, then the loop handing k each property's name";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property_key,
      ["if ", "k", " is ", '"town"', ", then ", "p[k]", " means ", "p.town"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for,
      ["A ", "for", " loop can visit every item of an array"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Put together, a loop over the property names reads every property:",
    ]);
    let code2 = program_of(example_person, ["town", "name"]);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "When ",
      "i",
      " is ",
      "0",
      ", ",
      "k",
      " is ",
      '"town"',
      ", so ",
      "p[k]",
      " is ",
      '"Nazareth"',
      ". When ",
      "i",
      " is ",
      "1",
      ", ",
      "k",
      " is ",
      '"name"',
      ", so ",
      "p[k]",
      " is ",
      '"Mary"',
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "Nazareth",
      ", then ",
      "Mary",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reading every property with a loop",
    "let k = keys[i];",
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
