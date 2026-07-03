import { list_join_cycled } from "../../../love/public/src/list_join_cycled.mjs";
import { range_map } from "../../../love/public/src/range_map.mjs";
import { list_size_less_1 } from "../../../love/public/src/list_size_less_1.mjs";
export function list_join_invoker(list, mapper) {
  let size = list_size_less_1(list);
  let mapped = range_map(size, mapper);
  let joined = list_join_cycled(list, mapped);
  return joined;
}
