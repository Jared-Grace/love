import { each } from "./each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_if_program_lines } from "./app_code_if_program_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_get } from "./list_get.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_map } from "./list_map.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_find } from "./list_find.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_statement_title_name_id_dots } from "./app_code_lesson_statement_title_name_id_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_cases_generic(
  words,
  title_code,
  above,
  seeds,
  parts_get,
) {
  arguments_assert(arguments, 5);
  ("an if lesson whose programs are an if around a line writing out one word, beside a line writing out another, after some setup lines: parts_get(seed, runs) hands back [setup lines, condition] for a program whose if runs when runs is true, and does not when it is false");
  ("Each screen asks four programs: two whose if runs and two whose if does not, and in each of those the if is first in one and last in the other, with eight different words. The four are put in two halves, each one that runs and one that does not and one with the if first and one with it last, so the two examples drawn together show both ways, as the human asked of If less than 2026-10-07.");
  ("Reading forwards, the wrong answers offered are the other two of the three things such a program could write out: both words, the word after the if alone, and the word inside the braces alone. They are found by running the same program with true and then false inside the parentheses, so they are right whatever the condition is.");
  ("Reading backwards, the wrong program offered is the same seed and the same words with runs turned the other way, so it writes out the other answer and can only be turned down by working the condition out. The program is read back - its two words, by running it with true and then false inside the parentheses, and which seed, way and order made it, by making every one and keeping the one that matches - and then made again turned the other way. Not picked: keeping each program beside its opposite as it was made, the first draft, which failed because the review screen builds the lesson afresh and so asked about programs the fresh lesson had never made.");
  let fruits = fruits_of_the_spirit();
  function program_get(seed, runs, inside_word, plain_word, if_first) {
    let parts = parts_get(seed, runs);
    let setup = list_first(parts);
    let condition = list_last(parts);
    let lines = app_code_if_program_lines(
      setup,
      condition,
      inside_word,
      plain_word,
      if_first,
    );
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs: runs first, runs last, does not run first, does not run last; in two halves, each holding one of each way";
    let words_taken = list_shuffle_take(fruits, 8);
    let trues = list_shuffle_take(seeds, 2);
    let falses = list_shuffle_take(seeds, 2);
    let first = list_first(trues);
    let last = list_last(trues);
    let first2 = list_first(falses);
    let last2 = list_last(falses);
    let chosen = [
      [first, true, true],
      [last, true, false],
      [first2, false, true],
      [last2, false, false],
    ];
    function program_of(choice, index) {
      let seed = list_get(choice, 0);
      let runs = list_get(choice, 1);
      let if_first = list_get(choice, 2);
      let index2 = multiply(index, 2);
      let inside_word = list_get(words_taken, index2);
      let plain_word = list_get(words_taken, index2 + 1);
      let code = program_get(seed, runs, inside_word, plain_word, if_first);
      return code;
    }
    let codes = list_map_index(chosen, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function if_line_is(line) {
    "the line that opens the if";
    let opens = text_starts_with(line, "if ");
    return opens;
  }
  function condition_set(code, condition) {
    "the same program with what is inside the parentheses replaced";
    let lines = text_split_newline(code);
    let opening = js_code_if_lines(condition, "");
    let opening_line = list_first(opening);
    function replaced(line) {
      if (if_line_is(line)) {
        return opening_line;
      }
      return line;
    }
    let mapped = list_map(lines, replaced);
    let joined = list_join_newline(mapped);
    return joined;
  }
  function outputs_get(code) {
    "the three things the program could write out: [both words, the word after the if, the word inside], read by running it with true and then false inside the parentheses";
    let code2 = condition_set(code, "true");
    let both = eval_console_log_lines(code2);
    let code3 = condition_set(code, "false");
    let plain = eval_console_log_lines(code3);
    let both_lines = text_split_newline(both);
    function inside_is(line) {
      let i = not_equal(line, plain);
      return i;
    }
    let inside = list_find(both_lines, inside_is);
    let outputs = [both, plain, inside];
    return outputs;
  }
  function decoys(question, answer) {
    "of the three things such a program could write out - both words, the word after the if, the word inside - the two that are not the answer";
    let all = outputs_get(question);
    function wrong(one) {
      let w = not_equal(one, answer);
      return w;
    }
    let found = list_filter(all, wrong);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program with runs turned the other way";
    let outputs = outputs_get(answer);
    let plain = list_get(outputs, 1);
    let inside = list_get(outputs, 2);
    let ways = [];
    function seed_each(seed) {
      function runs_each(runs) {
        function first_each(if_first) {
          let code = program_get(seed, runs, inside, plain, if_first);
          list_add(ways, [code, seed, runs, if_first]);
        }
        each([true, false], first_each);
      }
      each([true, false], runs_each);
    }
    each(seeds, seed_each);
    function made(way) {
      let left = list_first(way);
      let m = equal(left, answer);
      return m;
    }
    let way = list_find(ways, made);
    let item5 = list_get(way, 1);
    let b2 = list_get(way, 2);
    let n = not(b2);
    let item6 = list_get(way, 3);
    let opposite = program_get(item5, n, inside, plain, item6);
    let found = [opposite];
    return found;
  }
  let name_id = app_code_lesson_statement_title_name_id_dots(words, title_code);
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
