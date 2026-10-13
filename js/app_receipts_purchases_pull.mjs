import { property_set } from "./property_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { browser_online_is } from "./browser_online_is.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { firebase_storage_list_browser_quiet } from "./firebase_storage_list_browser_quiet.mjs";
import { app_receipts_purchase_details_name } from "./app_receipts_purchase_details_name.mjs";
import { app_receipts_purchases_remote_group } from "./app_receipts_purchases_remote_group.mjs";
import { app_receipts_purchases_store } from "./app_receipts_purchases_store.mjs";
import { indexeddb_get_all_backend } from "./indexeddb_get_all_backend.mjs";
import { app_receipts_purchases_database } from "./app_receipts_purchases_database.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_unsent_all } from "./app_shared_unsent_all.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_receipts_purchase_path } from "./app_receipts_purchase_path.mjs";
import { list_includes } from "./list_includes.mjs";
import { firebase_storage_url_metadata } from "./firebase_storage_url_metadata.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_receipts_purchase_photos_merge } from "./app_receipts_purchase_photos_merge.mjs";
import { app_receipts_purchase_from_metadata } from "./app_receipts_purchase_from_metadata.mjs";
import { indexeddb_put_backend } from "./indexeddb_put_backend.mjs";
export async function app_receipts_purchases_pull(folder_code) {
  "$plain folder_code";
  "Bring down every purchase in the folder that another phone sent, and keep it here beside this phone's own, so the list shows the whole folder and stays there with no internet.";
  "A purchase whose details on this phone are still waiting to be sent is left as it is here: the change on this phone is the newer one, and it will reach storage on the next send.";
  "Photos from elsewhere are kept as addresses rather than pictures, so bringing a folder down costs a list and one small question per purchase, never every picture in it. A photo taken on this phone keeps its picture, so it still shows with no internet.";
  "The date, time, price, description, notes, colour and payment are read from what storage says about the details file, not from inside it: a page opened at an address the store does not know may ask about a file but not read it, and a phone reaching this machine by its number is exactly such a page.";
  arguments_assert(arguments, 1);
  let online = browser_online_is();
  if (not(online)) {
    return;
  }
  let prefix = text_combine_multiple(["receipts/", folder_code, "/"]);
  let names = await firebase_storage_list_browser_quiet(prefix);
  let details_name = app_receipts_purchase_details_name();
  let remote = app_receipts_purchases_remote_group(names, details_name);
  let store = app_receipts_purchases_store();
  let all = await indexeddb_get_all_backend(
    app_receipts_purchases_database,
    store,
  );
  let local = {};
  for (let purchase of all) {
    let property_name = property_get(purchase, "key");
    property_set(local, property_name, purchase);
  }
  let unsent = await app_shared_unsent_all();
  let waiting = list_map_property(unsent, "key");
  let project_url = firebase_storage_url_project_jg();
  for (let id of object_property_names(remote)) {
    let entry = property_get(remote, id);
    let b = property_get(entry, "details");
    if (not(b)) {
      continue;
    }
    let details_path = app_receipts_purchase_path(
      folder_code,
      id,
      details_name,
    );
    if (list_includes(waiting, details_path)) {
      continue;
    }
    let url = firebase_storage_url_metadata(details_path, project_url);
    let about = await http_json_browser_quiet(url);
    let custom = property_get_or(about, "metadata", {});
    let before = property_get_or(local, id, null);
    let file_names = property_get(entry, "photos");
    let photos = app_receipts_purchase_photos_merge(
      before,
      file_names,
      folder_code,
      id,
      project_url,
    );
    let purchase = app_receipts_purchase_from_metadata(
      id,
      folder_code,
      custom,
      photos,
    );
    await indexeddb_put_backend(
      app_receipts_purchases_database,
      store,
      id,
      purchase,
    );
  }
}
