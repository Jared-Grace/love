import { each } from "./each.mjs";
export async function indexeddb_put_list_backend(db_get, store, items) {
  ("every item lands in one transaction, so saving a whole bible is one write instead of a thousand");
  let db = await db_get();
  let tx = db.transaction(store, "readwrite");
  let s = tx.objectStore(store);
  function lambda(item) {
    s.put(item);
  }
  each(items, lambda);
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
