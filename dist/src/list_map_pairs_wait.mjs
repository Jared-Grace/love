import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { list_map_pairs } from "../../../love/public/src/list_map_pairs.mjs";
export async function list_map_pairs_wait(lefts, rights, lambda$left$right) {
  let mapped = list_map_pairs(lefts, rights, lambda$left$right);
  let waited = await list_wait(mapped);
  return waited;
}
