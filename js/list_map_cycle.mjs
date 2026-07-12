import { lambda_value } from "./lambda_value.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_adder_each } from "./list_adder_each.mjs";
export function list_map_cycle(list, mappers) {
  let v = lambda_value(mappers);
  let next_get = list_iterator_refillable(v);
  function lambda(la, item) {
    let mapper = next_get();
    let item_mapped = mapper(item);
    la(item_mapped);
  }
  let mapped = list_adder_each(list, lambda);
  return mapped;
}
