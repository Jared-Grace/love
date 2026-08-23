import { apps_names } from "./apps_names.mjs";
import { firebase_prod_app_disk_hashes } from "./firebase_prod_app_disk_hashes.mjs";
import { firebase_public_expected } from "./firebase_public_expected.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function firebase_public_expected_changed() {
  "The apps whose files waiting to be sent are not the files that were approved, which is to say what somebody would be sending without having meant to";
  "The whole site goes out together, so a sending carries every app in the folder and not the one somebody came for. An app whose waiting files still match what was approved rides along carrying nothing nobody agreed to. Every app in this answer is one where the folder has moved since anybody looked at it.";
  "Nothing here goes near a wire. Both sides are a handful of short words - one read off the folder, one written down when the app was promoted - so the whole set can be asked about in the time a single request would take to leave the machine, which is what lets it be asked before every sending rather than once in a while.";
  "An app nobody has promoted since this record began is counted as changed, because not having been approved is not the same as agreeing, and of the two ways to be wrong the one to choose is the one that holds a sending rather than the one that lets it by.";
  "The names are made unique because an app can be reached by more than one path, and one name arriving twice would read as two apps to look at when it is one.";
  let app_names = await apps_names();
  let names = list_unique(app_names);
  let expected = await firebase_public_expected();
  let changed = [];
  for (let app_name of names) {
    let approved = property_get_or_null(expected, app_name);
    let unwritten = null_is(approved);
    if (unwritten) {
      list_add(changed, app_name);
      continue;
    }
    let disk = await firebase_prod_app_disk_hashes(app_name);
    let moved = json_equal_not(approved, disk);
    if (moved) {
      list_add(changed, app_name);
    }
  }
  return changed;
}
