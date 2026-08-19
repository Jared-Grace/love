import { each } from "./each.mjs";
export async function indexeddb_delete_list_backend(db_get, store, keys) {
  "every named key goes in one transaction, the way a list of them lands in one, so giving back the space one bible takes is a single write rather than a thousand";
  let db = await db_get();
  let tx = db.transaction(store, "readwrite");
  let s = tx.objectStore(store);
  function lambda(key) {
    s.delete(key);
  }
  each(keys, lambda);
  await new Promise(function lambda4(resolve, reject) {
    tx.oncomplete = resolve;
    tx.onerror = function lambda2() {
      let v = reject(tx.error);
      return v;
    };
    tx.onabort = function lambda3() {
      let v2 = reject(tx.error);
      return v2;
    };
  });
}
