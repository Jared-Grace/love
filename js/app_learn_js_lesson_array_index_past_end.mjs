import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit_short } from "./fruits_of_the_spirit_short.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_between } from "./text_between.mjs";
import { json_from } from "./json_from.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_last } from "./list_last.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { subtract } from "./subtract.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_last_index } from "./app_learn_js_lesson_array_last_index.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_index_past_end() {
  arguments_assert(arguments, 0);
  ('no item there: let a = ["love", "joy", "peace"]; console.log(a[3]); writes out undefined, and so does a[-1]');
  ("2026-11-15, at the human's asking, before the loops that read a[i + 1]: reading past the end is met alone first, with no loop and no name for the index. The one new fact is that an index the array does not have gives undefined, past the last item and before the first alike.");
  ("A set is six questions, arrays of three items, read at 3, 4, -1, -1, 0 and 2. Two of the six land on an item, so undefined is never simply always the answer. Each question names its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are undefined or the first item or the last item, whichever is not the answer, and the index itself. -1 offers the last item on purpose, since some languages read -1 as the last item and JavaScript does not. Reading backwards, the wrong programs read an index that lands somewhere else.");
  ("Steps are off: the step-by-step quiz cannot yet hold an undefined value. Not picked: teaching it to, which reaches every place a step's value is kept.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let indexes = [3, 4, -1, -1, 0, 2];
  let example_items = ["love", "joy", "peace"];
  function program_of(name, items, index) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let read = json_to(index);
    let log_line = js_code_console_log_statement(name + "[" + read + "]");
    let lines = [head, log_line];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of three items, read at the six indexes, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count = list_size(indexes);
    let names = list_shuffle_take(letters, count);
    let codes = [];
    for (let k = 0; less_than(k, list_size(indexes)); k++) {
      let list = fruits_of_the_spirit_short();
      let items = list_shuffle_take(list, 3);
      let index = list_get(indexes, k);
      let name = list_get(names, k);
      let code = program_of(name, items, index);
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
    "the array's name, read off the first line: let <name> = [...]";
    let list2 = text_split_newline(code);
    let head = list_first(list2);
    let name2 = text_between(head, "let ", " =");
    return name2;
  }
  function items_of(code) {
    "the array's items, read off the first line";
    let list3 = text_split_newline(code);
    let head = list_first(list3);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items2 = json_from(after);
    return items2;
  }
  function index_of(code) {
    "the index read, off the second line: console.log(<name>[<index>]);";
    let list4 = text_split_newline(code);
    let line = list_get(list4, 1);
    let inside = text_between(line, "[", "]");
    let index2 = number_from_text(inside);
    return index2;
  }
  function decoys(question, answer) {
    "undefined, the first item and the last item, whichever is not the answer, and the index itself; each once";
    let items3 = items_of(question);
    let index3 = index_of(question);
    let first = list_first(items3);
    let last = list_last(items3);
    let json = json_to(index3);
    let candidates = ["undefined", first, last, json];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "reading an index that lands somewhere else: an item when the answer read past an end, past the end when it read an item";
    let name3 = name_of(answer);
    let items4 = items_of(answer);
    let index4 = index_of(answer);
    let size = list_size(items4);
    let inside = less_than(-1, index4) && less_than(index4, size);
    let others = [0, 2];
    if (inside) {
      let other = subtract(2, index4);
      others = [other, 3];
    }
    function program_other(other_index) {
      let v2 = program_of(name3, items4, other_index);
      return v2;
    }
    let programs = list_map(others, program_other);
    return programs;
  }
  function above(root, context) {
    "the last index remembered, then reading past it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_last_index,
      ["the last index is ", "a.length - 1"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a",
      " has items at ",
      "0",
      ", ",
      "1",
      " and ",
      "2",
      ". There is no item at ",
      "3",
      ":",
    ]);
    let code2 = program_of("a", example_items, 3);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "undefined",
      " is written out: there is nothing there",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "There is no item before ",
      "0",
      " either:",
    ]);
    let code3 = program_of("a", example_items, -1);
    let lines3 = text_split_newline(code3);
    let value3 = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines3, value3);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "No item there",
    "a[3]",
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
