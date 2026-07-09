import { list_size } from "../../../love/public/src/list_size.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function list_index_end(list, index_from_end) {
  let v = subtract(subtract(list_size(list), 1), index_from_end);
  return v;
}
