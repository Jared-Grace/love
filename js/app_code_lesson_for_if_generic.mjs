import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_keyword_for } from "./js_keyword_for.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_get } from "./list_get.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { less_than } from "./less_than.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_for_if_generic(options) {
  arguments_assert(arguments, 1);
  ("an if inside a for counting n up by one: the lines before, for (let n = start; n < bound; n++) { the if, asking about n and threshold }, the lines after. What differs between lessons is all handed in here.");
  ("before and after are the lines above and below the for. asked_write is handed the left side and the threshold and returns what the if asks; passes says whether that is true of a number. inside_write is handed what the if asks and returns the lines inside the for, above n++. effect is handed a number, whether the if let it through, and the walk's state so far, and returns the words said about that run and the state after it; its words begin and end in plain writing, the last ending in then. walk_end is handed the state at the end and returns one last line, or an empty list for none. threshold_other is handed the threshold and the start and returns the threshold of the wrong program read backwards.");
  ("Every quiz program comes from groups, each a list of start, bound and threshold, and no more than three runs; four programs to a screen, one from each group.");
  ("Reading forwards, the wrong answers are what four wrong programs write out: the same program with the if always true, with it asking the opposite, and running once fewer and once more. Each is worked out by running it rather than reasoned out, so the wrong answers are right about the wrong programs whatever the lines inside do. None is ever shown, so they may be written any way that runs. Each once, never the answer, never empty.");
  ("Reading backwards, the wrong program is the same program with threshold_other's threshold.");
  ("A program's numbers are found by looking it up among the programs the lesson makes, not by reading its digits in order, because the lines inside may hold digits of their own.");
  let name_id = property_get(options, "name_id");
  let above_inner = property_get(options, "above");
  let before = property_get(options, "before");
  let after = property_get(options, "after");
  let asked_write = property_get(options, "asked_write");
  let passes = property_get(options, "passes");
  let inside_write = property_get(options, "inside_write");
  let effect = property_get(options, "effect");
  let state_start = property_get(options, "state_start");
  let walk_end = property_get(options, "walk_end");
  let groups = property_get(options, "groups");
  let example_triple = property_get(options, "example");
  let threshold_other = property_get(options, "threshold_other");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let keyword = js_keyword_for();
  function program_lines_asked(start, bound, asked) {
    "the lines before, the for of n from start to below bound around the if asking asked, and the lines after";
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let inside = inside_write(asked);
    let update = js_code_update_statement(name, plus);
    let statements = list_concat(inside, [update]);
    let written = js_code_for_start_condition_update_lines(
      n_let,
      condition,
      statements,
    );
    let lines = list_concat_multiple([before, written, after]);
    return lines;
  }
  function program_lines(start, bound, threshold) {
    let asked = asked_write(name, threshold);
    let lines2 = program_lines_asked(start, bound, asked);
    return lines2;
  }
  function program_of(triple) {
    let start = list_get(triple, 0);
    let bound = list_get(triple, 1);
    let threshold = list_get(triple, 2);
    let lines3 = program_lines(start, bound, threshold);
    let code = list_join_newline(lines3);
    return code;
  }
  let triples_all = list_concat_multiple(groups);
  function numbers_of(code2) {
    "start, bound and threshold of a program this lesson makes";
    function is_it(triple2) {
      let text = program_of(triple2);
      let same = equal(text, code2);
      return same;
    }
    let found = list_find(triples_all, is_it);
    return found;
  }
  function batch_get() {
    "four programs, one from each group";
    let triples = list_shuffle_take_map(groups, 4, list_random_item);
    let codes = list_map(triples, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function written_asked(start2, bound2, asked2) {
    let lines4 = program_lines_asked(start2, bound2, asked2);
    let code3 = list_join_newline(lines4);
    let out = eval_console_log_lines(code3);
    return out;
  }
  function decoys(question, answer) {
    "what the program writes out with the if always true, asking the opposite, running once fewer and once more; each once, never the answer, never empty";
    let numbers = numbers_of(question);
    let start3 = list_get(numbers, 0);
    let bound3 = list_get(numbers, 1);
    let threshold3 = list_get(numbers, 2);
    let asked3 = asked_write(name, threshold3);
    let opposite = text_combine_multiple(["!(", asked3, ")"]);
    let fewer = subtract(bound3, 1);
    let more = add(bound3, 1);
    let v = written_asked(start3, bound3, "true");
    let v2 = written_asked(start3, bound3, opposite);
    let v3 = written_asked(start3, fewer, asked3);
    let v4 = written_asked(start3, more, asked3);
    let candidates = [v, v2, v3, v4];
    let filled = list_filter(candidates, text_empty_not_is);
    let found2 = list_without(filled, answer);
    let once = list_unique(found2);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program with the threshold threshold_other gives";
    let numbers2 = numbers_of(answer);
    let start4 = list_get(numbers2, 0);
    let bound4 = list_get(numbers2, 1);
    let threshold4 = list_get(numbers2, 2);
    let moved = threshold_other(threshold4, start4);
    let lines5 = program_lines(start4, bound4, moved);
    let code4 = list_join_newline(lines5);
    let found3 = [code4];
    return found3;
  }
  function example(root) {
    "the example program and what it writes out";
    let start5 = list_get(example_triple, 0);
    let bound5 = list_get(example_triple, 1);
    let threshold5 = list_get(example_triple, 2);
    let lines6 = program_lines(start5, bound5, threshold5);
    let code5 = list_join_newline(lines6);
    let out2 = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines6, out2);
  }
  function walk(root) {
    "what the example program does, run by run, until the for stops, then walk_end's line";
    let start6 = list_get(example_triple, 0);
    let bound6 = list_get(example_triple, 1);
    let threshold6 = list_get(example_triple, 2);
    let state = state_start;
    let value = start6;
    while (less_than(value, bound6)) {
      let json = json_to(value);
      let asked4 = asked_write(json, threshold6);
      let passed = passes(value, threshold6);
      let truth = "false";
      if (passed) {
        truth = "true";
      }
      let told = effect(value, passed, state);
      let said = property_get(told, "parts");
      state = property_get(told, "state");
      let next = add(value, 1);
      let json2 = json_to(next);
      let parts = list_concat_multiple([
        ["", asked4, " is ", truth],
        said,
        [name, " becomes ", json2],
      ]);
      app_learn_js_div_cycle_code(root, parts);
      value = next;
    }
    let last = js_code_binary_spaced_nb(bound6, less, bound6);
    app_learn_js_div_cycle_code(root, [
      "",
      last,
      " is ",
      "false",
      ", so the ",
      keyword,
      " stops",
    ]);
    let end = walk_end(state);
    if (list_empty_not_is(end)) {
      app_learn_js_div_cycle_code(root, end);
    }
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
