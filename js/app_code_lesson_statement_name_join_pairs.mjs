import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_string_concat_pair } from "./app_code_lesson_expression_string_concat_pair.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { range_map } from "./range_map.mjs";
export function app_code_lesson_statement_name_join_pairs() {
  arguments_assert(arguments, 0);
  ("the four pairs of text the lesson on joining two names gives its two names, one pair to a program, each written as code with its quotes");
  ("Drawn the way the lesson on joining two pieces of text draws them, from the shared verse, so a learner meets the same words joined the same way and only the names are new.");
  ("Each pair is two different words, which that drawing already makes sure of, so the two names never hold the same text and both have to be read.");
  function pair_of(index) {
    "one pair: two different words from the verse, each in quotes";
    let two = app_code_lesson_expression_string_concat_pair();
    let first = list_first(two);
    let last = list_last(two);
    let code_first = app_code_string_code(first);
    let code_last = app_code_string_code(last);
    let pair = [code_first, code_last];
    return pair;
  }
  let pairs = range_map(4, pair_of);
  return pairs;
}
