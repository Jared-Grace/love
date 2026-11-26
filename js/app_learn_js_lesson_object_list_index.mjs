import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_second } from "./app_learn_js_lesson_array_second.mjs";
import { app_learn_js_lesson_object_property } from "./app_learn_js_lesson_object_property.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_list_index() {
  arguments_assert(arguments, 0);
  ('one person of an array of people: let people = [{ first: "Simon", last: "Peter" }, { first: "John", last: "Mark" }, { first: "Joseph", last: "Barnabas" }]; console.log(people[1].first); writes out John');
  ("2026-11-26, at the human's asking - the step before a loop over a list of objects: people[1] is one object of the array, the same as a[1] is one item, and .first reads its property, the same as p.name did. No loop, so the list of objects is the only new thing.");
  ("Comes before Writing out an array of people (people[i].first in a loop), which comes before Setting properties in a loop.");
  ("The names are the same New Testament people known by two names as Writing out an array of people uses.");
  ("A set is four questions, each three people drawn and shuffled, with the index 0, 1 or 2 and the property first or last drawn.");
  ("Reading forwards, the wrong answers are the same property of the other people drawn, and the other property of the right person. Reading backwards, the wrong programs read another index or the other property; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("Each person's line starts at the left edge, as in Writing out an array of people, since the put-the-lines-in-order quiz indents only for a { still open.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let people = [
    ["Simon", "Peter"],
    ["John", "Mark"],
    ["Joseph", "Barnabas"],
    ["Thomas", "Didymus"],
    ["Joseph", "Justus"],
  ];
  let properties = ["first", "last"];
  function program_with(drawn, index, property) {
    function object_line(person) {
      let codes = list_map(person, json_to);
      let text = "{ first: " + codes[0] + ", last: " + codes[1] + " },";
      return text;
    }
    let mapped = list_map(drawn, object_line);
    let lines = ["let people = ["]
      .concat(mapped)
      .concat(["];", "console.log(people[" + index + "]." + property + ");"]);
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs, three people each, index and property drawn";
    let codes = [];
    for (let k = 0; less_than(k, 4); k++) {
      let drawn = list_shuffle_take(people, 3);
      let left = Math.random();
      let p2 = multiply(left, 3);
      let index = floor(p2);
      let left2 = Math.random();
      let p3 = multiply(left2, 2);
      let property = properties[floor(p3)];
      let v = program_with(drawn, index, property);
      codes.push(v);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function drawn_of(code) {
    "the people, read off the lines holding first and last";
    let lines = text_split_newline(code);
    let drawn = [];
    for (let line of lines) {
      let found = line.match(/first: "(\w+)", last: "(\w+)"/);
      if (not_equal(found, null)) {
        drawn.push([found[1], found[2]]);
      }
    }
    return drawn;
  }
  function read_of(code) {
    "the index and property the last line reads";
    let found = code.match(/people\[(\d)\]\.(\w+)\);/);
    let read = {
      index: Number(found[1]),
      property: found[2],
    };
    return read;
  }
  function decoys(question, answer) {
    "the same property of the others, the other property of the right one; never the answer";
    let drawn = drawn_of(question);
    let read = read_of(question);
    let p = properties.indexOf(read.property);
    let candidates = [];
    for (let person of drawn) {
      candidates.push(person[p]);
    }
    candidates.push(drawn[read.index][subtract(1, p)]);
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "another index or the other property; kept only when they write out something else";
    let drawn = drawn_of(answer);
    let read = read_of(answer);
    let right = properties.indexOf(read.property);
    let other = properties[subtract(1, right)];
    let programs = [];
    for (let index = 0; less_than(index, drawn.length); index++) {
      if (not_equal(index, read.index)) {
        let v2 = program_with(drawn, index, read.property);
        programs.push(v2);
      }
    }
    let v3 = program_with(drawn, read.index, other);
    programs.push(v3);
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
    "a[1] and p.name remembered, then people[1].first";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_second,
      ["", "a[1]", " is the second item, since counting starts at ", "0", "."],
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
      "An array can hold objects. ",
      "people[1]",
      " is the second person, and ",
      "people[1].first",
      " is that person's first name:",
    ]);
    let code3 = program_with(
      [
        ["Simon", "Peter"],
        ["John", "Mark"],
        ["Joseph", "Barnabas"],
      ],
      1,
      "first",
    );
    let lines3 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines3, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "One person of an array",
    "people[1].first",
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
