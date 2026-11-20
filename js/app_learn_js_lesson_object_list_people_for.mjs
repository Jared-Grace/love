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
import { app_learn_js_lesson_object_list_properties_for } from "./app_learn_js_lesson_object_list_properties_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_object_list_people_for() {
  arguments_assert(arguments, 0);
  ('writing out a list of people: let people = [{ first: "Simon", last: "Peter" }, { first: "John", last: "Mark" }]; a for loop doing console.log(people[i].first + " " + people[i].last); writes out Simon Peter and John Mark');
  ("2026-11-16, at the human's asking - list of people {first,last}, use for to log first + ' ' + last: reading two properties of each object in a list, after Setting properties in a loop set them.");
  ("The names are people of the New Testament known by two names - Simon Peter, John Mark, Joseph Barnabas, Thomas Didymus, Joseph Justus - since Bible people rarely have a last name; the second name stands in as the last.");
  ("A set is four questions, each two or three people drawn and shuffled.");
  ("Reading forwards, the wrong answers are the names with no space, last name first, and first names only. Reading backwards, the wrong programs leave out the space, write last before first, and write first alone; each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("Each person's line starts at the left edge, not two spaces in. The put-the-lines-in-order quiz indents only for a { still open, and a [ does not count, so an indented line came out of the quiz unlike the lesson. Writing out a list of objects, the lesson before this, already writes them that way.");
  ("The writing is a first draft by Claude 2026-11-16.");
  let people = [
    ["Simon", "Peter"],
    ["John", "Mark"],
    ["Joseph", "Barnabas"],
    ["Thomas", "Didymus"],
    ["Joseph", "Justus"],
  ];
  let log_line = '  console.log(people[i].first + " " + people[i].last);';
  function program_with(drawn, line) {
    function object_line(person) {
      let codes = list_map(person, json_to);
      let text = "{ first: " + codes[0] + ", last: " + codes[1] + " },";
      return text;
    }
    let mapped = list_map(drawn, object_line);
    let lines = ["let people = ["]
      .concat(mapped)
      .concat(["];", "for (let i = 0; i < people.length; i++) {", line, "}"]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(drawn) {
    let code = program_with(drawn, log_line);
    return code;
  }
  function batch_get() {
    "four programs, two or three people each, shuffled";
    let codes = [];
    for (let size of [2, 2, 3, 3]) {
      let drawn = list_shuffle_take(people, size);
      let v = program_of(drawn);
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
  function names_text(drawn, name_of) {
    let list = list_map(drawn, name_of);
    let text = list_join_newline(list);
    return text;
  }
  function decoys(question, answer) {
    "no space, last first, first names only; each once, never the answer";
    let drawn = drawn_of(question);
    function joined(person) {
      let text = person[0] + person[1];
      return text;
    }
    function backwards(person) {
      let text = person[1] + " " + person[0];
      return text;
    }
    function first_only(person) {
      let text = person[0];
      return text;
    }
    let v4 = names_text(drawn, joined);
    let v5 = names_text(drawn, backwards);
    let v6 = names_text(drawn, first_only);
    let candidates = [v4, v5, v6];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "no space, last before first, first alone; kept only when they write out something else";
    let drawn = drawn_of(answer);
    let v1 = program_with(
      drawn,
      "  console.log(people[i].first + people[i].last);",
    );
    let v2 = program_with(
      drawn,
      '  console.log(people[i].last + " " + people[i].first);',
    );
    let v3 = program_with(drawn, "  console.log(people[i].first);");
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
    "setting properties in a loop remembered, then reading two of them in a loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_list_properties_for,
      ["", "items[i]", " is one object of the list at a time"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Here each object is a person. ",
      "people[i].first",
      " is that person's first name, and ",
      "people[i].last",
      " the last:",
    ]);
    let code2 = program_of([
      ["Simon", "Peter"],
      ["John", "Mark"],
    ]);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      '" "',
      " puts a space between the two names",
    ]);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "Simon Peter",
      ", then ",
      "John Mark",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Writing out a list of people",
    "people[i].first",
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
