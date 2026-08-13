import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { text_first } from "./text_first.mjs";
import { text_includes } from "./text_includes.mjs";
export function js_token_value_is(token) {
  "whether a token ENDS a value - a name, a number, a string, or a closing bracket - rather than being an operator, an opening bracket or a separator. Two spacing questions turn on it: a minus with a value in front of it subtracts and wants spaces, one without negates and is written against what follows; and a ( with a value in front of it is a call and is written against the name.";
  "Read off the token's FIRST character rather than from a list of the operators, because a list has to be kept up to date by hand and the entry somebody forgets reads as a value - silently, and only on the one lesson that uses it. The character test is total: every operator and separator JavaScript has starts with one of these, and nothing that names a value does.";
  "A missing token is not a value. It stands for the start of the line, where a minus can only be negating.";
  let missing = equal(token, null);
  if (missing) {
    return false;
  }
  let closers = [")", "]"];
  let closed = list_includes(closers, token);
  if (closed) {
    return true;
  }
  let symbols = "+-*/%<>=!&|^~?:.,;()[]{}";
  let first = text_first(token);
  let symbol = text_includes(symbols, first);
  let r = not(symbol);
  return r;
}
