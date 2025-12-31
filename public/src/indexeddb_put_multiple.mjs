import { indexeddb_put_multiple_backend } from "../../../love/public/src/indexeddb_put_multiple_backend.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  marker("1");
  let nexts = await indexeddb_put_multiple_backend(db_get, store, lookup);
  return nexts;
}
