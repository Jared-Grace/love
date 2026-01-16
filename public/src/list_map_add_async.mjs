import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
export async function list_map_add_async(
  languages_chosen,
  lambda2,
  languages_verses,
) {
  let languages_verses_add = await list_map_async(languages_chosen, lambda2);
  list_add_multiple(languages_verses, languages_verses_add);
}
