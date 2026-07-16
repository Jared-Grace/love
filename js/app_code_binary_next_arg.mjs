import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_binary_next_arg(symbol, pair) {
  "an arg iterator that alternates a true-result and a false-result binary expression (left symbol right), operands chosen by pair(want_true); shared by the comparison and boolean-operator lessons";
  function expression(want_true) {
    let coordinates = pair(want_true);
    let left = property_get(coordinates, "left");
    let right = property_get(coordinates, "right");
    let e = js_code_binary_spaced_nb(left, symbol, right);
    return e;
  }
  function refill() {
    let true_case = expression(true);
    let false_case = expression(false);
    let list = [true_case, false_case];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  return next_arg;
}
