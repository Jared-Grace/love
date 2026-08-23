import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_arithmetic_to_value_symbols() {
  "the arithmetic operators a small line can be written with for ANY value from 2 up: plus, minus and divide";
  "Times is not among them. A small product needs a factor pair, and a value that is prime or large has none, so a caller asking for that value would be turned away where these three always answer.";
  "These are the three the parts maker answers to. It keys its makers by these same three symbols, so a fourth added here and nowhere else is simply never reached rather than reached and unanswered.";
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let division = js_operator_division_symbol();
  let symbols = [plus, minus, division];
  return symbols;
}
