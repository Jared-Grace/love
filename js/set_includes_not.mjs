import { not } from "./not.mjs";
import { set_includes } from "./set_includes.mjs";
export function set_includes_not(set, item) {
  let a = set_includes(set, item);
  let b = not(a);
  return b;
}
