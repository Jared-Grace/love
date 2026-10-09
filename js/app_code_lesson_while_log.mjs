import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { list_take } from "./list_take.mjs";
import { subtract } from "./subtract.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while } from "./app_code_lesson_while.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_log() {
  arguments_assert(arguments, 0);
  ("a console.log inside a while: let n = 1; while (n < 9) { console.log(n); n += 3; } writes out 1, 4 and 7, one under the other");
  ("The one new fact is that a line inside a while runs once for every time the while runs, so a console.log inside it writes out one line each time, and the runs can be counted from what is written out.");
  ("Asked for by the human 2026-10-09, to sit straight after While: seeing each run written out makes the repeating plain before any lesson asks for a total kept in the head.");
  ("Each screen has one program from each of four counts of runs - one, two, three and four. None is left out, because a program that writes out nothing would show an empty answer.");
  ("Reading forwards, the wrong answers are the lines one run fewer, one run more, and every line written after n has changed rather than before; each once and never the answer.");
  ("Reading backwards, the wrong program is the same program compared against a number past where n ends, so it runs once more and writes out one line more.");
  ("The numbers are those of While, so n never lands exactly on the number it is compared against, except in the backwards wrong program.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function program_lines(start, bound, added) {
    "let n = start; while (n < bound) { console.log(n); n += added; }";
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
    "four programs, running one, two, three and four times";
    let groups = [
      [
        [3, 5, 4],
        [2, 4, 3],
      ],
      [
        [1, 6, 3],
        [2, 5, 2],
      ],
      [
        [1, 9, 3],
        [2, 7, 2],
      ],
      [
        [1, 8, 2],
        [2, 13, 3],
      ],
    ];
    let picked = list_shuffle_take(groups, 4);
    let triples = list_map(picked, list_random_item);
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
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the lines one run fewer, one run more, and every line written after n has changed; each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let added2 = list_get(numbers, 2);
    let values2 = values_of(start2, bound2, added2);
    let size = list_size(values2);
    let right = multiply(size, added2);
    let ended = add(start2, right);
    let more = list_concat(values2, [ended]);
    function after(value) {
      let a = add(value, added2);
      return a;
    }
    let shifted = list_map(values2, after);
    let candidates = [more, shifted];
    if (less_than(1, size)) {
      let count = subtract(size, 1);
      let fewer = list_take(values2, count);
      candidates = [fewer, more, shifted];
    }
    let texts = list_map(candidates, written);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number past where n ends, so it runs once more";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let added3 = list_get(numbers2, 2);
    let values3 = values_of(start3, bound3, added3);
    let left = list_size(values3);
    let right2 = multiply(left, added3);
    let ended2 = add(start3, right2);
    let sum = add(ended2, 1);
    let code4 = program_get(start3, sum, added3);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, value_after) {
    "value < bound is true, so it writes out value, and n becomes value_after";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let json = json_to(value);
    let json2 = json_to(value_after);
    html_div_cycle_code(root, [
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
    "While remembered, then the same while with a console.log inside, writing out each run";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while, [
      "a ",
      "while",
      " runs the lines inside its ",
      "{ ... }",
      " again and again, while what it asks is true.",
    ]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "Put a ",
      "console.log",
      " inside, and it writes out ",
      name,
      " every time the lines run:",
    ]);
    let lines3 = program_lines(1, 9, 3);
    let value2 = written([1, 4, 7]);
    app_code_code_lines_writes_out(box_two, lines3, value2);
    said(box_two, 1, 9, 4);
    said(box_two, 4, 9, 7);
    said(box_two, 7, 9, 10);
    let last = js_code_binary_spaced_nb(10, less, 9);
    html_div_cycle_code(box_two, [
      "",
      last,
      " is ",
      "false",
      ", so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
    html_div_cycle_code(box_two, [
      "Three lines were written out, so the ",
      "{ ... }",
      " ran three times",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "A log inside a while",
    "{ console.log(n); ... }",
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
