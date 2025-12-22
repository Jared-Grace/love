import { not } from "../../../love/public/src/not.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_includes_not(list, name) {
  let b = list_includes(list, name);
  let n = not(b);
  return n;
}
