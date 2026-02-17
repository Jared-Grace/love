import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_map_index_countdown(sliced, lambda_inner) {
  let size = list_size(sliced);
  function lambda(item, index_forwards) {
    let index = subtract(size, index_forwards);
    let m = lambda_inner(item, index);
    return m;
  }
  let mapped = list_map_index(sliced, lambda);
  return mapped;
}
