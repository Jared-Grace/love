import { list_size } from "../../../love/public/src/list_size.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
export function digits_count() {
  let ds = digits();
  let size = list_size(ds);
  return size;
}
