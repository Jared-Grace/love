import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { js_tokenizer_normalized_or_null } from "./js_tokenizer_normalized_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_operator_percent_sign } from "./js_operator_percent_sign.mjs";
import { not } from "./not.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_remainder_subtract_wrong_say(
  question,
  answer,
  choice,
) {
  arguments_assert(arguments, 3);
  ("said when a learner picks the wrong taking away for a % line, or the wrong % line for a taking away: that % takes its second number away from its first again and again until what is left is smaller than the second number, as parts that take turns between words and code. null when the two sides are not one % line and that taking away");
  ("2026-10-26: for the lesson on % as repeated -. Not picked: saying only the remainder, which is what the taking away ends at but not what the lesson matches; the leftover is named at the end so the stopping rule can be seen to hold");
  let code = text_to(question);
  let right = text_to(answer);
  let a = js_tokenizer_normalized_or_null(code);
  let b = js_tokenizer_normalized_or_null(right);
  if (null_is(a) || null_is(b)) {
    return null;
  }
  let percent = js_operator_percent_sign();
  let minus = "-";
  function said(short_tokens, long_tokens, forwards) {
    let b2 = list_size_equal(short_tokens, 3);
    if (not(b2) || not(equal(list_get(short_tokens, 1), percent))) {
      return null;
    }
    let number = list_first(short_tokens);
    let divisor = list_get(short_tokens, 2);
    let size = list_size(long_tokens);
    if (
      less_than(size, 3) ||
      equal(modulo(size, 2), 0) ||
      not(equal(list_first(long_tokens), number))
    ) {
      return null;
    }
    for (let index = 1; less_than(index, size); index++) {
      let want = divisor;
      let left2 = modulo(index, 2);
      if (equal(left2, 1)) {
        want = minus;
      }
      let left3 = list_get(long_tokens, index);
      let b3 = equal(left3, want);
      if (not(b3)) {
        return null;
      }
    }
    let top = subtract(size, 1);
    let count = divide(top, 2);
    let d = Number(divisor);
    let left4 = Number(number);
    let right2 = multiply(count, d);
    let left = subtract(left4, right2);
    if (less_than(left, 0) || greater_than_equal(left, d)) {
      return null;
    }
    let left_code = text_to(left);
    let short_code = code;
    let long_code = right;
    if (not(forwards)) {
      short_code = right;
      long_code = code;
    }
    let parts = [
      "Remember: ",
      short_code,
      " takes its second number, ",
      divisor,
      ", away from its first number, ",
      number,
      ", again and again until what is left is smaller than ",
      divisor,
      ", so it is ",
      long_code,
      ", which leaves ",
      left_code,
      "",
    ];
    if (not(forwards)) {
      parts = [
        "Remember: ",
        long_code,
        " takes ",
        divisor,
        " away from ",
        number,
        " until what is left, ",
        left_code,
        ", is smaller than ",
        divisor,
        ", and that is written ",
        short_code,
        ", the number taken from first and the number taken away second",
        "",
      ];
    }
    return parts;
  }
  let forwards = said(a, b, true);
  if (null_not_is(forwards)) {
    return forwards;
  }
  let backwards = said(b, a, false);
  return backwards;
}
