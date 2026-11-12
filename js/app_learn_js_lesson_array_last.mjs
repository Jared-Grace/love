import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_index } from "./js_code_index.mjs";
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
import { list_get } from "./list_get.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_last_index } from "./app_learn_js_lesson_array_last_index.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_lesson_expression_choose_order_twin_array_generic } from "./app_learn_js_lesson_expression_choose_order_twin_array_generic.mjs";
import { app_learn_js_lesson_solve_merged } from "./app_learn_js_lesson_solve_merged.mjs";
export function app_learn_js_lesson_array_last() {
  arguments_assert(arguments, 0);
  ("the last item of an array: let a = ['love', 'joy', 'peace']; console.log(a[a.length - 1]); writes out peace");
  ("The sixth lesson of arrays, after the last index, chosen by the human 2026-11-08: the last index a.length - 1 was worked out on its own, and here it goes inside the brackets to read the item it points at.");
  ("The one new fact is that an index can be worked out rather than written as a number: a[a.length - 1] reads the item at the last index, whatever the array holds. Arrays hold two to five items, so the last item and its index change from question to question.");
  ("Reading forwards, the wrong answers are the last index itself - writing out the index rather than reading the item at it - the item before the last, and the first item. Reading backwards, the wrong programs are the same array writing out a.length - 1, and the same array reading a[a.length - 2]. Not used: a[a.length], whose answer, undefined, is not taught yet.");
  ("No stepping, for the reason the index lessons give: the tracer cannot yet read an array.");
  ("The writing is a first draft by Claude 2026-11-09.");
  let name = "a";
  let sizes = [2, 3, 4, 5];
  let example_items = ["love", "joy", "peace"];
  function head_line(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let line = js_code_let_statement(name, array);
    return line;
  }
  function minus_code(amount) {
    "a.length less amount, written with its spaces";
    let length = js_code_length(name);
    let minus = js_operator_minus_symbol();
    let code = js_code_binary_spaced_nb(length, minus, amount);
    return code;
  }
  function program_read(items2, read) {
    let head = head_line(items2);
    let line2 = js_code_console_log_statement(read);
    let lines = [head, line2];
    let code2 = list_join_newline(lines);
    return code2;
  }
  function program_back(items3, amount2) {
    "the program reading the item amount2 back from the end";
    let index = minus_code(amount2);
    let read2 = js_code_index(name, index);
    let code3 = program_read(items3, read2);
    return code3;
  }
  function program_of(items4) {
    let code4 = program_back(items4, "1");
    return code4;
  }
  function batch_get() {
    "four programs, each a fresh array of two to five items";
    let codes2 = [];
    for (let i = 0; less_than(i, 4); i++) {
      let words = fruits_of_the_spirit();
      let size = list_random_item(sizes);
      let items5 = list_shuffle_take(words, size);
      let v = program_of(items5);
      codes2.push(v);
    }
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code5) {
    "the program's array, found by running its first line and writing the array out";
    let lines2 = text_split_newline(code5);
    let head2 = list_first(lines2);
    let log_line = js_code_console_log_statement(name);
    let lines3 = [head2, log_line];
    let code6 = list_join_newline(lines3);
    let logs = eval_console_log_to_list(code6);
    let first = list_first(logs);
    let items6 = list_first(first);
    return items6;
  }
  function decoys(question, answer) {
    "the last index, the item before the last, and the first item; each once, never the answer";
    let items7 = items_of(question);
    let size2 = list_size(items7);
    let index2 = subtract(size2, 1);
    let index_written = json_to(index2);
    let before = subtract(size2, 2);
    let before_item = list_get(items7, before);
    let first2 = list_first(items7);
    let candidates = [index_written, before_item, first2];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array writing out a.length - 1, and the same array reading a[a.length - 2]";
    let items8 = items_of(answer);
    let read3 = minus_code("1");
    let index_program = program_read(items8, read3);
    let before_program = program_back(items8, "2");
    let programs = [index_program, before_program];
    return programs;
  }
  function example(root) {
    "the example program and what it writes out";
    let code7 = program_of(example_items);
    let lines4 = text_split_newline(code7);
    let out = eval_console_log_lines(code7);
    app_learn_js_code_lines_writes_out(root, lines4, out);
  }
  function walk(root) {
    "the length, one taken away, and the item that index reaches";
    let size3 = list_size(example_items);
    let count = json_to(size3);
    let length2 = js_code_length(name);
    app_learn_js_div_cycle_code(root, ["", length2, " is ", count]);
    let index3 = subtract(size3, 1);
    let index_written2 = json_to(index3);
    let minus2 = js_operator_minus_symbol();
    let sum = js_code_binary_spaced_nb(count, minus2, "1");
    app_learn_js_div_cycle_code(root, ["", sum, " is ", index_written2]);
    let read4 = js_code_index(name, index_written2);
    let object = list_last(example_items);
    let item = json_to(object);
    app_learn_js_div_cycle_code(root, ["", read4, " is ", item]);
    app_learn_js_div_cycle_output(root, ["So ", object, " is written out"]);
  }
  function above(root, context) {
    "a.length - 1 remembered, then put inside the brackets to read the last item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_last_index,
      ["", "a.length - 1", " is the index of the last item."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, ["Suppose we have an array:"]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'let a = ["love", "joy", "peace"];',
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "The last index is ",
      "a.length - 1",
      ", which is ",
      "2",
      " here",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "To read the item at an index, we put the index inside the brackets: ",
      "a[2]",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "So instead of ",
      "2",
      ", we can put ",
      "a.length - 1",
      " inside the brackets: ",
      "a[a.length - 1]",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a[a.length - 1]",
      " is the last item, however many items the array has",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The last item of an array",
    "a[a.length - 1]",
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
  ("2026-11-12, asked for by the human: the pressing lesson that stood in front of this one is merged into it - its opening, then one press-at-a-time quiz before the others");
  let solve = app_learn_js_lesson_expression_choose_order_twin_array_generic(
    "Solve the last item",
    "a[a.length - 1]",
    lesson,
  );
  let merged = app_learn_js_lesson_solve_merged(lesson, solve);
  return merged;
}
