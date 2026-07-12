import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function list_index_end(list, index_from_end) {
  let v = subtract(subtract(list_size(list), 1), index_from_end);
  return v;
}
