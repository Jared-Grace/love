import { subtract } from "../../../love/public/src/subtract.mjs";
import { list_size_less_1 } from "../../../love/public/src/list_size_less_1.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function list_index_of_end(stack, item) {
  let index = list_index_of(stack, item);
  let sz1 = list_size_less_1(stack);
  let index_end = subtract(sz1, index);
  return index_end;
}
