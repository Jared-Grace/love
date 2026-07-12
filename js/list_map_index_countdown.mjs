import { list_map_index } from "./list_map_index.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
export function list_map_index_countdown(list, lambda_inner) {
  let size = list_size(list);
  function lambda(item, index_forwards) {
    let index = subtract(size, index_forwards);
    let m = lambda_inner(item, index);
    return m;
  }
  let mapped = list_map_index(list, lambda);
  return mapped;
}
