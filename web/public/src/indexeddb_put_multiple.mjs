import { indexeddb_put_multiple_backend } from "../../../love/public/src/indexeddb_put_multiple_backend.mjs";
import { indexeddb_next } from "../../../love/public/src/indexeddb_next.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  marker("1");
  async function lambda_async() {
    await indexeddb_put_multiple_backend(db_get, store, lookup);
  }
  indexeddb_next(lambda_async);
}
