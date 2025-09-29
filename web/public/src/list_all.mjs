import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_all(list, lambda$item) {
  let list2 = list_filter(list, lambda$item);
  let a = list_size(list2) === list_size(list);
  return a;
  {
    let filtered = list_filter(list, lambda$item);
    let v2 = list_size(filtered) === list_size(list);
    return v2;
  }
}
