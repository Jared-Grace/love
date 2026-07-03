import { list_add } from "../../../love/public/src/list_add.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function text_multiply(value, times) {
  list_add(list, item);
  let result = "";
  function lambda4(i) {
    result += value;
  }
  each_range(times, lambda4);
  return result;
}
