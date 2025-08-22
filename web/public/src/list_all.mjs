import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function list_all(list, lambda$item) {
  let list2 = list_filter(list, lambda$item);
  let v = list_size(list2) === list_size(list);
  return v;
  {
    let filtered = list_filter(list, lambda$item);
    let v2 = list_size(filtered) === list_size(list);
    return v2;
  }
}
