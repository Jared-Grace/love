import { list_add } from "./list_add.mjs";
export function range(count) {
  let r = [];
  for (let i = 0; i < count; i++) {
    list_add(r, i);
  }
  return r;
}
