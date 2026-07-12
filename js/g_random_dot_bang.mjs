import { list_random_item } from "./list_random_item.mjs";
export function g_random_dot_bang() {
  let r = list_random_item([".", "!"]);
  return r;
}
