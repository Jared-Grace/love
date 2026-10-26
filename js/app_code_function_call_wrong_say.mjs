import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { js_tokenizer_normalized } from "./js_tokenizer_normalized.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_code_function_call_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks the wrong rewriting of a sum as a function call, or of a function call as a sum: which function the symbol is written as, and that the left number goes first and the right number second, as parts that take turns between words and code. null when the two sides are not one sum and the one call it is written as");
  ("Not picked: naming what is wrong with the pick; a wrong pick may have the wrong function, the wrong numbers or both, and the rule with the right rewriting beside it answers all three");
  let code = text_to(question);
  let right = text_to(answer);
  function tokens_get(text) {
    function get() {
      let tokens = js_tokenizer_normalized(text);
      return tokens;
    }
    let tokens = catch_null(get);
    return tokens;
  }
  let a = tokens_get(code);
  let b = tokens_get(right);
  if (null_is(a) || null_is(b)) {
    return null;
  }
  let sum = a;
  let call = b;
  let forwards = list_size_equal(a, 3);
  if (not(forwards)) {
    sum = b;
    call = a;
  }
  let b2 = list_size_equal(sum, 3);
  if (not(b2) || not(list_size_equal(call, 6))) {
    return null;
  }
  let symbol = list_get(sum, 1);
  function matches(o) {
    let left2 = property_get(o, "operator");
    let m = equal(left2, symbol);
    return m;
  }
  let list = js_operators_arithmetic();
  let o = list_find_or_null(list, matches);
  if (null_is(o)) {
    return null;
  }
  let verb = property_get(o, "verb");
  let left = list_get(sum, 0);
  let right_number = list_get(sum, 2);
  let built = list_join_space([verb, "(", left, ",", right_number, ")"]);
  let right2 = list_join_space(call);
  let b3 = equal(built, right2);
  if (not(b3)) {
    return null;
  }
  let parts = [
    "Remember: ",
    symbol,
    " is written as the function ",
    verb,
    ", with the left number first and the right number second inside its ",
    "( )",
    ", so ",
    code,
    " is ",
    right,
    "",
  ];
  if (not(forwards)) {
    parts = [
      "Remember: the function ",
      verb,
      " is written as ",
      symbol,
      ", with its first number on the left and its second number on the right, so ",
      code,
      " is ",
      right,
      "",
    ];
  }
  return parts;
}
