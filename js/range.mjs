import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export function range(count) {
  let r = [];
  for (let i = 0; less_than(i, count); i++) {
    list_add(r, i);
  }
  return r;
}
