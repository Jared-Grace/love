import { list_size } from "./list_size.mjs";
import { digits } from "./digits.mjs";
export function digits_count() {
  let ds = digits();
  let size = list_size(ds);
  return size;
}
