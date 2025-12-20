import { marker } from "../../../love/public/src/marker.mjs";
export function indexeddb_initialize() {
  marker("1");const DB_NAME = "ide_fs";
const DB_VERSION = 1;
const STORE_FILES = "files";

function idb_init() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);

    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_FILES)) {
        db.createObjectStore(STORE_FILES, { keyPath: "path" });
      }
    };

    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
}
