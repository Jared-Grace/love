import { subtract } from "./subtract.mjs";
import { list_size_less_1 } from "./list_size_less_1.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_index_of_end(stack, item) {
  let index = list_index_of(stack, item);
  let sz = list_size_less_1(stack);
  let index_end = subtract(sz, index);
  return index_end;
}
