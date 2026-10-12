import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function app_receipts_purchases_remote_group(names, details_name) {
  "$plain names";
  "$plain details_name";
  "Groups the file names storage lists for one folder by the purchase each belongs to: for each purchase, whether its details file is there, and the names of its photos.";
  "Each name is spelled receipts, then the folder, then the purchase, then the file, so the purchase is the third part and the file the fourth.";
  arguments_assert(arguments, 2);
  let remote = {};
  for (let name of names) {
    let parts = name.split("/");
    let id = parts[2];
    let file_name = parts[3];
    let b = property_exists(remote, id);
    if (not(b)) {
      property_set(remote, id, {
        details: false,
        photos: [],
      });
    }
    let entry = property_get(remote, id);
    if (equal(file_name, details_name)) {
      entry.details = true;
    } else {
      let list = property_get(entry, "photos");
      list_add(list, file_name);
    }
  }
  return remote;
}
