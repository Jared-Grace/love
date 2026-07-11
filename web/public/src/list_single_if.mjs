import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_ } from "../../../love/public/src/list_size_1.mjs";
export function list_single_if(list, lambda$only) {
  let s = list_size_(list);
  if (s) {
    let only = list_single(list);
    lambda$only(only);
  }
}
