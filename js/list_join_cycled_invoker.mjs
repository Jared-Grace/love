import { list_join_cycled } from "./list_join_cycled.mjs";
import { range_map } from "./range_map.mjs";
import { list_size_less_1 } from "./list_size_less_1.mjs";
export function list_join_cycled_invoker(list, mapper) {
  let size = list_size_less_1(list);
  let mapped = range_map(size, mapper);
  let joined = list_join_cycled(list, mapped);
  return joined;
}
