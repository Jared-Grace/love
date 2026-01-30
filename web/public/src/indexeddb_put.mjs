import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { list_find_property_or_null } from "../../../love/public/src/list_find_property_or_null.mjs";
import { indexeddb_next } from "../../../love/public/src/indexeddb_next.mjs";
import { indexeddb_put_backend } from "../../../love/public/src/indexeddb_put_backend.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
export async function indexeddb_put(db_get, store, key, value_get) {
  let all = await indexeddb_get_all(db_get, store);
  let f = list_find_property_or_null(all, "key", key);
  const next = await value_get(f);
  if (null_not_is(value)) {
  }
  object_replace(f, next);
  async function lambda_async() {
    await indexeddb_put_backend(db_get, store, key, next);
  }
  indexeddb_next(lambda_async);
  return next;
}
