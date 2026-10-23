import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_code_program_step_assign_none_words(line_text) {
  arguments_assert(arguments, 1);
  ("Why a line with no assign has none, said by its sign - 2026-10-23, at the human's asking: If the line has a = then there is an assign, but this line does not have a =. Shaped like the declare one, so it says if and not if and only if. Words alternate text and code, text first");
  ("A line can hold = inside another operator, like === or ==, and saying it has no = would then be false. So those operators are named, in the order the line has them, and the = is said to be one by itself - the human's words: Although this has === and ==, this line does not have a = by itself. Not picked: saying by itself on every line, which asks the learner to think about operators the line does not have");
  let found = line_text.match(/[!=]==?|[<>]=/g) || [];
  let ops = list_unique(found);
  if (list_empty_is(ops)) {
    let r = [
      "If the line has a ",
      "=",
      ", then there is an assign. But this line does not have a ",
      "=",
    ];
    return r;
  }
  let words = [
    "If the line has a ",
    "=",
    " by itself, then there is an assign. Although this line has ",
  ];
  function lambda(op, i) {
    if (greater_than(i, 0)) {
      let right = subtract(ops.length, 1);
      let joiner = equal(i, right) ? " and " : ", ";
      words.push(joiner);
    }
    words.push(op);
  }
  ops.forEach(lambda);
  words.push(", it does not have a ", "=", " by itself");
  return words;
}
