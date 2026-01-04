import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_to_dictionary_generic_async } from "../../../love/public/src/list_to_dictionary_generic_async.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function list_to_dictionary_async(list, lambda$item) {
  marker("1");
  let v = list_to_dictionary_generic_async(lambda$item);
  let dictionary = object_property_get(v, "dictionary");
  let lambda = object_property_get(v, "lambda");
  await list_map_unordered_async(list, lambda);
  return dictionary;
}
