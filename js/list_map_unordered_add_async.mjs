import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function list_map_unordered_add_async(
  list_mapped,
  lambda,
  list_add_to,
) {
  arguments_assert(arguments, 3);
  let mapped = await list_map_unordered_async(list_mapped, lambda);
  list_add_multiple(list_add_to, mapped);
}
