import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_map_index_countdown(sliced, lambda_inner) {
  let size = list_size(sliced);
  function lambda(item, index) {
    let difference = subtract(size, index);
    let r2 = lambda_inner(item, difference);
    return r2;
  }
  let mapped = list_map_index(sliced, lambda);
  return mapped;
}
