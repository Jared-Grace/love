import { app_a_indexeddb_path_key } from "../../../love/public/src/app_a_indexeddb_path_key.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { not } from "../../../love/public/src/not.mjs";
export async function app_a_indexeddb_initialize() {
  let db_name = app_a.name;
  let store_files = "files";
  let version = 1;
  let db = await new Promise(function lambda4(resolve, reject) {
    let req = indexedDB.open(db_name, version);
    req.onupgradeneeded = function lambda() {
      let db = req.result;
      let b = db.objectStoreNames.contains(store_files);
      if (not(b)) {
        db.createObjectStore(store_files, {
          keyPath: app_a_indexeddb_path_key(),
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
  return db;
}
