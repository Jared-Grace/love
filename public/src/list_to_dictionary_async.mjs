import { list_map_wait } from "./list_map_wait.mjs";
import { marker } from "./marker.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function list_to_dictionary_async(list, lambda$item) {
  marker("1");
  let dictionary = {};
  async function lambda(item) {
    let value = await lambda$item(item);
    object_property_set(dictionary, item, value);
  }
  await list_map_wait(list, lambda);
  return dictionary;
}
