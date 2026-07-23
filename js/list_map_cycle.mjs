import { list_iterator_refillable_value } from "./list_iterator_refillable_value.mjs";
import { list_adder_each } from "./list_adder_each.mjs";
export function list_map_cycle(list, mappers) {
  let next_get = list_iterator_refillable_value(mappers);
  function lambda(la, item) {
    let mapper = next_get();
    let item_mapped = mapper(item);
    la(item_mapped);
  }
  let mapped = list_adder_each(list, lambda);
  return mapped;
}
