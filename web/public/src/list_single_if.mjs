import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
export function list_single_if(list, lambda$only) {
  let s1 = list_size_1(list);
  if (s1) {
    let only = list_single(list);
    lambda$only(only);
  }
}
