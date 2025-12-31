import { indexeddb_get_all_backend } from "../../../love/public/src/indexeddb_get_all_backend.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
export async function indexeddb_get_all(db_get, store) {
  let exists = global_function_property_exists(indexeddb_get_all, store);
  if (not(exists)) {
    let all = await indexeddb_get_all_backend(db_get, store);
    global_function_property_set(indexeddb_get_all, store, all);
  }
  let list = global_function_property_get(indexeddb_get_all, store);
  return list;
}
