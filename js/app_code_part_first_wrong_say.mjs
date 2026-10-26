import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_tokenizer_normalized_or_null } from "./js_tokenizer_normalized_or_null.mjs";
export function app_code_part_first_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("for a quiz asking which part of a line with two marks is solved first, as in 4 + 4 * 5: says that * and / are solved before + and -, wherever they stand; null unless the answer is the part around the one mark of the two that goes first");
  let q = js_tokenizer_normalized_or_null(question);
  let a = js_tokenizer_normalized_or_null(answer);
  if (
    equal(q, null) ||
    equal(a, null) ||
    not_equal(q.length, 5) ||
    not_equal(a.length, 3)
  ) {
    return null;
  }
  let high = ["*", "/"];
  let low = ["+", "-"];
  let first_high = high.includes(q[1]) && low.includes(q[3]);
  let second_high = low.includes(q[1]) && high.includes(q[3]);
  if (not(first_high) && not(second_high)) {
    return null;
  }
  let start = first_high ? 0 : 2;
  let part = q.slice(start, start + 3);
  let left = part.join(" ");
  let right = a.join(" ");
  if (not_equal(left, right)) {
    return null;
  }
  let op_high = part[1];
  let op_low = first_high ? q[3] : q[1];
  let parts = [
    "Remember: ",
    op_high,
    " is solved before ",
    op_low,
    first_high ? ", so in " : ", even when it stands second, so in ",
    question,
    " the part ",
    answer,
    " is solved first",
  ];
  return parts;
}
