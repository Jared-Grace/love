import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { json_to } from "./json_to.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
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
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_length } from "./app_learn_js_lesson_array_length.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { app_learn_js_cycle_code } from "./app_learn_js_cycle_code.mjs";
import { app_learn_js_definition_term } from "./app_learn_js_definition_term.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_property() {
  arguments_assert(arguments, 0);
  ('reading a property of an object: let p = { name: "Mary", town: "Nazareth" }; console.log(p.name); writes out Mary');
  ("2026-11-15, the first lesson of objects, the next group in the CS 1 plan after the easy array lessons. p.name reads like a.length, which is already taught, so the one new fact is the curly braces: they hold values, each with a name in front of it, and the dot after the object reads the value with that name.");
  ("Every object is a person and the town they lived in, and each person keeps their own town, so no program says something false: Mary of Nazareth, Paul of Tarsus, Martha of Bethany, Lydia of Thyatira, Zacchaeus of Jericho, Peter of Capernaum (Mark 1:21, 29).");
  ("A set is four questions, two asking p.name and two asking p.town, four different people, shuffled, so that a learner who always picks the first value is wrong half the time.");
  ("Reading forwards, the wrong answers are the other value, and the two property names themselves, the answer of reading p.name as writing out the word name. Reading backwards, the wrong programs are the same object asking for the other property, and another person asking for the same property.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let name = "p";
  let keys = ["name", "town"];
  let people = [
    {
      name: "Mary",
      town: "Nazareth",
    },
    {
      name: "Paul",
      town: "Tarsus",
    },
    {
      name: "Martha",
      town: "Bethany",
    },
    {
      name: "Lydia",
      town: "Thyatira",
    },
    {
      name: "Zacchaeus",
      town: "Jericho",
    },
    {
      name: "Peter",
      town: "Capernaum",
    },
  ];
  let example_person = list_first(people);
  let example_key = "name";
  function object_code(person) {
    "the object written the way a person writes one, each property name bare: { name: \"Mary\", town: \"Nazareth\" }";
    function written(key) {
      let value = person[key];
      let line = key + ": " + json_to(value);
      return line;
    }
    let parts = list_map(keys, written);
    let code = "{ " + parts.join(", ") + " }";
    return code;
  }
  function program_of(person, key) {
    let right = object_code(person);
    let head = js_code_let_statement(name, right);
    let read = name + "." + key;
    let line2 = js_code_console_log_statement(read);
    let code = list_join_newline([head, line2]);
    return code;
  }
  function batch_get() {
    "four programs, four different people, two asking p.name and two asking p.town, shuffled";
    let drawn = list_shuffle_take(people, 4);
    let asked = ["name", "name", "town", "town"];
    let codes = [];
    for (let i = 0; less_than(i, list_size(drawn)); i++) {
      let item = list_get(drawn, i);
      let item2 = list_get(asked, i);
      let code = program_of(item, item2);
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
      let part = json_to(person.name);
      let found = text_includes(head, part);
      return found;
    }
    let person = list_find(people, named);
    return person;
  }
  function key_of(code) {
    "the property the program asks for, read off its last line";
    let lines = text_split_newline(code);
    let last = list_get(lines, 1);
    let asks_name = text_includes(last, name + ".name");
    let key = asks_name ? "name" : "town";
    return key;
  }
  function decoys(question, answer) {
    "the other value, and the two property names; each once, never the answer";
    let person = person_of(question);
    let key = key_of(question);
    let other = equal(key, "name") ? "town" : "name";
    let candidates = [person[other], key, other];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same object asking for the other property, and another person asking for the same property";
    let person = person_of(answer);
    let key = key_of(answer);
    let other = equal(key, "name") ? "town" : "name";
    function someone_else(p) {
      let ne = not_equal(p.name, person.name);
      return ne;
    }
    let others = list_filter(people, someone_else);
    let stranger = list_random_item(others);
    let v = program_of(person, other);
    let v2 = program_of(stranger, key);
    let programs = [v, v2];
    return programs;
  }
  function example(root) {
    "the example program and what it writes out";
    let code = program_of(example_person, example_key);
    let lines = text_split_newline(code);
    let out = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(root, lines, out);
  }
  function above(root, context) {
    "a.length remembered, then an object, its properties, and p.name reading one";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_length,
      ["", "a.length", " is how many items the array ", "a", " holds."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Mary lived in the town of Nazareth. Here is a way to write that in JS:",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "let p = " + object_code(example_person) + ";",
    ]);
    let called = html_div(box_two);
    app_learn_js_cycle_code(called, [
      "Curly braces ",
      "{",
      " ",
      "}",
      " make an ",
    ]);
    app_learn_js_definition_term(called, "object");
    html_span_text(called, ".");
    let named = html_div(box_two);
    app_learn_js_cycle_code(named, [
      "Each value in an object has a name in front of it, then a colon ",
      ":",
      ". Each name and its value is called a ",
    ]);
    app_learn_js_definition_term(named, "property");
    app_learn_js_cycle_code(named, [
      ". So ",
      "p",
      " has two properties, ",
      "name",
      " and ",
      "town",
      ".",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Just as ",
      "a.length",
      " uses a dot, ",
      "p.name",
      " uses a dot to read the property named ",
      "name",
      ":",
    ]);
    example(box_three);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "p.name",
      " is ",
      '"Mary"',
      ", and ",
      "p.town",
      " is ",
      '"Nazareth"',
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "Mary",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reading a property",
    "p.name",
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
