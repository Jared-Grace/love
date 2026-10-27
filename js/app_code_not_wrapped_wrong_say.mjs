import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_tokenizer_normalized_or_null } from "./js_tokenizer_normalized_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_not_wrapped_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("for a quiz between a comparison and the same line written with a ! around the opposite mark, in either direction: a !== b is !(a === b), and a === b is !(a !== b); null for any other pair");
  let different = js_operator_bang_double_equal_symbol();
  let same = js_operator_triple_equal_symbol();
  let bang = js_operator_bang_symbol();
  let q = js_tokenizer_normalized_or_null(question);
  let a = js_tokenizer_normalized_or_null(answer);
  if (equal(q, null) || equal(a, null)) {
    return null;
  }
  let short = null;
  let long = null;
  let short_text = null;
  let long_text = null;
  if (equal(q.length, 3) && equal(a.length, 6)) {
    short = q;
    long = a;
    short_text = question;
    long_text = answer;
  } else if (equal(a.length, 3) && equal(q.length, 6)) {
    short = a;
    long = q;
    short_text = answer;
    long_text = question;
  } else {
    return null;
  }
  let op = short[1];
  let flipped = null;
  if (equal(op, different)) {
    flipped = same;
  } else if (equal(op, same)) {
    flipped = different;
  } else {
    return null;
  }
  let matches =
    equal(long[0], bang) &&
    equal(long[1], "(") &&
    equal(long[2], short[0]) &&
    equal(long[3], flipped) &&
    equal(long[4], short[2]) &&
    equal(long[5], ")");
  if (not(matches)) {
    return null;
  }
  let difference = subtract(long_text.length, 1);
  let inner = long_text.slice(2, difference);
  if (equal(short_text, question)) {
    let said = [
      "Remember: ",
      op,
      " asks the opposite of ",
      flipped,
      ", so ",
      short_text,
      " is the same line as ",
      long_text,
      ": the same two sides, with ",
      flipped,
      " between them and a ",
      bang,
      " around it",
    ];
    return said;
  }
  let parts = [
    "Remember: ",
    long_text,
    " flips what ",
    inner,
    " says, and the mark that says the opposite of ",
    flipped,
    " is ",
    op,
    ", so it is ",
    short_text,
    ", the same two sides with no ",
    bang,
    "",
  ];
  return parts;
}
