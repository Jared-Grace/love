import { list_slice } from "./list_slice.mjs";
import { text_combine } from "./text_combine.mjs";
export function list_range(list, a, b) {
  let result = list_slice(list, a, text_combine(b, 1));
  return result;
}
