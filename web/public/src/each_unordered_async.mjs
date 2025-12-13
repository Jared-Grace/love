import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function each_unordered_async(languages, lambda2) {
  await list_map_unordered_async(languages, lambda2);
}
