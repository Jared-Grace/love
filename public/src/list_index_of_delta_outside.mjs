import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function list_index_of_delta_outside(list, item, delta) {
  let index = list_index_of(list, item);
  let index_next = text_combine(index, delta);
  return index_next;
}
