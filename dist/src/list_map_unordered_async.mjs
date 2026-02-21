import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export async function list_map_unordered_async(list, lambda$item) {
  let mapped = list_map(list, lambda$item);
  let waited = await list_wait(mapped);
  return waited;
}
