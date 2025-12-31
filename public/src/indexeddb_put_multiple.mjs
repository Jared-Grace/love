import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { indexeddb_put_item } from "../../../love/public/src/indexeddb_put_item.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  marker("1");
  const db = await db_get();
  let previous = null;
  {
    const tx = db.transaction(store, "readonly");
    const s = tx.objectStore(store);
    async function lambda2(key) {}
    omua;
    previous = await indexeddb_put_item(key, s);
  }
  let result = await object_values_map_async(
    object,
    async function lambda(value) {},
  );
  const next = await value_get(previous);
  const tx = db.transaction(store, "readwrite");
  const s = tx.objectStore(store);
  s.put(next);
  await new Promise(function lambda6(resolve, reject) {
    tx.oncomplete = resolve;
    tx.onerror = function lambda4() {
      let v3 = reject(tx.error);
      return v3;
    };
    tx.onabort = function lambda5() {
      let v4 = reject(tx.error);
      return v4;
    };
  });
  return next;
}
