import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_first } from "./list_first.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { json_from } from "./json_from.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_last } from "./list_last.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_length } from "./app_learn_js_lesson_array_length.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_empty() {
  arguments_assert(arguments, 0);
  ("an array holding no items: let a = []; console.log(a.length); writes out 0");
  ("2026-11-13, at the human's asking, the step after the push lessons and before pushing into an empty array. The one new fact is that [] is an array with nothing in it, so its length is 0.");
  ("The human's mix, 2026-11-13: a set is six questions, three of them the empty array and one each of 1, 2 and 3 items, shuffled. Half are empty, so the new fact gets the most practice, yet answering 0 every time is wrong half the time; and every length from 0 to 3 is seen, so the length is seen growing from nothing. Rejected: sizes 0 to 3 drawn evenly (about one empty in four, the least practice for the new fact), and more than half empty (0 every time would mostly pass).");
  ("The three empty questions are the same program, since an empty array has nothing to vary.");
  ("Reading forwards, an empty array's wrong answers are 1, reading [] as one thing, and 2, counting its two brackets as items; a fuller array's are the length lesson's - its last index, and its first and last items. Reading backwards, the wrong programs are the same array one item shorter and one item longer, or for the empty array, arrays of one and two items.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let name = "a";
  let sizes = [0, 0, 0, 1, 2, 3];
  function head_line(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let line = js_code_let_statement(name, array);
    return line;
  }
  function program_of(items2) {
    let read = js_code_length(name);
    let line2 = js_code_console_log_statement(read);
    let v = head_line(items2);
    let code = list_join_newline([v, line2]);
    return code;
  }
  function batch_get() {
    "six programs: three empty arrays and one each of 1, 2 and 3 items, shuffled";
    let codes2 = [];
    for (let size of sizes) {
      let list = fruits_of_the_spirit();
      let items3 = list_shuffle_take(list, size);
      let v2 = program_of(items3);
      codes2.push(v2);
    }
    list_shuffle(codes2);
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code3) {
    "the program's array, found by reading its first line's brackets as code";
    let list2 = text_split_newline(code3);
    let head = list_first(list2);
    let v3 = head.indexOf("[");
    let array_text = head.slice(v3, head.lastIndexOf("]") + 1);
    let items4 = json_from(array_text);
    return items4;
  }
  function decoys(question, answer) {
    "for the empty array 1 and 2; else the last index and the first and last items; each once, never the answer";
    let items5 = items_of(question);
    let size2 = list_size(items5);
    let candidates = ["1", "2"];
    let b = equal(size2, 0);
    if (not(b)) {
      let object = subtract(size2, 1);
      let index_written = json_to(object);
      let first = list_first(items5);
      let last = list_last(items5);
      candidates = [index_written, first, last];
    }
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array one item shorter and one item longer; for the empty array, arrays of one and two items";
    let items6 = items_of(answer);
    function unused(word) {
      let used = list_includes(items6, word);
      let free = not(used);
      return free;
    }
    let list3 = fruits_of_the_spirit();
    let free_words = list_filter(list3, unused);
    let left = list_size(items6);
    if (equal(left, 0)) {
      let two = list_shuffle_take(free_words, 2);
      let first2 = list_first(two);
      let one = [first2];
      let programs = list_map([one, two], program_of);
      return programs;
    }
    let fewer = list_take_less_1(items6);
    let extra = list_random_item(free_words);
    let more = list_concat(items6, [extra]);
    let programs2 = list_map([fewer, more], program_of);
    return programs2;
  }
  function example(root, example_items) {
    "an example program and what it writes out";
    let code5 = program_of(example_items);
    let lines4 = text_split_newline(code5);
    let out = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines4, out);
  }
  function above(root, context) {
    "a.length remembered, then the array with nothing in it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_length,
      ["", "a.length", " is how many items ", "a", " holds:"],
    );
    example(box_one, ["love", "joy"]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "An array can hold no items at all. It is written with nothing between its brackets: ",
      "[]",
    ]);
    example(box_two, []);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a",
      " holds no items, so ",
      "a.length",
      " is ",
      "0",
    ]);
    app_learn_js_div_cycle_output(box_two, ["So ", "0", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "An empty array",
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
