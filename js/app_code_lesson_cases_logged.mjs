import { list_join_newline } from "./list_join_newline.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_between } from "./text_between.mjs";
import { json_from } from "./json_from.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { property_get } from "./property_get.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_cases_logged(
  fruits,
  cases_get,
  program_lines,
  word_count,
  values_changed,
  above,
  name_id,
) {
  "a lesson on programs that set some values and then write out words, one program for each case: cases_get hands back the values of each program on a screen, program_lines(values, words) writes one out, and values_changed(values) gives values that make the same program write out something else";
  "fruits is the lesson's own list, shared with above: the batch shuffles it in place, and above reads its first words.";
  "A wrong answer is the same program written again from other values, so the values and words are read back off the code: each let line holds a value after = and each console.log line holds a word in its parentheses. Not picked: remembering each program as it is written, since a quiz screen is put back from storage after a reload, so it can show a program this page never wrote.";
  function program_get(values, words) {
    let lines = program_lines(values, words);
    let joined = list_join_newline(lines);
    return joined;
  }
  function written_from(code) {
    "the values and words a program was written from, read back off its lines";
    let lines2 = text_split_newline(code);
    function setup_is(line) {
      let s = text_starts_with(line, "let ");
      return s;
    }
    function value_of(line2) {
      let between = text_between(line2, "= ", ";");
      let value = json_from(between);
      return value;
    }
    let setups = list_filter(lines2, setup_is);
    let values = list_map(setups, value_of);
    function said_is(line3) {
      let s2 = text_includes(line3, "console.log(");
      return s2;
    }
    function word_of(line4) {
      let between2 = text_between(line4, "(", ")");
      let word = json_from(between2);
      return word;
    }
    let said = list_filter(lines2, said_is);
    let words = list_map(said, word_of);
    let from = {
      values,
      words,
    };
    return from;
  }
  function batch_get() {
    "one program for each case, each with its own words, in a shuffled order";
    let cases = cases_get();
    function program_of(c) {
      let words2 = list_shuffle_take(fruits, word_count);
      let code = program_get(c, words2);
      return code;
    }
    let codes = list_map(cases, program_of);
    list_shuffle(codes);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "what the same program writes out from the values of each other case, each once, since two cases may write out the same";
    let from2 = written_from(question);
    let words3 = property_get(from2, "words");
    let cases2 = cases_get();
    function written_of(values2) {
      let code2 = program_get(values2, words3);
      let written = eval_console_log_lines(code2);
      return written;
    }
    let all = list_map(cases2, written_of);
    let found = list_without(all, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program written from changed values, so it writes out something else";
    let from3 = written_from(answer);
    let values3 = property_get(from3, "values");
    let words4 = property_get(from3, "words");
    let changed = values_changed(values3);
    let other = program_get(changed, words4);
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
