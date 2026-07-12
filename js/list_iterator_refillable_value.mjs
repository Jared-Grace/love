import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { lambda_value } from "./lambda_value.mjs";
export function list_iterator_refillable_value(symbols_required) {
  let v = lambda_value(symbols_required);
  let next = list_iterator_refillable(v);
  return next;
}
