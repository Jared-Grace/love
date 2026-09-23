import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_store } from "./app_receipts_store.mjs";
import { indexeddb_put_backend } from "./indexeddb_put_backend.mjs";
import { app_receipts_database } from "./app_receipts_database.mjs";
export async function app_receipts_unsent_add_custom(path, file, custom) {
  "$plain path";
  "$plain file";
  "$plain custom";
  "Keep one file on this phone under the storage address it is going to, with the words to be sent beside it, so it survives having no internet, and the app being closed, until it is sent.";
  arguments_assert(arguments, 3);
  let store = app_receipts_store();
  let record = {
    key: path,
    file,
    custom,
  };
  await indexeddb_put_backend(app_receipts_database, store, path, record);
}
