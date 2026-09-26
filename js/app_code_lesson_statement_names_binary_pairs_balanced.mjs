import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { eval_console_log_to_list } from "./eval_console_log_to_list.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_lesson_statement_names_binary_pairs_balanced(
  symbol,
  candidates,
) {
  arguments_assert(arguments, 2);
  ("four pairs for a lesson whose symbol answers only true or false: two drawn from the pairs that come out true and two from the pairs that come out false, in a fresh order");
  ("Only two answers exist, so a draw left to fall where it liked could hand a learner four programs that all answer the same way - and a learner answering every question with the same word would be right every time without having read a line.");
  ("Which pairs come out true is found by running each one rather than written beside it, so the split cannot disagree with what the programs really write out.");
  function answer_of(pair) {
    "what the symbol makes of this pair's two values, found by running it";
    let first = list_first(pair);
    let last = list_last(pair);
    let asked = js_code_binary_spaced_nb(first, symbol, last);
    let logged = js_code_console_log_statement(asked);
    let logs = eval_console_log_to_list(logged);
    let logged_args = list_first(logs);
    let value = list_first(logged_args);
    return value;
  }
  function true_is(pair) {
    "whether this pair comes out true";
    let value = answer_of(pair);
    let r = equal(value, true);
    return r;
  }
  function false_is(pair) {
    "whether this pair comes out false";
    let value = answer_of(pair);
    let r = equal(value, false);
    return r;
  }
  let trues = list_filter(candidates, true_is);
  let falses = list_filter(candidates, false_is);
  let trues_taken = list_shuffle_take(trues, 2);
  let falses_taken = list_shuffle_take(falses, 2);
  let both = list_concat(trues_taken, falses_taken);
  let pairs = list_shuffle_take(both, 4);
  return pairs;
}
