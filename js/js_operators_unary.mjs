import { js_operator_math_floor } from "./js_operator_math_floor.mjs";
import { js_operator_bang } from "./js_operator_bang.mjs";
export function js_operators_unary() {
  "Every operator written before the one thing it acts on, paired with the function that stands for it.";
  let bang = js_operator_bang();
  let math_floor = js_operator_math_floor();
  let operators = [bang, math_floor];
  return operators;
}
