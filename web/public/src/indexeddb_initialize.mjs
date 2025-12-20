import { error } from "../../../love/public/src/error.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function indexeddb_initialize() {
  marker("1");
  const DB_NAME = "ide_fs";
  const DB_VERSION = 1;
  const STORE_FILES = "files";
  function idb_init() {
    let v3 = new Promise(function lambda4(resolve, reject) {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function lambda() {
        const db = req.result;
        let b = db.objectStoreNames.contains(STORE_FILES);
        if (not(b)) {
          db.createObjectStore(STORE_FILES, {
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
}
