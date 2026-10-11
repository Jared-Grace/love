import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { app_receipts_purchase_path } from "./app_receipts_purchase_path.mjs";
import { list_add } from "./list_add.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
export function app_receipts_purchase_photos_merge(
  before,
  file_names,
  folder_code,
  id,
  project_url,
) {
  "$plain before";
  "$plain file_names";
  "$plain folder_code";
  "$plain id";
  "$plain project_url";
  "The photos one purchase has once what storage holds is brought down: every photo this phone already keeps for it, from before, which is null when this phone has never kept it, then each photo storage names that this phone does not keep yet, kept as its address rather than its picture.";
  arguments_assert(arguments, 5);
  let photos = [];
  let kept = {};
  if (not_equal(before, null)) {
    photos = property_get(before, "photos");
    for (let photo of photos) {
      kept[property_get(photo, "name")] = true;
    }
  }
  for (let file_name of file_names) {
    if (property_exists(kept, file_name)) {
      continue;
    }
    let path = app_receipts_purchase_path(folder_code, id, file_name);
    list_add(photos, {
      name: file_name,
      url: firebase_storage_url(path, project_url),
    });
  }
  return photos;
}
