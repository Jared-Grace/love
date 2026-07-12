import { list_find_property } from "./list_find_property.mjs";
import { indexeddb_get_all } from "./indexeddb_get_all.mjs";
export async function indexeddb_get(db_get, store, key) {
  let all = await indexeddb_get_all(db_get, store);
  let f = list_find_property(all, "key", key);
  return f;
}
