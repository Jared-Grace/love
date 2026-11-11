import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_last } from "./list_last.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { range } from "./range.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_any } from "./app_learn_js_lesson_array_any.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_length() {
  arguments_assert(arguments, 0);
  ("how many items an array holds: let a = ['love', 'joy', 'peace']; console.log(a.length); writes out 3");
  ("The fourth lesson of arrays, after any item, chosen by the human 2026-11-08: items before length, because a length is a count of items and the items must be known before a count of them means anything. The last item, a[a.length - 1], is the lesson after, and needs both.");
  ("The one new fact is that .length after an array's name is how many items it holds. Arrays hold two to five items, so the length changes from question to question, and the example holds three, so its length is not its last index.");
  ("Reading forwards, the wrong answers are the last index - the count reached by counting from 0 - and the first and the last item, the answer of reading .length as one of the items. Reading backwards, the wrong programs are the same array with its last item taken off, and with one more item.");
  ("The items are words, the fruits of the Spirit, all different, and a length is a number, so an item can never be mistaken for a length. Words rather than numbers, chosen by the human 2026-11-08: we give people names, not numbers.");
  ("A program's items are found by running its first line and writing out the array, not by reading its digits, so nothing here depends on how the line is spaced.");
  ("No stepping, for the reason the index lessons give: the tracer cannot yet read an array.");
  ("The writing is a first draft by Claude 2026-11-08.");
  let name = "a";
  let sizes = [2, 3, 4, 5];
  let example_items = ["love", "joy", "peace"];
  function head_line(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let line = js_code_let_statement(name, array);
    return line;
  }
  function program_of(items2) {
    let head = head_line(items2);
    let read = js_code_length(name);
    let line2 = js_code_console_log_statement(read);
    let lines = [head, line2];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs, each a fresh array of two to five items";
    let codes2 = [];
    for (let i = 0; less_than(i, 4); i++) {
      let numbers = fruits_of_the_spirit();
      let size = list_random_item(sizes);
      let items3 = list_shuffle_take(numbers, size);
      let v = program_of(items3);
      codes2.push(v);
    }
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code3) {
    "the program's array, found by running its first line and writing the array out";
    let lines2 = text_split_newline(code3);
    let head2 = list_first(lines2);
    let log_line = js_code_console_log_statement(name);
    let lines3 = [head2, log_line];
    let code4 = list_join_newline(lines3);
    let logs = eval_console_log_to_list(code4);
    let first = list_first(logs);
    let items4 = list_first(first);
    return items4;
  }
  function decoys(question, answer) {
    "the last index, and the first and the last item; each once, never the answer";
    let items5 = items_of(question);
    let size2 = list_size(items5);
    let index = subtract(size2, 1);
    let first2 = list_first(items5);
    let last = list_last(items5);
    let index_written = json_to(index);
    let candidates = [index_written, first2, last];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array with its last item taken off, and with one more item";
    let items6 = items_of(answer);
    let fewer = list_take_less_1(items6);
    function unused(n) {
      let used = list_includes(items6, n);
      let free = not(used);
      return free;
    }
    let numbers3 = fruits_of_the_spirit();
    let free_numbers = list_filter(numbers3, unused);
    let extra = list_random_item(free_numbers);
    let more = list_concat(items6, [extra]);
    let programs = list_map([fewer, more], program_of);
    return programs;
  }
  function example(root) {
    "the example program and what it writes out";
    let code5 = program_of(example_items);
    let lines4 = text_split_newline(code5);
    let out = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines4, out);
  }
  function walk(root) {
    "the example's items counted one by one, then how many there were written out";
    let size3 = list_size(example_items);
    let indexes = range(size3);
    for (let index2 of indexes) {
      let object = list_get(example_items, index2);
      let item = json_to(object);
      let index3 = json_to(index2);
      let written = js_code_index(name, index3);
      app_learn_js_div_cycle_code(root, ["", written, " is ", item]);
    }
    let count = json_to(size3);
    app_learn_js_div_cycle_output(root, [
      "That is " + count + " items, so ",
      count,
      " is written out",
    ]);
  }
  function above(root, context) {
    "a[3] remembered, then .length counting the items";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_any,
      ["", "a[3]", " is the fourth item, since counting starts at ", "0", "."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, ["Suppose we have an array:"]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'let a = ["love", "joy", "peace"];',
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "This array has ",
      "3",
      " items in it",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "If we have an array named ",
      "a",
      ", and we want to find how many items are in the array, then we can use ",
      "a.length",
      ":",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "How many items an array holds",
    "a.length",
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
