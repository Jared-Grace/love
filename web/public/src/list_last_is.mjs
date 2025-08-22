import { list_last } from "./list_last.mjs";
export function list_last_is(list, item) {
  let last = list_last(list);
  let v = last === item;
  return v;
}
