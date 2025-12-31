import { indexeddb_next } from "../../../love/public/src/indexeddb_next.mjs";
import { indexeddb_put_multiple_backend_transform } from "../../../love/public/src/indexeddb_put_multiple_backend_transform.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_put_multiple(db_get, store, lookup) {
  marker("1");
  async function lambda_async() {
    await indexeddb_put_multiple_backend_transform(db_get, store, lookup);
  }
  indexeddb_next(lambda_async);
}
