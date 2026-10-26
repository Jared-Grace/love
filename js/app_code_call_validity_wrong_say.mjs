import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_size } from "./text_size.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { null_is } from "./null_is.mjs";
import { js_code_parenthesis_list } from "./js_code_parenthesis_list.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_comma } from "./js_code_comma.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { boolean_to_text_validity } from "./boolean_to_text_validity.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_code_call_validity_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner calls a function call valid or invalid wrongly: a call needs its ( , the , between its numbers and its ), and which of them this line has none of, as parts that take turns between words and code. null for a line that does not start with the name of a function the lessons call, and for a line whose answer the reason given here would not explain");
  ("Not picked: saying where a symbol is missing; the lesson takes a symbol out everywhere it stands, so having none of it is the whole of what went wrong");
  let line = text_to(question);
  let right_answer = text_to(answer);
  function starts(candidate) {
    let verb = property_get(candidate, "verb");
    let to = text_size(verb);
    let left = text_slice(line, 0, to);
    let s = equal(left, verb);
    return s;
  }
  let list = js_operators_arithmetic();
  let o = list_find_or_null(list, starts);
  if (null_is(o)) {
    return null;
  }
  let parens = js_code_parenthesis_list();
  let open = list_get(parens, 0);
  let close = list_get(parens, 1);
  let comma = js_code_comma();
  let missing = [];
  for (let symbol of [open, comma, close]) {
    let left2 = text_index_of_try(line, symbol);
    if (equal(left2, -1)) {
      list_add(missing, symbol);
    }
  }
  let valid = list_empty_is(missing);
  let right = boolean_to_text_validity(valid);
  let b = equal(right_answer, right);
  if (not(b)) {
    return null;
  }
  let parts = [
    "Remember: a function call needs a ",
    open,
    ", a ",
    comma,
    " between its numbers, and a ",
    close,
  ];
  if (valid) {
    list_add_multiple(parts, [
      ", and ",
      line,
      " has all of them, so it is valid",
    ]);
    return parts;
  }
  let words = ", and ";
  list_add_multiple(parts, [words, line]);
  words = " has no ";
  let first = true;
  for (let symbol of missing) {
    if (not(first)) {
      words = words + " or ";
    }
    first = false;
    list_add_multiple(parts, [words, symbol]);
    words = "";
  }
  list_add(parts, ", so it is invalid");
  return parts;
}
