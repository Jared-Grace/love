import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_to_dictionary_generic_async } from "../../../love/public/src/list_to_dictionary_generic_async.mjs";
export async function list_to_dictionary_async(list, lambda$item) {
  let v = list_to_dictionary_generic_async(lambda$item);
  let dictionary = property_get(v, "dictionary");
  let lambda = property_get(v, "lambda");
  await list_map_async(list, lambda);
  return dictionary;
}
