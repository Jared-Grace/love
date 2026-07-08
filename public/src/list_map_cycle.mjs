import { lambda_value } from "../../../love/public/src/lambda_value.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { list_adder_each } from "../../../love/public/src/list_adder_each.mjs";
export function list_map_cycle(list, mappers) {
  let v = lambda_value(mappers);
  let next_get = list_iterator_refillable(v);
  function lambda(la, item) {
    let mapper = next_get();
  }
  let r = list_adder_each(list, lambda);
}
