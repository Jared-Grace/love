import { list_join_newline } from "./list_join_newline.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_get } from "./list_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_ab_logged(
  fruits,
  program_lines,
  word_count,
  b_reached_when_a,
  above,
  name_id,
) {
  "a lesson on a program that sets a and b, then writes out words from ifs that ask them; the four programs are a and b each true or false";
  "fruits is the lesson's own list, shared with above: the batch shuffles it in place, and above reads its first words.";
  "b_reached_when_a is the value of a for which the if asking b is reached: true when that if sits inside if (a), false when it sits inside the else.";
  function program_get(values, words) {
    let lines = program_lines(values, words);
    let joined = list_join_newline(lines);
    return joined;
  }
  function values_of(code) {
    "the two values a program's first two lines set";
    let lines2 = text_split_newline(code);
    let first = list_get(lines2, 0);
    let second = list_get(lines2, 1);
    let value_a = text_includes(first, "true");
    let value_b = text_includes(second, "true");
    let values2 = [value_a, value_b];
    return values2;
  }
  function program_set(code2, values3) {
    "the same program with its first two lines setting these values";
    let lines3 = text_split_newline(code2);
    let item = list_get(values3, 0);
    let setup_a = js_code_let_json_statement("a", item);
    let item2 = list_get(values3, 1);
    let setup_b = js_code_let_json_statement("b", item2);
    let rest = list_skip(lines3, 2);
    let lines4 = list_concat([setup_a, setup_b], rest);
    let joined2 = list_join_newline(lines4);
    return joined2;
  }
  function batch_get() {
    "four programs: a and b each true or false, each with different words";
    let cases = [
      [true, true],
      [true, false],
      [false, false],
      [false, true],
    ];
    function program_of(c) {
      let words = list_shuffle_take(fruits, word_count);
      let code3 = program_get(c, words);
      return code3;
    }
    let codes = list_map(cases, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "what the other programs write out, each once, since two programs may write out the same";
    let ways = [
      [true, true],
      [true, false],
      [false, false],
      [false, true],
    ];
    function written_of(values4) {
      let code4 = program_set(question, values4);
      let written = eval_console_log_lines(code4);
      return written;
    }
    let all = list_map(ways, written_of);
    let found = list_without(all, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program with b changed when the if asking b is reached, and a changed when it is not";
    let values5 = values_of(answer);
    let value_a2 = list_get(values5, 0);
    let value_b2 = list_get(values5, 1);
    let n = not(value_b2);
    let changed = [value_a2, n];
    let b = equal(value_a2, b_reached_when_a);
    if (not(b)) {
      changed = [b_reached_when_a, value_b2];
    }
    let other = program_set(answer, changed);
    let found2 = [other];
    return found2;
  }
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
