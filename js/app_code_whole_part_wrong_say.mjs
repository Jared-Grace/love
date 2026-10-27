import { floor } from "./floor.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { js_tokenizer_normalized_or_null } from "./js_tokenizer_normalized_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_operator_percent_sign } from "./js_operator_percent_sign.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_whole_part_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks wrong in the whole part and remainder lessons: how Math.floor(a / b) * b is the whole part of a / b, what it comes to, or how taking it away from a leaves the remainder a % b, as parts that take turns between words and code. null when the two sides are not a division and one of those");
  ("2026-10-26: one reminder for the four pairs those lessons ask - a division and its whole part formula, a division and its whole part value in either order, a division and its remainder formula, and the remainder formula and its % line - because all four are worked from the same two numbers, and naming the pair is all that differs");
  let code = text_to(question);
  let right = text_to(answer);
  let a = js_tokenizer_normalized_or_null(code);
  let b = js_tokenizer_normalized_or_null(right);
  if (null_is(a) || null_is(b)) {
    return null;
  }
  let percent = js_operator_percent_sign();
  let numbers = null;
  for (let tokens of [a, b]) {
    let size = list_size(tokens);
    if (equal(size, 3)) {
      let middle = list_get(tokens, 1);
      if (equal(middle, "/") || equal(middle, percent)) {
        let item = list_get(tokens, 0);
        let item2 = list_get(tokens, 2);
        numbers = [item, item2];
      }
    } else if (equal(size, 10)) {
      let item3 = list_get(tokens, 4);
      let item4 = list_get(tokens, 6);
      numbers = [item3, item4];
    } else if (equal(size, 12)) {
      let item5 = list_get(tokens, 6);
      let item6 = list_get(tokens, 8);
      numbers = [item5, item6];
    }
    let b2 = null_is(numbers);
    if (not(b2)) {
      break;
    }
  }
  if (null_is(numbers)) {
    return null;
  }
  let dividend = list_get(numbers, 0);
  let divisor = list_get(numbers, 1);
  let n = Number(dividend);
  let d = Number(divisor);
  let b3 = greater_than(d, 0);
  if (not(b3) || not(Number.isInteger(n)) || not(Number.isInteger(d))) {
    return null;
  }
  let divided = divide(n, d);
  let quotient = floor(divided);
  let input = multiply(quotient, d);
  let whole_value = text_to(input);
  let division = js_code_binary_spaced_nb(dividend, "/", divisor);
  let floored = text_combine_multiple(["Math.floor(", division, ")"]);
  let whole = js_code_binary_spaced_nb(floored, "*", divisor);
  let remainder = js_code_binary_spaced_nb(dividend, "-", whole);
  let percent_code = js_code_binary_spaced_nb(dividend, percent, divisor);
  let forms = {
    division,
    whole,
    remainder,
    percent: percent_code,
    value: whole_value,
  };
  function kind_of(tokens) {
    let joined = list_join_space(tokens);
    for (let kind of object_property_names(forms)) {
      let code2 = property_get(forms, kind);
      let form_tokens = js_tokenizer_normalized_or_null(code2);
      let left = list_join_space(form_tokens);
      if (equal(left, joined)) {
        return kind;
      }
    }
    return null;
  }
  let kind_a = kind_of(a);
  let kind_b = kind_of(b);
  if (null_is(kind_a) || null_is(kind_b)) {
    return null;
  }
  let pair = [kind_a, kind_b].sort().join(" ");
  if (equal(pair, "division whole")) {
    let r = [
      "Remember: ",
      floored,
      " rounds ",
      division,
      " down to a whole number, and multiplying that by ",
      divisor,
      " gives back the part of ",
      dividend,
      " that ",
      divisor,
      " divides into wholly, so the whole part of ",
      division,
      " is ",
      whole,
      "",
    ];
    return r;
  }
  if (equal(pair, "division value")) {
    let t = text_to(quotient);
    let combined = js_code_binary_spaced_nb(quotient, "*", divisor);
    let r2 = [
      "Remember: the whole part of ",
      division,
      " is ",
      whole,
      ": ",
      floored,
      " is ",
      t,
      ", and ",
      combined,
      " is ",
      whole_value,
      "",
    ];
    return r2;
  }
  if (equal(pair, "division remainder")) {
    let r3 = [
      "Remember: ",
      whole,
      " is the whole part of ",
      division,
      ", and the remainder is what is left when the whole part is taken away from ",
      dividend,
      ", so it is ",
      remainder,
      "",
    ];
    return r3;
  }
  if (equal(pair, "percent remainder")) {
    let r4 = [
      "Remember: ",
      remainder,
      " takes the whole part of ",
      division,
      " away from ",
      dividend,
      ", which leaves the remainder, and that is written ",
      percent_code,
      "",
    ];
    return r4;
  }
  return null;
}
