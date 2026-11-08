import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_lesson_log_after_change_groups } from "./app_learn_js_lesson_log_after_change_groups.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_size } from "./list_size.mjs";
import { list_last } from "./list_last.mjs";
import { subtract } from "./subtract.mjs";
import { list_take } from "./list_take.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_log } from "./app_learn_js_lesson_while_log.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_while_log_after_change() {
  arguments_assert(arguments, 0);
  ("the change before the console.log inside a while: let n = 2; while (n < 5) { n += 2; console.log(n); } writes out 4 and 6, though 6 < 5 is false");
  ("The one new fact is that the while asks only before the lines inside run, so a number past the one compared against can still be written out, when the change comes before the console.log.");
  ("Recommended by Claude 2026-11-02 and chosen by the human, to sit straight after A log inside a while, whose program is this one with its two lines the other way round.");
  ("Each screen has one program from each of three counts of runs - one, two and three - using the numbers of A log inside a while. Every program ends past the number it is compared against, so the last line written out always shows the new fact.");
  ("Reading forwards, the wrong answers are the lines one run fewer, which is what stopping before the limit would write out; one run more; and every line written before n changes, which is what the previous lesson's program writes out. Each once and never the answer.");
  ("Reading backwards, the wrong program is the same program compared against a number past the last line written out, so it runs once more; or, when it already runs as often as a while lesson allows, against the number n holds before its last run, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function program_lines(numbers_program) {
    "from [start, bound, added]: let n = start; while (n < bound) { n += added; console.log(n); }";
    let start = list_get(numbers_program, 0);
    let bound = list_get(numbers_program, 1);
    let added = list_get(numbers_program, 2);
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let changed = js_code_assign_operator_statement(name, plus, added);
    let logged = js_code_console_log_statement(name);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      changed,
      logged,
    ]);
    let lines = list_concat([code], while_lines);
    return lines;
  }
  function program_get(numbers_program) {
    let lines2 = program_lines(numbers_program);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function values_before(numbers_program) {
    "from [start, bound, added]: every value n holds when the while asks and the answer is true";
    let start = list_get(numbers_program, 0);
    let bound = list_get(numbers_program, 1);
    let added = list_get(numbers_program, 2);
    let values = [];
    let value = start;
    while (less_than(value, bound)) {
      list_add(values, value);
      value = add(value, added);
    }
    return values;
  }
  function written(values) {
    let texts = list_map(values, json_to);
    let text = list_join_newline(texts);
    return text;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let groups = app_learn_js_lesson_log_after_change_groups();
    let triples = list_shuffle_take_map(groups, 3, list_random_item);
    let codes = list_map(triples, program_get);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the lines one run fewer, one run more, and every line written before n changes; each once and never the answer";
    let numbers = text_integers(question);
    let added2 = list_get(numbers, 2);
    let before = values_before(numbers);
    function after(value) {
      let a = add(value, added2);
      return a;
    }
    let values2 = list_map(before, after);
    let size = list_size(values2);
    let last = list_last(values2);
    let ended = after(last);
    let more = list_concat(values2, [ended]);
    let candidates = [more, before];
    if (less_than(1, size)) {
      let count = subtract(size, 1);
      let fewer = list_take(values2, count);
      candidates = [fewer, more, before];
    }
    let texts = list_map(candidates, written);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number past the last line written out, so it runs once more; or, when it already runs as often as a while lesson allows, against the number n holds before its last run, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let added3 = list_get(numbers2, 2);
    let before2 = values_before(numbers2);
    let left = list_size(before2);
    let last2 = list_last(before2);
    let ended2 = add(last2, added3);
    let further = add(ended2, 1);
    let most = app_code_while_runs_max();
    if (less_than_equal(most, left)) {
      further = last2;
    }
    let code4 = program_get([start3, further, added3]);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, value_after) {
    "value < bound is true, so n becomes value_after, and it writes out value_after";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let json = json_to(value_after);
    app_learn_js_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so ",
      name,
      " becomes ",
      json,
      ", and it writes out ",
      json,
    ]);
  }
  function above(root, context) {
    "A log inside a while remembered, then its two lines swapped, and the last line past the limit explained";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_log,
      [
        "a ",
        "console.log",
        " inside a ",
        "while",
        " writes out one line every time the lines run.",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Put the change first, and it writes out ",
      name,
      " after it has changed:",
    ]);
    let lines3 = program_lines([2, 5, 2]);
    let value2 = written([4, 6]);
    app_learn_js_code_lines_writes_out(box_two, lines3, value2);
    said(box_two, 2, 5, 4);
    said(box_two, 4, 5, 6);
    let check = js_code_binary_spaced_nb(6, less, 5);
    let r = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "",
      check,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "6",
      " was written out, even though ",
      check,
      " is ",
      "false",
    ]);
    let r2 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_three, [
      "The ",
      "while",
      " asks only before the ",
      r2,
      " runs",
    ]);
    let r3 = app_learn_js_braces_dots();
    let r4 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_three, [
      "Once the ",
      r3,
      " starts, every line inside the ",
      r4,
      " runs, and then the ",
      "while",
      " asks again",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A log after the change",
    "{ n += 2; console.log(n); }",
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
