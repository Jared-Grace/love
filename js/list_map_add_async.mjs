import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function list_map_add_async(list_mapped, lambda, list_add_to) {
  arguments_assert(arguments, 3);
  let languages_verses_add = await list_map_async(list_mapped, lambda);
  list_add_multiple(list_add_to, languages_verses_add);
}
