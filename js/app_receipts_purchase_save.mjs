import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_purchases_store } from "./app_receipts_purchases_store.mjs";
import { property_get } from "./property_get.mjs";
import { indexeddb_put_backend } from "./indexeddb_put_backend.mjs";
import { app_receipts_purchases_database } from "./app_receipts_purchases_database.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { json_to } from "./json_to.mjs";
import { app_receipts_purchase_details_name } from "./app_receipts_purchase_details_name.mjs";
import { app_receipts_purchase_path } from "./app_receipts_purchase_path.mjs";
import { app_receipts_unsent_add_custom } from "./app_receipts_unsent_add_custom.mjs";
export async function app_receipts_purchase_save(purchase) {
  "$plain purchase";
  "Keep a purchase on this phone as it now stands, and put its details in line to be sent - so a date changed with no internet is kept here at once and reaches storage later.";
  "The price is a whole number of pesos written as digits, or empty text while none has been given; a purchase kept before prices were asked for has none.";
  "What is sent is the date, the time, the price, and the names of its photos, written over the same address each time, so the last change is the one storage holds.";
  "The date and time also go beside the file as words storage keeps about it, because every phone may ask about a file while some may not read one.";
  arguments_assert(arguments, 1);
  let store = app_receipts_purchases_store();
  let id = property_get(purchase, "key");
  await indexeddb_put_backend(
    app_receipts_purchases_database,
    store,
    id,
    purchase,
  );
  let photos = property_get(purchase, "photos");
  let date = property_get(purchase, "date");
  let time = property_get(purchase, "time");
  let price = property_get_or(purchase, "price", "");
  let details = {
    date,
    time,
    price,
    photos: list_map_property(photos, "name"),
  };
  let json = json_to(details);
  let blob = new Blob([json], {
    type: "application/json",
  });
  let custom = {
    date,
    time,
    price,
  };
  let folder_code = property_get(purchase, "folder_code");
  let details_name = app_receipts_purchase_details_name();
  let path = app_receipts_purchase_path(folder_code, id, details_name);
  await app_receipts_unsent_add_custom(path, blob, custom);
}
