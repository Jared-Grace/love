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
import { list_last } from "./list_last.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { subtract } from "./subtract.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_length } from "./app_learn_js_lesson_array_length.mjs";
import { add } from "./add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_learn_js_cycle_code_draw } from "./app_learn_js_cycle_code_draw.mjs";
import { app_learn_js_arrow_inline_draw } from "./app_learn_js_arrow_inline_draw.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_learn_js_rows_aligned } from "./app_learn_js_rows_aligned.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_lesson_expression_choose_order_twin_array_generic } from "./app_learn_js_lesson_expression_choose_order_twin_array_generic.mjs";
import { app_learn_js_lesson_solve_merged } from "./app_learn_js_lesson_solve_merged.mjs";
export function app_learn_js_lesson_array_last_index() {
  arguments_assert(arguments, 0);
  ("the last index of an array: let a = ['love', 'joy', 'peace']; console.log(a.length - 1); writes out 2");
  ("The fifth lesson of arrays, after a.length, chosen by the human 2026-11-08: the last index is worked out on its own before it is used to read the last item, a[a.length - 1], which is the lesson after.");
  ("The one new fact is that, because counting starts at 0, the last index is one less than how many items there are. Arrays hold two to five items, so the answer changes from question to question.");
  ("Reading forwards, the wrong answers are the length itself - forgetting the minus one - and the last item, the answer of reading a.length - 1 as the item it points at. Reading backwards, the wrong programs are the same array writing out a.length, and the same array with one more item.");
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
  function last_index_code() {
    let length = js_code_length(name);
    let minus = js_operator_minus_symbol();
    let code = js_code_binary_spaced_nb(length, minus, "1");
    return code;
  }
  function program_read(items2, read) {
    let head = head_line(items2);
    let line2 = js_code_console_log_statement(read);
    let lines = [head, line2];
    let code2 = list_join_newline(lines);
    return code2;
  }
  function program_of(items3) {
    let read2 = last_index_code();
    let code3 = program_read(items3, read2);
    return code3;
  }
  function batch_get() {
    "four programs, each a fresh array of two to five items";
    let codes2 = [];
    for (let i = 0; less_than(i, 4); i++) {
      let words = fruits_of_the_spirit();
      let size = list_random_item(sizes);
      let items4 = list_shuffle_take(words, size);
      let v = program_of(items4);
      codes2.push(v);
    }
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code4) {
    "the program's array, found by running its first line and writing the array out";
    let lines2 = text_split_newline(code4);
    let head2 = list_first(lines2);
    let log_line = js_code_console_log_statement(name);
    let lines3 = [head2, log_line];
    let code5 = list_join_newline(lines3);
    let logs = eval_console_log_to_list(code5);
    let first = list_first(logs);
    let items5 = list_first(first);
    return items5;
  }
  function decoys(question, answer) {
    "the length itself, and the last item; each once, never the answer";
    let items6 = items_of(question);
    let size2 = list_size(items6);
    let length_written = json_to(size2);
    let last = list_last(items6);
    let candidates = [length_written, last];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array writing out a.length, and the same array with one more item";
    let items7 = items_of(answer);
    let read3 = js_code_length(name);
    let length_program = program_read(items7, read3);
    function unused(word) {
      let used = list_includes(items7, word);
      let free = not(used);
      return free;
    }
    let words2 = fruits_of_the_spirit();
    let free_words = list_filter(words2, unused);
    let extra = list_random_item(free_words);
    let more = list_concat(items7, [extra]);
    let more_program = program_of(more);
    let programs = [length_program, more_program];
    return programs;
  }
  function example(root) {
    "the example program and what it writes out";
    let code6 = program_of(example_items);
    let lines4 = text_split_newline(code6);
    let out = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(root, lines4, out);
  }
  function walk(root) {
    "the length, one taken away, and the last item that index reaches";
    let size3 = list_size(example_items);
    let count = json_to(size3);
    let length2 = js_code_length(name);
    app_learn_js_div_cycle_code(root, ["", length2, " is ", count]);
    let index = subtract(size3, 1);
    let index_written = json_to(index);
    let minus2 = js_operator_minus_symbol();
    let sum = js_code_binary_spaced_nb(count, minus2, "1");
    app_learn_js_div_cycle_code(root, ["", sum, " is ", index_written]);
    app_learn_js_div_cycle_output(root, [
      "So ",
      index_written,
      " is written out",
    ]);
    let read4 = js_code_index(name, index_written);
    let object = list_last(example_items);
    let item = json_to(object);
    app_learn_js_div_cycle_code(root, [
      "And ",
      read4,
      " is ",
      item,
      ", the last item",
    ]);
  }
  function above(root, context) {
    "a.length remembered, then one less than it as the last index";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_length,
      ["", "a.length", " is how many items are in the array ", "a", "."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    ("the wording of this box is the human's, 2026-11-09");
    app_learn_js_div_cycle_code(box_two, ["Suppose we have an array:"]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'let a = ["love", "joy", "peace"];',
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "This array has ",
      "3",
      " items, so ",
      "a.length === 3",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "Here is that array as a list with their names:",
    ]);
    function row_of(word, index4) {
      "one numbered row: the item's number counting from 1, the item, and its name counting from 0";
      let object2 = add(index4, 1);
      let json = json_to(object2);
      let number = text_combine_multiple([json, "."]);
      let index2 = json_to(index4);
      let read5 = js_code_index(name, index2);
      let json2 = json_to(word);
      let draw = app_learn_js_cycle_code_draw([number]);
      let draw2 = app_learn_js_cycle_code_draw(["", json2]);
      let draw3 = app_learn_js_arrow_inline_draw(0);
      let draw4 = app_learn_js_cycle_code_draw(["", read5]);
      let row = [draw, draw2, draw3, draw4];
      return row;
    }
    let rows = list_map_index(example_items, row_of);
    app_learn_js_rows_aligned(box_two, rows);
    app_learn_js_div_cycle_code(box_two, [
      "Because the list has ",
      "3",
      ' items, then the last item is "3."',
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "However, because in JS we count starting at ",
      "0",
      " and not ",
      "1",
      ', then item "3." is ',
      "a[2]",
      " not ",
      "a[3]",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "In other words, if we have the number of items in the array (",
      "a.length",
      ") and we subtract ",
      "1",
      " (",
      "a.length - 1",
      ") then we get the number of the last item (",
      "a[3 - 1] === a[2]",
      " here)",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The last index of an array",
    "a.length - 1",
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
  ("2026-11-12, asked for by the human: the pressing lesson that stood in front of this one is merged into it - its opening, then one press-at-a-time quiz before the others");
  let solve = app_learn_js_lesson_expression_choose_order_twin_array_generic(
    "Solve the last index",
    "a.length - 1",
    lesson,
  );
  let merged = app_learn_js_lesson_solve_merged(lesson, solve);
  return merged;
}
