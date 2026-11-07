import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_take } from "./list_take.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_log } from "./app_code_lesson_while_log.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_log_skipped() {
  arguments_assert(arguments, 0);
  ("a console.log inside a while that never runs, and one after it: let n = 9; while (n < 5) { console.log(n); n += 2; } console.log(n); writes out only 9, from the console.log after the while");
  ("The one new fact is that when what a while asks is false from the start, the lines inside its { ... } never run, so a console.log inside it writes out nothing, and the code continues after it.");
  ("Asked for by the human 2026-11-01, to sit straight after A log inside a while, whose programs all run at least once because with only a console.log inside, a while that never runs would show an empty answer. The console.log after the while is what lets a program that never runs be asked about here.");
  ("Each screen has three programs: two that never run and one that runs once or twice, in a shuffled order, asked for by the human 2026-11-01 - the skipped while is the point of the lesson, so it is most of what is asked, and the one that runs means a learner still cannot pass by always writing out only where n starts. Weighed: three of four skipped, a longer screen for the same lesson; one of each count of runs, as first drafted, where the skipped while was only a third.");
  ("No program runs more than twice, so the backwards wrong program, which runs once more, still runs no more than three times.");
  ("Reading forwards, the wrong answers are the lines one run fewer, one run more - for a while that never runs, that is the { ... } run once anyway - and every line inside written after n has changed; for a while that never runs, also n after one run written out alone, as if the { ... } ran but its console.log did not. Each once and never the answer.");
  ("Reading backwards, the wrong program is the same program compared against a number past where n ends, so it runs once more and writes out one line more.");
  ("The numbers are those of While, so n never lands exactly on the number it is compared against, except in the backwards wrong program.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function program_lines(start, bound, added) {
    "let n = start; while (n < bound) { console.log(n); n += added; } console.log(n);";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let logged = js_code_console_log_statement(name);
    let changed = js_code_assign_operator_statement(name, plus, added);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      logged,
      changed,
    ]);
    let lines = list_concat([code], while_lines);
    let logged_after = js_code_console_log_statement(name);
    list_add(lines, logged_after);
    return lines;
  }
  function program_get(start, bound, added) {
    let lines2 = program_lines(start, bound, added);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function values_of(start, bound, added) {
    "every value n holds when the while asks and the answer is true";
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
    "three programs: two that never run and one that runs once or twice, in a shuffled order";
    let skipped = [
      [9, 5, 2],
      [7, 4, 3],
      [8, 3, 2],
      [10, 4, 3],
    ];
    let running = [
      [3, 5, 4],
      [2, 4, 3],
      [1, 6, 3],
      [2, 5, 2],
    ];
    let triples = list_shuffle_take(skipped, 2);
    let ran = list_random_item(running);
    list_add(triples, ran);
    list_shuffle(triples);
    function program_of(triple) {
      let item = list_get(triple, 0);
      let item2 = list_get(triple, 1);
      let item3 = list_get(triple, 2);
      let code2 = program_get(item, item2, item3);
      return code2;
    }
    let codes = list_map(triples, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the lines one run fewer, one run more, and every line inside written after n has changed; for a while that never runs, also n after one run alone; each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let added2 = list_get(numbers, 2);
    let values2 = values_of(start2, bound2, added2);
    let size = list_size(values2);
    let right = multiply(size, added2);
    let ended = add(start2, right);
    let ended_more = add(ended, added2);
    let more = list_concat(values2, [ended, ended_more]);
    function after(value) {
      let a = add(value, added2);
      return a;
    }
    let shifted = list_map(values2, after);
    let shifted_ended = list_concat(shifted, [ended]);
    let candidates = [more, shifted_ended];
    if (equal(size, 0)) {
      ("Also n written out twice, as if the console.log inside ran and the n += did not count. It holds only a number on the screen. The third button used to be filled from the other questions, so the one answer made only of numbers on the screen was right every time on a while that never runs: measured 2026-11-03 at 72 in 100 against 25 by chance. Not picked: writing out nothing, which is the answer the lesson says never happens, because the console.log after the while always runs.");
      candidates = [more, [ended_more], [ended, ended]];
    }
    if (less_than_equal(1, size)) {
      let count = subtract(size, 1);
      let fewer = list_take(values2, count);
      let ended_fewer = subtract(ended, added2);
      let fewer_ended = list_concat(fewer, [ended_fewer]);
      candidates = [fewer_ended, more, shifted_ended];
    }
    let texts = list_map(candidates, written);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number past where n ends, so it runs once more; or, when it already runs as often as a while lesson allows, against the last value it writes out from inside, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let added3 = list_get(numbers2, 2);
    let values3 = values_of(start3, bound3, added3);
    let left = list_size(values3);
    let right2 = multiply(left, added3);
    let ended2 = add(start3, right2);
    let sum = add(ended2, 1);
    let a2 = app_code_while_runs_max();
    if (less_than_equal(a2, left)) {
      sum = list_last(values3);
    }
    let code4 = program_get(start3, sum, added3);
    let found2 = [code4];
    return found2;
  }
  function above(root, context) {
    "A log inside a while remembered, then a while that never runs, whose console.log inside writes out nothing";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while_log, [
      "a ",
      "console.log",
      " inside a ",
      "while",
      " writes out every time the lines inside run.",
    ]);
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "When what the ",
      "while",
      " asks is ",
      "false",
      " from the start, the lines inside never run:",
    ]);
    let lines3 = program_lines(9, 5, 2);
    app_code_code_lines_writes_out(box_two, lines3, "9");
    let first = js_code_binary_spaced_nb(9, less, 5);
    let r = app_code_braces_dots();
    app_code_div_cycle_code(box_two, [
      "",
      first,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the ",
      "console.log",
      " inside it writes out nothing",
    ]);
    app_code_div_cycle_code(box_two, [
      "The code continues after it, and the ",
      "console.log",
      " there writes out ",
      "9",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "A log inside a skipped while",
    "while (9 < 5) { ... }",
  );
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
