import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_put(db_get, store, key, value_get) {
  let all = await indexeddb_get_all(db_get, store);
  let f = list_find_property(all, "key", key);
  const next = await value_get(f);
  object_replace(f, next);
  const db = await db_get();
  if (false) {
    const previous = await new Promise(function lambda3(resolve, reject) {
      const tx = db.transaction(store, "readonly");
      const s = tx.objectStore(store);
      const req = s.get(key);
      req.onsuccess = function lambda() {
        let v = resolve(req.result ?? null);
        return v;
      };
      req.onerror = function lambda2() {
        let v2 = reject(req.error);
        return v2;
      };
    });
  }
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
