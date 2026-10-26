import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_first } from "./list_first.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_interleave_pair } from "./list_interleave_pair.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each } from "./each.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_flat } from "./list_flat.mjs";
export function app_code_programs_answers_paired(codes) {
  arguments_assert(arguments, 1);
  ("programs whose answers are one of two, put in pairs that each hold both answers, each pair in a fresh order: the first two programs write out different things, then the next two, and so on, as far as both answers last");
  ("The examples are the first programs of a list, two at a time, so pairing the list is what lets each pair of examples show both cases. Asked for by the human 2026-10-22: as many examples as the program has cases.");
  ("Each pair is shuffled because ",
    fn_name("list_interleave_pair"),
    " always puts its first list first, and a question asked about the first program of every pair would then always have the same answer.");
  let first = list_first(codes);
  let first_answer = eval_console_log_lines(first);
  function same_is(code) {
    let answer = eval_console_log_lines(code);
    let same_inner = equal(answer, first_answer);
    return same_inner;
  }
  let same = list_filter(codes, same_is);
  let other = list_filter_not(codes, same_is);
  let interleaved = list_interleave_pair(same, other);
  let pairs = list_chunk(interleaved, 2);
  each(pairs, list_shuffle);
  let r = list_flat(pairs);
  return r;
}
