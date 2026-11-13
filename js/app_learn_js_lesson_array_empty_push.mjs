import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_between } from "./text_between.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_from } from "./json_from.mjs";
import { add } from "./add.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_empty } from "./app_learn_js_lesson_array_empty.mjs";
import { app_learn_js_lesson_array_push } from "./app_learn_js_lesson_array_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_empty_push() {
  arguments_assert(arguments, 0);
  ('pushing into an empty array: let a = []; a.push("joy"); console.log(a.length); writes out 1');
  ("2026-11-13, at the human's asking, the step after the empty array and before a loop pushes into one. Both facts are already taught - [] holds nothing, and each push adds one item - so the one new thing is putting them together: an array can start empty and be filled a push at a time, which is how a list is built.");
  ("A set is six questions, one, two and three pushes twice each, shuffled, so the length is seen growing from nothing. Each question names its array with its own letter, as the empty-array lesson does; the examples keep a.");
  ("Reading forwards, the wrong answers are 0, reading the array as still empty, one more than the answer, and the last word pushed. Reading backwards, the wrong programs are the same pushes with one left out and with one more.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let push_counts = [1, 1, 2, 2, 3, 3];
  let example_added = ["joy"];
  function program_of(name, added) {
    let head = js_code_let_statement(name, "[]");
    function push_line_of(word) {
      let inside = json_to(word);
      let call = js_code_called(name + ".push", inside);
      let line = js_code_statement(call);
      return line;
    }
    let pushes = list_map(added, push_line_of);
    let read = js_code_length(name);
    let log_line = js_code_console_log_statement(read);
    let a = list_concat([head], pushes);
    let lines = list_concat(a, [log_line]);
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, one to three pushes twice each, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count2 = list_size(push_counts);
    let names = list_shuffle_take(letters, count2);
    let codes = [];
    for (let k = 0; less_than(k, list_size(push_counts)); k++) {
      let words = fruits_of_the_spirit();
      let count3 = list_get(push_counts, k);
      let added = list_shuffle_take(words, count3);
      let item = list_get(names, k);
      let code = program_of(item, added);
      codes.push(code);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function name_of(code) {
    "the array's name, read off the first line: let <name> = []";
    let lines = text_split_newline(code);
    let head = list_first(lines);
    let name = text_between(head, "let ", " =");
    return name;
  }
  function added_of(code) {
    "the words pushed, in order, read from inside each push's brackets";
    let lines = text_split_newline(code);
    function is_push(line) {
      let pushes = line.includes(".push(");
      return pushes;
    }
    let push_lines = list_filter(lines, is_push);
    function word_of(line) {
      let v = line.lastIndexOf(")");
      let inside = line.slice(line.indexOf("(") + 1, v);
      let word = json_from(inside);
      return word;
    }
    let words = list_map(push_lines, word_of);
    return words;
  }
  function decoys(question, answer) {
    "0, one more than the answer, and the last word pushed; each once, never the answer";
    let added = added_of(question);
    let count = list_size(added);
    let object = add(count, 1);
    let more = json_to(object);
    let last = added[subtract(count, 1)];
    let candidates = ["0", more, last];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same pushes with the last left out, and with one more word pushed";
    let name = name_of(answer);
    let added = added_of(answer);
    function unused(word) {
      let used = list_includes(added, word);
      let free = not(used);
      return free;
    }
    let words = fruits_of_the_spirit();
    let free_words = list_filter(words, unused);
    let extra = list_random_item(free_words);
    let fewer = list_take_less_1(added);
    let more = list_concat(added, [extra]);
    let v2 = program_of(name, fewer);
    let v3 = program_of(name, more);
    let programs = [v2, v3];
    return programs;
  }
  function example(root, added) {
    "an example program and what it writes out";
    let code = program_of("a", added);
    let lines = text_split_newline(code);
    let out = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(root, lines, out);
  }
  function above(root, context) {
    "the empty array and push remembered, then a push into an empty array";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_empty,
      ["", "[]", " is an array with no items, so its length is ", "0"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_push,
      ["", "a.push()", " adds one item to the end of ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "An array can start with no items, and then items can be pushed into it:",
    ]);
    example(box_three, example_added);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "a",
      " starts with no items. ",
      'a.push("joy");',
      " adds ",
      '"joy"',
      ", so now ",
      "a",
      " has ",
      "1",
      " item",
    ]);
    app_learn_js_div_cycle_output(box_three, ["So ", "1", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Pushing into an empty array",
    "[]",
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
