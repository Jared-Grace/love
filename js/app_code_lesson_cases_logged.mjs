import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
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
  "Each program written is remembered with the values and words it was written from, so a wrong answer is the same program written again from other values - never found by reading the code back, which would tie this to how the values are spelled.";
  let made = {};
  function program_get(values, words) {
    let lines = program_lines(values, words);
    let joined = list_join_newline(lines);
    made[joined] = {
      values,
      words,
    };
    return joined;
  }
  function batch_get() {
    "one program for each case, each with its own words, in a shuffled order";
    let cases = cases_get();
    function program_of(c) {
      let words = list_shuffle_take(fruits, word_count);
      let code = program_get(c, words);
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
  function written_from(code) {
    "the values and words a program on this screen was written from";
    let found = property_get(made, code);
    return found;
  }
  function decoys(question, answer) {
    "what the same program writes out from the values of each other case, each once, since two cases may write out the same";
    let from = written_from(question);
    let words2 = property_get(from, "words");
    let cases2 = cases_get();
    function written_of(values) {
      let code2 = program_get(values, words2);
      let written = eval_console_log_lines(code2);
      return written;
    }
    let all = list_map(cases2, written_of);
    let found2 = list_without(all, answer);
    let once = list_unique(found2);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program written from changed values, so it writes out something else";
    let from2 = written_from(answer);
    let values2 = property_get(from2, "values");
    let words3 = property_get(from2, "words");
    let changed = values_changed(values2);
    let other = program_get(changed, words3);
    let found3 = [other];
    return found3;
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
