import { list_join } from "./list_join.mjs";
import { string_empty } from "./string_empty.mjs";
export function list_join_empty(letters) {
  const e = string_empty();
  let joined = list_join(letters, e);
  return joined;
}
