import { marker } from "../../../love/public/src/marker.mjs";
export function indexeddb_put() {
  marker("1");
  const tx = db.transaction(STORE_FILES, "readwrite");
  const store = tx.objectStore(STORE_FILES);
  store.put({
    path,
    content,
    mtime: Date.now(),
  });
  let v = tx.complete;
  return v;
}
