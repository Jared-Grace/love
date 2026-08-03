import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than_equal } from "./js_operator_less_than_equal.mjs";
import { js_operator_greater_than_equal } from "./js_operator_greater_than_equal.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
export function js_operators_comparison_fns() {
  "the six operators that compare two values and answer true or false, in the order the code lessons teach them - the four that order a pair, then the two that ask same or different";
  "One list because more than one lesson has to say which operators the word comparison names, and two lessons naming a different six would teach the learner a word with two meanings";
  let fns = [
    js_operator_less_than,
    js_operator_greater_than,
    js_operator_less_than_equal,
    js_operator_greater_than_equal,
    js_operator_triple_equal,
    js_operator_bang_double_equal,
  ];
  return fns;
}
