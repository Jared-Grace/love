import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_includes } from "./text_includes.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { app_code_lesson_log_after_change_groups } from "./app_code_lesson_log_after_change_groups.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_last } from "./list_last.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_take } from "./list_take.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_log_after_change } from "./app_code_lesson_while_log_after_change.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_for_after_change() {
  arguments_assert(arguments, 0);
  ("a for and a while that do not do the same thing: let n = 2; while (n < 5) { n += 2; console.log(n); } writes out 4 and 6, but for (let n = 2; n < 5; n += 2) { console.log(n); } writes out 2 and 4");
  ("The one new fact is that the last part of a for always runs after the lines inside, so a line that changes n first in a while cannot simply move up into a for. It is the first lesson saying the two loops are not always the same.");
  ("Chosen by the human 2026-11-05, as the last of four for lessons after For with a running total.");
  ("Each screen holds both loops, picked 2026-11-05, at least one of each. The rejected reading was asking about the for alone: read backwards, the wrong program is the same numbers in the other loop, so with only a for to find, a learner could always pick the for and be right without reading the numbers.");
  ("Reading forwards, the wrong answers are the lines the other loop writes out with the same numbers, then one line fewer and one line more; each once and never the answer.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function loop_parts(numbers_program) {
    "from [start, bound, added]: the let of n, the condition, the line changing n and the line writing it out";
    let start = list_get(numbers_program, 0);
    let bound = list_get(numbers_program, 1);
    let added = list_get(numbers_program, 2);
    let r = {
      n_let: js_code_let_statement(name, start),
      condition: js_code_binary_spaced_nb(name, less, bound),
      changed: js_code_assign_operator_statement(name, plus, added),
      logged: js_code_console_log_statement(name),
    };
    return r;
  }
  function while_lines(numbers_program) {
    "let n = start; while (n < bound) { n += added; console.log(n); }";
    let parts = loop_parts(numbers_program);
    let write = js_code_start_above_lines(js_code_while_lines_multiple);
    let lines = write(parts.n_let, parts.condition, [
      parts.changed,
      parts.logged,
    ]);
    return lines;
  }
  function for_lines(numbers_program) {
    "for (let n = start; n < bound; n += added) { console.log(n); }";
    let parts2 = loop_parts(numbers_program);
    let lines2 = js_code_for_start_condition_update_lines(
      parts2.n_let,
      parts2.condition,
      [parts2.logged, parts2.changed],
    );
    return lines2;
  }
  function while_get(numbers_program) {
    let lines3 = while_lines(numbers_program);
    let joined = list_join_newline(lines3);
    return joined;
  }
  function for_get(numbers_program) {
    let lines4 = for_lines(numbers_program);
    let joined2 = list_join_newline(lines4);
    return joined2;
  }
  function is_while(code) {
    let part = js_keyword_while();
    let w = text_includes(code, part);
    return w;
  }
  function values_before(numbers_program) {
    "from [start, bound, added]: every value n holds when the loop asks and the answer is true, which is what the for writes out";
    let start2 = list_get(numbers_program, 0);
    let bound2 = list_get(numbers_program, 1);
    let added2 = list_get(numbers_program, 2);
    let values = [];
    let value = start2;
    while (less_than(value, bound2)) {
      list_add(values, value);
      value = add(value, added2);
    }
    return values;
  }
  function written(values) {
    let texts = list_map(values, json_to);
    let text = list_join_newline(texts);
    return text;
  }
  function batch_get() {
    "three programs, running one, two and three times, at least one in each loop";
    let groups = app_code_lesson_log_after_change_groups();
    let triples = list_shuffle_take_map(groups, 3, list_random_item);
    let writers = [for_get, while_get];
    let third = list_random_item(writers);
    let shuffled = [for_get, while_get, third];
    list_shuffle(shuffled);
    function program_of(triple, index) {
      let writer = list_get(shuffled, index);
      let code = writer(triple);
      return code;
    }
    let codes = list_map_index(triples, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the lines the other loop writes out, one line fewer and one line more; each once and never the answer";
    let numbers = text_integers(question);
    let added3 = list_get(numbers, 2);
    let before = values_before(numbers);
    function after(value2) {
      let a = add(value2, added3);
      return a;
    }
    let changed_first = list_map(before, after);
    let own = before;
    let other = changed_first;
    if (is_while(question)) {
      own = changed_first;
      other = before;
    }
    let last = list_last(own);
    let next = after(last);
    let more = list_concat(own, [next]);
    let candidates = [other, more];
    let size = list_size(own);
    if (less_than(1, size)) {
      let count = subtract(size, 1);
      let fewer = list_take(own, count);
      candidates = [fewer, more, other];
    }
    let texts2 = list_map(candidates, written);
    let found = list_without(texts2, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same numbers in the other loop";
    let numbers2 = text_integers(answer);
    let code2 = while_get(numbers2);
    if (is_while(answer)) {
      code2 = for_get(numbers2);
    }
    let found2 = [code2];
    return found2;
  }
  function said(root, value3, bound3, value_after) {
    "value < bound is true, so it writes out value, and n becomes value_after";
    let condition2 = js_code_binary_spaced_nb(value3, less, bound3);
    let json = json_to(value3);
    let json2 = json_to(value_after);
    app_learn_js_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so it writes out ",
      json,
      ", and ",
      name,
      " becomes ",
      json2,
    ]);
  }
  function above(root, context) {
    "The while with its change first remembered, then that change moved up into a for, what the for does run by run, and why the two differ";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_log_after_change,
      ["this writes out ", name, " after it has changed:"],
    );
    let numbers3 = [2, 5, 2];
    let value4 = written([4, 6]);
    let lines5 = while_lines(numbers3);
    app_learn_js_code_lines_writes_out(box_one, lines5, value4);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Move ",
      "n += 2",
      " up into a ",
      "for",
      ", and it writes out different lines:",
    ]);
    let value5 = written([2, 4]);
    let lines6 = for_lines(numbers3);
    app_learn_js_code_lines_writes_out(box_two, lines6, value5);
    said(box_two, 2, 5, 4);
    said(box_two, 4, 5, 6);
    let check = js_code_binary_spaced_nb(6, less, 5);
    let r2 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "",
      check,
      " is ",
      "false",
      ", so the ",
      r2,
      " is skipped, and the code continues after it",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "These two loops do not do the same thing",
    ]);
    let r3 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_three, [
      "The last part of a ",
      "for",
      " always runs after the lines inside the ",
      r3,
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "So this ",
      "for",
      " writes out ",
      name,
      " before it changes, and that ",
      "while",
      " writes it out after",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Some programs below are a ",
      "for",
      " and some are a ",
      "while",
      ", so read which one it is",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "When a for is not the same",
    "for (...) { console.log(n); }",
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
