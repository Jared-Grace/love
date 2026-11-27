import { arguments_assert } from "./arguments_assert.mjs";
import { photo_organizer_store } from "./photo_organizer_store.mjs";
import { indexeddb_get_all_backend } from "./indexeddb_get_all_backend.mjs";
import { photo_organizer_database } from "./photo_organizer_database.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function photo_organizer_phone_send_plan(folders) {
  "$plain folders";
  "What this phone still holds that is not online: before the organizer was kept online (human, 2026-11-27), its folders and photos were kept only on the phone that made them, and they are still there.";
  "folders is every folder kept online. The answer is one entry per folder needing something sent: folder is the online folder to keep, or a new one with the same key, name and parent when it is not online at all, and added is the photos of this phone missing from it, matched by name.";
  "Nothing is changed here, so asking again after a send answers only what is still missing, and an empty answer means everything is online.";
  arguments_assert(arguments, 1);
  let store = photo_organizer_store();
  let kept = await indexeddb_get_all_backend(photo_organizer_database, store);
  let by_key = {};
  for (let f of folders) {
    let property_name = property_get(f, "key");
    property_set(by_key, property_name, f);
  }
  let plan = [];
  for (let local of kept) {
    let key = property_get(local, "key");
    let folder = property_get_or(by_key, key, null);
    let missing = null_is(folder);
    if (missing) {
      folder = {
        key,
        parent: property_get(local, "parent"),
        name: property_get(local, "name"),
        photos: [],
      };
    }
    let list = property_get(folder, "photos");
    let names = list_map_property(list, "name");
    function unsent_is(photo) {
      let name = property_get(photo, "name");
      let b = list_includes(names, name);
      let unsent = not(b);
      return unsent;
    }
    let list2 = property_get(local, "photos");
    let added = list_filter(list2, unsent_is);
    if (not(missing) && equal(added.length, 0)) {
      continue;
    }
    list_add(plan, {
      folder,
      added,
    });
  }
  return plan;
}
