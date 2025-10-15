import { list_map } from "../../../love/public/src/list_map.mjs";
import { range } from "../../../love/public/src/range.mjs";
export function range_1(count) {
  let r = range(count);
  function lambda(item) {}
  let mapped = list_map(list, lambda);
}
