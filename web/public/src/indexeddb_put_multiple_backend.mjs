import { error } from "../../../love/public/src/error.mjs";
import { each_object_values } from "../../../love/public/src/each_object_values.mjs";
export async function indexeddb_put_multiple_backend(db_get, store, nexts) {
  const tx = await db_get().transaction(store, "readwrite");
  const s = tx.objectStore(store);
  function lambda(n) {
    s.put(n);
  }
  each_object_values(nexts, lambda);
  await new Promise(function lambda6(resolve, reject) {
    tx.oncomplete = resolve;
    tx.onerror = function lambda4() {
      let v = reject(tx.error);
      return v;
    };
    tx.onabort = function lambda5() {
      let v4 = reject(tx.error);
      return v4;
    };
  });
}
