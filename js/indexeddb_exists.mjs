import { list_property_exists_not_error } from "./list_property_exists_not_error.mjs";
import { list_find_property_exists } from "./list_find_property_exists.mjs";
import { indexeddb_get_all } from "./indexeddb_get_all.mjs";
export async function indexeddb_exists(db_get, store, key) {
  let property = "key";
  let all = await indexeddb_get_all(db_get, store);
  list_property_exists_not_error(all, property);
  let e = list_find_property_exists(all, property, key);
  return e;
}
