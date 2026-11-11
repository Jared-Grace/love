import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { less_than } from "./less_than.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { list_size } from "./list_size.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_generic(options) {
  arguments_assert(arguments, 1);
  ("every item of an array written out by a for loop: let a = ['love', 'joy', 'peace']; for (let i = 0; i < 3; i++) { console.log(a[i]); } writes out love then joy then peace. What differs between lessons is handed in here.");
  ("bound is how the end of the loop is written, as 3 or as a.length, and bound_fewer the same end one short, as 2 or a.length - 1. above is handed the root, the context, the example drawer, the drawer of the same program written out by hand, and the walk drawer.");
  ("The wrong answers are what the loop writes out when it starts at 1 instead of 0, when it stops one short, and both - the two mistakes a loop over an array is known for. Each is worked out by running that program, not reasoned out. Reading backwards, the wrong programs are those same loops.");
  ("A program's start and end are found by trying every pair against it, not by reading its digits, so nothing here depends on how the lines are spaced.");
  ("Drafted by Claude 2026-11-11, for the lesson the human chose after a[i] stepped up twice by hand.");
  let name_id = property_get(options, "name_id");
  let above_inner = property_get(options, "above");
  let item_counts = property_get(options, "item_counts");
  ("item_counts is the sizes a question's array may have: only 3 while the loop is written to stop at 3, and several once it stops at a.length, which is what a.length is for");
  let bound = property_get(options, "bound");
  let bound_fewer = property_get(options, "bound_fewer");
  let example_items = property_get(options, "example_items");
  let name = "a";
  let index_name = "i";
  let less = js_operator_less_than_symbol();
  let read = js_code_index(name, index_name);
  let logged = js_code_console_log_statement(read);
  let right = {
    start: 0,
    end: bound,
  };
  let ways = [
    right,
    {
      start: 1,
      end: bound,
    },
    {
      start: 0,
      end: bound_fewer,
    },
    {
      start: 1,
      end: bound_fewer,
    },
  ];
  function head_line(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let line = js_code_let_statement(name, array);
    return line;
  }
  function loop_lines(way) {
    let start = property_get(way, "start");
    let end = property_get(way, "end");
    let json = json_to(start);
    let started = js_code_let_statement(index_name, json);
    let condition = js_code_binary_spaced_nb(index_name, less, end);
    let stepped = index_name + "++;";
    let lines = js_code_for_start_condition_update_lines(started, condition, [
      logged,
      stepped,
    ]);
    return lines;
  }
  function program_head(head, way2) {
    let lines2 = loop_lines(way2);
    let all = list_concat([head], lines2);
    let code = list_join_newline(all);
    return code;
  }
  function program_of(items2, way3) {
    let head2 = head_line(items2);
    let code2 = program_head(head2, way3);
    return code2;
  }
  function batch_get() {
    "four programs, each a fresh array of fruits of the Spirit, each written out whole by the loop";
    let fruits = fruits_of_the_spirit();
    let codes2 = [];
    for (let k = 0; less_than(k, 4); k++) {
      let item_count = list_random_item(item_counts);
      let items3 = list_shuffle_take(fruits, item_count);
      let code3 = program_of(items3, right);
      codes2.push(code3);
    }
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function programs_wrong(code4) {
    "the same array looped over each wrong way";
    let lines3 = text_split_newline(code4);
    let head3 = list_first(lines3);
    function is_it(way4) {
      let left = program_head(head3, way4);
      let same = equal(left, code4);
      return same;
    }
    let way5 = list_find(ways, is_it);
    let others = list_without(ways, way5);
    function program_other(way6) {
      let code5 = program_head(head3, way6);
      return code5;
    }
    let programs = list_map(others, program_other);
    return programs;
  }
  function decoys(question, answer) {
    "what each wrong loop writes out; each once, never the answer";
    let programs2 = programs_wrong(question);
    let outs = list_map(programs2, eval_console_log_lines);
    let found = list_without(outs, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array looped over each wrong way";
    let programs3 = programs_wrong(answer);
    return programs3;
  }
  function example(root) {
    "the example program and what it writes out";
    let code6 = program_of(example_items, right);
    let lines4 = text_split_newline(code6);
    let out = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(root, lines4, out);
  }
  function example_by_hand(root) {
    "the same items written out without a loop: let i = 0; then a[i] read, i++, a[i] read again, until the last item";
    let head4 = head_line(example_items);
    let started2 = js_code_let_statement(index_name, "0");
    let lines5 = [head4, started2, logged];
    let size = list_size(example_items);
    for (let k = 1; less_than(k, size); k++) {
      lines5.push(index_name + "++;");
      lines5.push(logged);
    }
    let code7 = list_join_newline(lines5);
    let out2 = eval_console_log_lines(code7);
    app_learn_js_code_lines_writes_out(root, lines5, out2);
  }
  function walk(root) {
    "the loop run by run: what it asks, the item it reads, the step, until what it asks is false";
    let size2 = list_size(example_items);
    let count_json = json_to(size2);
    if (not_equal(bound, count_json)) {
      ("the end written as a.length is said once as the number it holds, so each run below compares two numbers, as the step-by-step guide solves it");
      app_learn_js_div_cycle_code(root, ["", bound, " is ", count_json]);
    }
    for (let index = 0; less_than(index, size2); index++) {
      let index_json = json_to(index);
      let condition2 = js_code_binary_spaced_nb(index_json, less, count_json);
      let written = js_code_index(name, index_json);
      let object = list_get(example_items, index);
      let item = json_to(object);
      app_learn_js_div_cycle_code(root, [
        "",
        condition2,
        " is ",
        "true",
        ", so ",
        read,
        " is ",
        written,
        ", which is ",
        item,
      ]);
      let after = json_to(index + 1);
      app_learn_js_div_cycle_code(root, [
        "",
        index_name + "++",
        " adds ",
        "1",
        " to ",
        index_name,
        ", so ",
        index_name,
        " is ",
        after,
      ]);
    }
    let last = js_code_binary_spaced_nb(count_json, less, count_json);
    let r = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(root, [
      "",
      last,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
    let code8 = program_of(example_items, right);
    let value = eval_console_log_lines(code8);
    let outs2 = text_split_newline(value);
    let said = ["So "];
    for (let out3 of outs2) {
      if (greater_than(said.length, 1)) {
        said.push(" then ");
      }
      said.push(out3);
    }
    said.push(" are written out");
    app_learn_js_div_cycle_code(root, said);
  }
  function above(root, context) {
    above_inner(root, context, example, example_by_hand, walk);
  }
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
