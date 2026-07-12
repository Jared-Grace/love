import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_includes_not(list, item) {
  let b = list_includes(list, item);
  let n = not(b);
  return n;
}
