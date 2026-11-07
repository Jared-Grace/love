import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_from } from "./json_from.mjs";
import { list_size } from "./list_size.mjs";
import { list_last } from "./list_last.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_total_step_generic(
  program_write,
  above_inner,
  name_id,
) {
  arguments_assert(arguments, 3);
  ("a loop adding up a total while counting by more than one: let total = 0; then a loop of n from start up to bound, doing total += n; and n += step; then console.log(total);");
  ("What differs between lessons is the title, what is shown above, and how the loop is written, which program_write does when handed the let of n, the condition and the two lines; the let of total and the console.log around it are the same whichever loop it is.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - since no program in a loop lesson runs more than three times.");
  ("Reading forwards, the wrong answers are the total one run fewer, the total one run more, and n where it ends, the name not written out; each once, never the answer, never below zero.");
  ("Reading backwards, the wrong program is the same program compared against one past where n ends, so it runs once more; or, when it already runs as often as a loop lesson allows, against the last number added, so it runs once fewer.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let total_name = "total";
  function program_lines(write, start, bound, step) {
    "let total = 0; the loop of n from start, asking n < bound, around total += n; n += step; then console.log(total);";
    let total_let = js_code_let_statement(total_name, 0);
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let added = js_code_assign_operator_statement(total_name, plus, name);
    let counted = js_code_assign_operator_statement(name, plus, step);
    let written = write(n_let, condition, [added, counted]);
    let statement = js_code_console_log_statement(total_name);
    let lines = list_concat_multiple([[total_let], written, [statement]]);
    return lines;
  }
  function program_get(start, bound, step) {
    let lines2 = program_lines(program_write, start, bound, step);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs, each from a different group, so each runs a different number of times; each group mixes even and odd starts and steps of 2 and 3";
    let groups = [
      [
        [6, 4, 2],
        [5, 3, 3],
      ],
      [
        [4, 6, 2],
        [5, 7, 3],
      ],
      [
        [1, 5, 2],
        [2, 7, 3],
      ],
      [
        [2, 8, 2],
        [1, 7, 2],
        [1, 9, 3],
      ],
    ];
    let triples = list_shuffle_take_map(groups, 4, list_random_item);
    function program_of(triple) {
      let start = list_get(triple, 0);
      let bound = list_get(triple, 1);
      let step = list_get(triple, 2);
      let code = program_get(start, bound, step);
      return code;
    }
    let codes = list_map(triples, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function added_values(start, bound, step) {
    "the values of n added to total, in order, and where n ends";
    let values = [];
    let n = start;
    while (less_than(n, bound)) {
      list_add(values, n);
      n = add(n, step);
    }
    let r = {
      values,
      ended: n,
    };
    return r;
  }
  function decoys(question, answer) {
    "the total one run fewer, one run more, and n where it ends; each once, never the answer, never below zero";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 1);
    let bound2 = list_get(numbers, 2);
    let step2 = list_get(numbers, 3);
    let run = added_values(start2, bound2, step2);
    let values2 = run.values;
    let ended = run.ended;
    let total = json_from(answer);
    let more = add(total, ended);
    let candidates = [ended, more];
    let b = list_size(values2);
    if (less_than(0, b)) {
      let right = list_last(values2);
      let fewer = subtract(total, right);
      candidates = [fewer, ended, more];
    }
    function possible(value) {
      let p = less_than_equal(0, value);
      return p;
    }
    let kept = list_filter(candidates, possible);
    let texts = list_map(kept, json_to);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against one past where n ends, so it runs once more; or, when it already runs as often as a loop lesson allows, against the last number added, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 1);
    let bound3 = list_get(numbers2, 2);
    let step3 = list_get(numbers2, 3);
    let run2 = added_values(start3, bound3, step3);
    let values3 = run2.values;
    let bound_wrong = add(run2.ended, 1);
    let a = app_code_while_runs_max();
    let b2 = list_size(values3);
    if (less_than_equal(a, b2)) {
      bound_wrong = list_last(values3);
    }
    let code4 = program_get(start3, bound_wrong, step3);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, step, total_after) {
    "value < bound is true, so total becomes total_after, and n becomes value + step";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let after = json_to(total_after);
    let object = add(value, step);
    let n_after = json_to(object);
    app_learn_js_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so ",
      total_name,
      " becomes ",
      after,
      ", and ",
      name,
      " becomes ",
      n_after,
    ]);
  }
  function example(root, write) {
    "the program of 1, 7 and 2, written with write, and what it writes out";
    let lines3 = program_lines(write, 1, 7, 2);
    app_learn_js_code_lines_writes_out(root, lines3, "9");
  }
  function walk(root) {
    "what the program of 1, 7 and 2 does, run by run, until what it asks is false";
    said(root, 1, 7, 2, 1);
    said(root, 3, 7, 2, 4);
    said(root, 5, 7, 2, 9);
    let last = js_code_binary_spaced_nb(7, less, 7);
    let r2 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(root, [
      "",
      last,
      " is ",
      "false",
      ", because 7 is not less than itself, so the ",
      r2,
      " is skipped, and the code continues after it",
    ]);
    app_learn_js_div_cycle_code(root, [
      "So ",
      total_name,
      " is 1 + 3 + 5, which is 9",
    ]);
  }
  function above(root, context) {
    above_inner(root, context, example, walk);
  }
  let lesson = app_code_lesson_code_logged({
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
