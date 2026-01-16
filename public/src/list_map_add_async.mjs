import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
export async function list_map_add_async(list_mapped, lambda, list_add_to) {
  assert_arguments(arguments, 3);
  let languages_verses_add = await list_map_async(list_mapped, lambda);
  list_add_multiple(list_add_to, languages_verses_add);
}
