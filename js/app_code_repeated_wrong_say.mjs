import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { js_tokenizer_normalized_or_null } from "./js_tokenizer_normalized_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_first } from "./list_first.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_repeated_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks the wrong writing out of a * or ** line, or the wrong short form of a written-out line: that the short form writes its first number out as many times as its second number says, with the smaller operator between them, as parts that take turns between words and code. null when the two sides are not one short form and its writing out");
  ("2026-10-26: for the lessons on * as repeated + and ** as repeated *. Not picked: the value of either side, which these lessons leave out on purpose, because what they teach is what the short form means");
  let code = text_to(question);
  let right = text_to(answer);
  let a = js_tokenizer_normalized_or_null(code);
  let b = js_tokenizer_normalized_or_null(right);
  if (null_is(a) || null_is(b)) {
    return null;
  }
  let object = js_operator_asterisk();
  let times = property_get(object, "operator");
  let plus = js_operator_plus_symbol();
  let shorthands = [
    {
      short: times,
      long: plus,
    },
    {
      short: times + times,
      long: times,
    },
  ];
  function chain_count(tokens, left, symbol) {
    "how many times left is written in tokens with symbol between each, or null when tokens are not that";
    let size = list_size(tokens);
    if (less_than(size, 3) || equal(modulo(size, 2), 0)) {
      return null;
    }
    for (let index = 0; less_than(index, size); index++) {
      let want = left;
      let left2 = modulo(index, 2);
      if (equal(left2, 1)) {
        want = symbol;
      }
      let left3 = list_get(tokens, index);
      let b2 = equal(left3, want);
      if (not(b2)) {
        return null;
      }
    }
    let count = divide(size + 1, 2);
    return count;
  }
  function said(short_tokens, long_tokens, forwards) {
    let b3 = list_size_equal(short_tokens, 3);
    if (not(b3)) {
      return null;
    }
    let symbol = list_get(short_tokens, 1);
    let left = list_first(short_tokens);
    let count = list_get(short_tokens, 2);
    for (let s of shorthands) {
      let left4 = property_get(s, "short");
      let b4 = equal(left4, symbol);
      if (not(b4)) {
        continue;
      }
      let long = property_get(s, "long");
      let written = chain_count(long_tokens, left, long);
      if (null_is(written) || not(equal(text_to(written), count))) {
        return null;
      }
      let short_code = code;
      let long_code = right;
      if (not(forwards)) {
        short_code = right;
        long_code = code;
      }
      let parts = [
        "Remember: ",
        short_code,
        " writes its first number, ",
        left,
        ", out as many times as its second number, ",
        count,
        ", with ",
        long,
        " between them, so it is ",
        long_code,
        "",
      ];
      if (not(forwards)) {
        parts = [
          "Remember: ",
          long_code,
          " is ",
          left,
          " written out ",
          count,
          " times with ",
          long,
          " between them, and that is written ",
          short_code,
          ", the number first and how many times second",
          "",
        ];
      }
      return parts;
    }
    return null;
  }
  let forwards = said(a, b, true);
  if (null_not_is(forwards)) {
    return forwards;
  }
  let backwards = said(b, a, false);
  return backwards;
}
