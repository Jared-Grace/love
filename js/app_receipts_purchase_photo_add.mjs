import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { app_receipts_purchase_path } from "./app_receipts_purchase_path.mjs";
import { app_receipts_unsent_add } from "./app_receipts_unsent_add.mjs";
import { app_receipts_purchase_save } from "./app_receipts_purchase_save.mjs";
export async function app_receipts_purchase_photo_add(purchase, file) {
  "$plain purchase";
  "$plain file";
  "Add one photo to a purchase - a receipt or anything else about it - keep it on this phone, and put it in line to be sent beside the purchase's details.";
  "Each photo gets a random name of its own so two taken in one moment cannot land on one address.";
  arguments_assert(arguments, 2);
  let extension = file.name.split(".").pop();
  let built = uuid_browser();
  let name = text_combine_multiple([built, ".", extension]);
  let photos = property_get(purchase, "photos");
  list_add(photos, {
    name,
    file,
  });
  let folder_code = property_get(purchase, "folder_code");
  let id = property_get(purchase, "key");
  let path = app_receipts_purchase_path(folder_code, id, name);
  await app_receipts_unsent_add(path, file);
  await app_receipts_purchase_save(purchase);
}
