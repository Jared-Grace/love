import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_from } from "./json_from.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_last } from "./list_last.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_total } from "./app_code_lesson_while_total.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_total_step() {
  arguments_assert(arguments, 0);
  ("a running total counting by more than one: let total = 0; let n = 1; while (n < 7) { total += n; n += 2; } console.log(total); writes out 9, which is 1 + 3 + 5");
  ("The one new fact is that n can go up by more than 1 each run, so which numbers are added up depends on where n starts and how big its step is: start at 1 and add 2 for the odd numbers, start at 2 for the even ones.");
  ("Asked for by the human 2026-10-27, as the lesson after A running total: sums of even numbers and of odd numbers, one lesson rather than two, because the two programs differ only in where n starts.");
  ("Steps of 3 are mixed in with steps of 2, so the step has to be read as well as the start; a lesson for threes alone would teach the same fact a second time. Picked 2026-10-27; the rejected readings were a separate lesson for threes and steps of 2 only.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - since no program in a while lesson runs more than three times.");
  ("Reading forwards, the wrong answers are the total one run fewer, the total one run more, and n where it ends, the name not written out; each once, never the answer, never below zero.");
  ("Reading backwards, the wrong program is the same program compared against one past where n ends, so it runs once more; or, when it already runs as often as a while lesson allows, against the last number added, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-10-27.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let total_name = "total";
  function program_lines(start, bound, step) {
    "let total = 0; let n = start; while (n < bound) { total += n; n += step; } console.log(total);";
    let total_let = js_code_let_statement(total_name, 0);
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let added = js_code_assign_operator_statement(total_name, plus, name);
    let counted = js_code_assign_operator_statement(name, plus, step);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      added,
      counted,
    ]);
    let statement = js_code_console_log_statement(total_name);
    let lines = list_concat_multiple([
      [total_let, n_let],
      while_lines,
      [statement],
    ]);
    return lines;
  }
  function program_get(start, bound, step) {
    let lines2 = program_lines(start, bound, step);
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
    let picked = list_shuffle_take(groups, 4);
    let triples = list_map(picked, list_random_item);
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
  let batch = app_code_batch_question_answer_fns(
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
    "the same program compared against one past where n ends, so it runs once more; or, when it already runs as often as a while lesson allows, against the last number added, so it runs once fewer";
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
    app_code_div_cycle_code(root, [
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
  function above(root, context) {
    "the running total remembered, then n counting by 2 from 1, adding 1 + 3 + 5, then where even numbers and threes come from";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_total,
      [
        "inside a ",
        "while",
        ", one name can count while another adds up: ",
        "total += n;",
        " adds each ",
        name,
        " to ",
        total_name,
        ".",
      ],
    );
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "",
      name,
      " can count by more than 1. Here ",
      "n += 2;",
      " makes ",
      name,
      " count 1, 3, 5, so ",
      total_name,
      " adds up the odd numbers:",
    ]);
    let lines3 = program_lines(1, 7, 2);
    app_code_code_lines_writes_out(box_two, lines3, "9");
    said(box_two, 1, 7, 2, 1);
    said(box_two, 3, 7, 2, 4);
    said(box_two, 5, 7, 2, 9);
    let last = js_code_binary_spaced_nb(7, less, 7);
    app_code_div_cycle_code(box_two, [
      "",
      last,
      " is ",
      "false",
      ", because 7 is not less than itself, so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
    app_code_div_cycle_code(box_two, [
      "So ",
      total_name,
      " is 1 + 3 + 5, which is 9",
    ]);
    let box_three = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_three, [
      "Start ",
      name,
      " at 2 instead, and it counts 2, 4, 6: the even numbers. And ",
      "n += 3;",
      " counts by threes. So read where ",
      name,
      " starts and how much it goes up by.",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Counting by twos and threes",
    "n += 2;",
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
