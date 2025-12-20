import { error } from "../../../love/public/src/error.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function indexeddb_initialize() {
  marker("1");
  const db_name = "ide_fs";
  const version = 1;
  const store_files = "files";
  let v3 = new Promise(function lambda4(resolve, reject) {
    const req = indexedDB.open(db_name, version);
    req.onupgradeneeded = function lambda() {
      const db = req.result;
      let b = db.objectStoreNames.contains(store_files);
      if (not(b)) {
        db.createObjectStore(store_files, {
          keyPath: "path",
        });
      }
    };
    req.onsuccess = function lambda2() {
      let v = resolve(req.result);
      return v;
    };
    req.onerror = function lambda3() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return v3;
}
