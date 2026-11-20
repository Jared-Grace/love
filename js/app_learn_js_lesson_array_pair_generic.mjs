import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { json_from } from "./json_from.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { add } from "./add.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_pair_generic(options) {
  "a lesson over two arrays of the same size read side by side with one i: each run writes out a[i] + b[i], or, when pushed is true, pushes it into an empty c that a second loop then writes out";
  "2026-11-20, at the human's asking: the two lessons are one shape, with and without the push, so they share this builder and cannot drift apart. The wrong programs are a[i] + a[i] (one array read twice), a[i] * b[i] (times, not plus), and a[i] alone (b never read); each is kept only when it writes out something else.";
  let name_id = property_get(options, "name_id");
  let above_boxes = property_get(options, "above");
  let pushed = property_get(options, "pushed");
  let sizes = [3, 3, 3, 4, 4, 4];
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function program_with(items_a, items_b, worked) {
    "the program: a and b, then one loop over both, worked out from a[i] and b[i]";
    let a_codes = list_map(items_a, json_to);
    let right = js_code_array(a_codes);
    let a_line = js_code_let_statement("a", right);
    let b_codes = list_map(items_b, json_to);
    let right2 = js_code_array(b_codes);
    let b_line = js_code_let_statement("b", right2);
    if (pushed) {
      let empty = js_code_let_statement("c", "[]");
      let push_line = js_code_called("c.push", worked) + ";";
      let build_lines = js_code_for_start_condition_update_lines(
        "let i = 0;",
        "i < a.length",
        [push_line, "i++;"],
      );
      let log_line = js_code_console_log_statement("c[i]");
      let log_lines = js_code_for_start_condition_update_lines(
        "let i = 0;",
        "i < c.length",
        [log_line, "i++;"],
      );
      let lines = list_concat_multiple([
        [a_line, b_line, empty],
        build_lines,
        log_lines,
      ]);
      let code = list_join_newline(lines);
      return code;
    }
    let logged = js_code_console_log_statement(worked);
    let loop_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      [logged, "i++;"],
    );
    let lines2 = list_concat_multiple([[a_line, b_line], loop_lines]);
    let code2 = list_join_newline(lines2);
    return code2;
  }
  function program_of(items_a, items_b) {
    let code3 = program_with(items_a, items_b, "a[i] + b[i]");
    return code3;
  }
  function batch_get() {
    "six programs, pairs of arrays of three and four numbers three times each, shuffled";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let size = list_get(sizes, k);
      let items_a = list_shuffle_take(pool, size);
      let items_b = list_shuffle_take(pool, size);
      let v2 = program_of(items_a, items_b);
      codes.push(v2);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function line_items(line) {
    "the numbers of one let line";
    let v = line.lastIndexOf(";");
    let after = line.slice(line.indexOf("=") + 1, v);
    let items = json_from(after);
    return items;
  }
  function pair_of(code4) {
    "a's and b's numbers, read off the first two lines";
    let list = text_split_newline(code4);
    let item = list_get(list, 0);
    let items_a = line_items(item);
    let item2 = list_get(list, 1);
    let items_b = line_items(item2);
    let pair = {
      items_a,
      items_b,
    };
    return pair;
  }
  function decoys(question, answer) {
    "a's numbers, b's numbers, and a's numbers each added to itself; each once, never the answer";
    let pair = pair_of(question);
    let items_a = property_get(pair, "items_a");
    let items_b = property_get(pair, "items_b");
    function twice(n) {
      let r = add(n, n);
      return r;
    }
    let only_a = list_join_newline(items_a);
    let only_b = list_join_newline(items_b);
    let list2 = list_map(items_a, twice);
    let doubled = list_join_newline(list2);
    let candidates = [only_a, only_b, doubled];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "a[i] + a[i], a[i] * b[i], and a[i] alone; kept only when they write out something else";
    let pair = pair_of(answer);
    let items_a = property_get(pair, "items_a");
    let items_b = property_get(pair, "items_b");
    let v3 = program_with(items_a, items_b, "a[i] + a[i]");
    let v4 = program_with(items_a, items_b, "a[i] * b[i]");
    let v5 = program_with(items_a, items_b, "a[i]");
    let programs = [v3, v4, v5];
    let out_answer = eval_console_log_lines(answer);
    function differs(code5) {
      let out = eval_console_log_lines(code5);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function example(box, items_a, items_b) {
    "the program over items_a and items_b, with what it writes out";
    let code6 = program_of(items_a, items_b);
    let lines3 = text_split_newline(code6);
    let value = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(box, lines3, value);
  }
  function above(root, context) {
    above_boxes(root, context, example);
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
