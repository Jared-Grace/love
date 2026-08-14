import { js_code_not } from "./js_code_not.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
export function js_code_not_parenthesis_wrapped(item) {
  "the code !(x) - the given code gathered into brackets and then given a not in front of it. The exact twin of js_code_negation_parenthesis_wrapped, which is the same two steps with a minus.";
  "The brackets are not decoration here: a not applies only to what is right after it, so !x === y is not the same line as !(x === y), and anything wider than a single term has to be gathered before the not can reach all of it.";
  let inside = js_code_wrap_parenthesis(item);
  let wrapped = js_code_not(inside);
  return wrapped;
}
