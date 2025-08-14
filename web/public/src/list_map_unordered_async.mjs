import { list_wait } from "./list_wait.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_unordered_async(list, lambda$item) {
  let mapped = list_map(list, lambda$item);
  let waited = list_wait(mapped);
  return waited;
}
