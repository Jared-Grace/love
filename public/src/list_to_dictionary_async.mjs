import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export async function list_to_dictionary_async(list, lambda$item) {
  marker("1");
  let dictionary = {};
  let lambda = async function lambda2(item) {
    let value = await lambda$item(item);
    object_property_set(dictionary, item, value);
  };
  await list_map_unordered_async(list, lambda);
  return dictionary;
}
