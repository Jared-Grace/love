import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function each_unordered_async(list, lambda$item) {
  await list_map_unordered_async(list, lambda$item);
}
