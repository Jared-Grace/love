import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_minus } from "./js_operator_minus.mjs";
import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { js_operator_division } from "./js_operator_division.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than_equal } from "./js_operator_less_than_equal.mjs";
import { js_operator_greater_than_equal } from "./js_operator_greater_than_equal.mjs";
import { js_operator_double_equal } from "./js_operator_double_equal.mjs";
import { js_operator_bang_equal } from "./js_operator_bang_equal.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
export function js_operators_binary() {
  "Every operator written between the two things it acts on, paired with the function that stands for it.";
  "Plus is missing on purpose and always will be. It joins words as readily as it adds numbers, and nothing about the two things beside it says which was meant.";
  let operators = [
    js_operator_triple_equal(),
    js_operator_minus(),
    js_operator_asterisk(),
    js_operator_division(),
    js_operator_percent(),
    js_operator_double_asterisk(),
    js_operator_less_than(),
    js_operator_greater_than(),
    js_operator_less_than_equal(),
    js_operator_greater_than_equal(),
    js_operator_double_equal(),
    js_operator_bang_equal(),
    js_operator_bang_double_equal(),
  ];
  return operators;
}
