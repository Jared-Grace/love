import { not } from "../../../love/public/src/not.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
export function set_includes_not(found, item) {
  let a = set_includes(found, item);
  let b = not(a);
  return b;
}
