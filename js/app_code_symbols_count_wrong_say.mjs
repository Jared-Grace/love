import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_size_text_to } from "./text_size_text_to.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_symbols_count_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong count of symbols: the symbols counted out one at a time, each named once, then the count they make, as parts that take turns between words and code. null when the answer is not the number of symbols in the question");
  ("A space is said in words, since a space in a code chip shows as nothing, and the lesson on spaces teaches that a space is a symbol like any other. Not picked: numbering each symbol, which doubles what is read for a learner who only needs to see that each one counts once");
  let line = text_to(question);
  let count = text_size_text_to(line);
  let right_answer = text_to(answer);
  let b = equal(count, right_answer);
  if (not(b)) {
    return null;
  }
  let parts = [];
  let words = "Remember: count each symbol once: ";
  function code_add(code) {
    list_add_multiple(parts, [words, code]);
    words = "";
  }
  function symbol_add(symbol, index) {
    let b2 = equal(index, 0);
    if (not(b2)) {
      words = text_combine(words, ", ");
    }
    let left = text_trim(symbol);
    let space = equal(left, "");
    if (space) {
      words = text_combine(words, "a space");
      return;
    }
    code_add(symbol);
  }
  let symbols = text_split_empty(line);
  each_index(symbols, symbol_add);
  words = text_combine(words, ", which makes ");
  code_add(count);
  list_add(parts, "");
  return parts;
}
