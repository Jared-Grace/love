import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_unsent_store } from "./app_shared_unsent_store.mjs";
import { indexeddb_put_backend } from "./indexeddb_put_backend.mjs";
import { app_shared_unsent_database } from "./app_shared_unsent_database.mjs";
export async function app_shared_unsent_add_custom(path, file, custom) {
  "$plain path";
  "$plain file";
  "$plain custom";
  "Keep one file on this phone under the storage address it is going to, with the words to be sent beside it, so it survives having no internet, and the app being closed, until it is sent.";
  arguments_assert(arguments, 3);
  let store = app_shared_unsent_store();
  let record = {
    key: path,
    file,
    custom,
  };
  await indexeddb_put_backend(app_shared_unsent_database, store, path, record);
}
