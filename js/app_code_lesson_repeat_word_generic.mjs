import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_while_word_programs } from "./app_code_while_word_programs.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_take } from "./list_take.mjs";
import { list_min } from "./list_min.mjs";
import { list_max } from "./list_max.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { json_to } from "./json_to.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_repeat_word_generic(
  program_lines,
  values_of,
  above,
  name_id,
) {
  arguments_assert(arguments, 4);
  ("A lesson where a loop writes out the same word each run, whichever way n counts. program_lines is given (low, high, word) and returns the program's lines; values_of is given (low, high) and returns every value n holds when the question is true.");
  ("Each program's two numbers are taken as the lower and the higher, because that reads the same both ways: a higher higher number means one run more whether n stops at it or starts from it.");
  ("Each screen has one program from each of three counts of runs - one, two and three.");
  ("Reading forwards, the wrong answers are the word one run fewer (with one run, the number and the word together instead), one run more, and the numbers n holds rather than the word; each once and never the answer.");
  ("Reading backwards, the wrong program has a higher number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer.");
  function program_get(low, high, said_word) {
    let lines = program_lines(low, high, said_word);
    let joined = list_join_newline(lines);
    return joined;
  }
  function words_of(values, said_word) {
    "the word, once for each value";
    function word_of() {
      return said_word;
    }
    let words = list_map(values, word_of);
    let text = list_join_newline(words);
    return text;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let codes = app_code_while_word_programs(program_get);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function pair_of(text) {
    "the two numbers of a program, whichever it writes first";
    let numbers = text_integers(text);
    let two = list_take(numbers, 2);
    return two;
  }
  function decoys(question, answer) {
    "the word one run fewer or, with one run, the number and the word together, one run more, and the numbers n holds rather than the word; each once and never the answer";
    let pair = pair_of(question);
    let lower = list_min(pair);
    let higher = list_max(pair);
    let answer_lines = text_split_newline(answer);
    let answer_word = list_first(answer_lines);
    let values2 = values_of(lower, higher);
    let size = list_size(values2);
    let sum = add(higher, 1);
    let v = values_of(lower, sum);
    let more = words_of(v, answer_word);
    let held_texts = list_map(values2, json_to);
    let held = list_join_newline(held_texts);
    ("with one run there is no run fewer, so its place goes to the number and the word together, as though n were written out too, which is the one new fact of this lesson - otherwise the quiz fills the place with another program's answer, whose different word is easy to rule out; the word three times was the other choice, passed over because a second count teaches nothing the word twice does not");
    let both = list_join_newline([held, answer_word]);
    let candidates = [more, held, both];
    if (less_than(1, size)) {
      let count = subtract(size, 1);
      let fewer_values = list_take(values2, count);
      let fewer = words_of(fewer_values, answer_word);
      candidates = [fewer, more, held];
    }
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program with its higher number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer";
    let pair2 = pair_of(answer);
    let lower2 = list_min(pair2);
    let higher2 = list_max(pair2);
    let question_lines = text_split_newline(question);
    let question_word = list_first(question_lines);
    let values3 = values_of(lower2, higher2);
    let left = list_size(values3);
    let higher3 = add(higher2, 1);
    let most = app_code_while_runs_max();
    if (less_than_equal(most, left)) {
      higher3 = subtract(higher2, 1);
    }
    let code = program_get(lower2, higher3, question_word);
    let found2 = [code];
    return found2;
  }
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
