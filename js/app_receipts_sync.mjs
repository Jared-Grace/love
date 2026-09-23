import { not } from "./not.mjs";
import { browser_online_is } from "./browser_online_is.mjs";
import { app_receipts_store } from "./app_receipts_store.mjs";
import { app_receipts_unsent_all } from "./app_receipts_unsent_all.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
import { indexeddb_delete_list_backend } from "./indexeddb_delete_list_backend.mjs";
import { app_receipts_database } from "./app_receipts_database.mjs";
export async function app_receipts_sync() {
  "Send every photo waiting on this phone, and forget each one here only once it has arrived - so a send cut off halfway leaves the photo waiting for next time rather than lost.";
  "Stops at the first failure, since with no internet the rest would fail the same way. The ones not reached stay waiting.";
  "Two of these running at once is harmless: a photo goes to the same address both times, so the second send only writes the same picture again.";
  let b = browser_online_is();
  if (not(b)) {
    return;
  }
  let store = app_receipts_store();
  let unsent = await app_receipts_unsent_all();
  for (let record of unsent) {
    let path = property_get(record, "key");
    let file = property_get(record, "file");
    try {
      await firebase_upload_blob_browser_quiet(path, file);
    } catch (e) {
      return;
    }
    await indexeddb_delete_list_backend(app_receipts_database, store, [path]);
  }
}
