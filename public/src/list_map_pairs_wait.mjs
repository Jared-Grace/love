import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { list_map_pairs } from "../../../love/public/src/list_map_pairs.mjs";
export async function list_map_pairs_wait(froms, tos, r2) {
  let mapped = list_map_pairs(froms, tos, r2);
  let v = await list_wait(mapped);
}
