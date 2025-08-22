import { list_slice } from "./list_slice.mjs";
export function list_range(list, a, b) {
  let result = list_slice(list, a, b + 1);
  return result;
}
