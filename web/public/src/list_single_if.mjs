import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
export function list_single_if(declarations, lambda$only) {
  let s1 = list_size_1(declarations);
  if (s1) {
    let only = list_single(list);
    lambda$only(only);
  }
}
