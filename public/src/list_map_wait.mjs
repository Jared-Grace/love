import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
export async function list_map_wait(list, lambda) {
  let mapped = list_map(list, lambda);
  let v = await list_wait(mapped);
}
