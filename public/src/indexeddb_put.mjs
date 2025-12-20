import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_put(db_get, store, path, content) {
  marker("1");
  let db = await db_get();
  let normalized = path_normalize(path);
  const tx = db.transaction(store, "readwrite");
  const s = tx.objectStore(store);
  s.put({
    path: normalized,
    content,
    mtime: Date.now(),
  });
  let v = tx.complete;
  return v;
}
