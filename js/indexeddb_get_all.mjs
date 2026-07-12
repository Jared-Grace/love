import { indexeddb_get_all_backend } from "./indexeddb_get_all_backend.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { not } from "./not.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
export async function indexeddb_get_all(db_get, store) {
  let exists = global_function_property_exists(indexeddb_get_all, store);
  if (not(exists)) {
    let all = await indexeddb_get_all_backend(db_get, store);
    global_function_property_set(indexeddb_get_all, store, all);
  }
  let list = global_function_property_get(indexeddb_get_all, store);
  return list;
}
