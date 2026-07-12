import { not } from "./not.mjs";
import { list_unique_is } from "./list_unique_is.mjs";
export function list_duplicates_has(list) {
  let b = list_unique_is(list);
  let a = not(b);
  return a;
}
