import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { indexeddb_put_item } from "../../../love/public/src/indexeddb_put_item.mjs";
import { each_object_unordered_async } from "../../../love/public/src/each_object_unordered_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  marker("1");
  const db = await db_get();
  let previous = null;
  {
    const tx = db.transaction(store, "readonly");
    const s = tx.objectStore(store);
    let result = await object_values_map_async(
      object2,
      async function lambda(value) {},
    );
    previous = await indexeddb_put_item(key, s);
  }
  async function lambda7(value_get, key) {}
  await each_object_unordered_async(object, lambda7);
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
