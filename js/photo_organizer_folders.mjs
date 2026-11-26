import { arguments_assert } from "./arguments_assert.mjs";
import { photo_organizer_store } from "./photo_organizer_store.mjs";
import { indexeddb_get_all_backend } from "./indexeddb_get_all_backend.mjs";
import { photo_organizer_database } from "./photo_organizer_database.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_any } from "./list_any.mjs";
import { list_add } from "./list_add.mjs";
export async function photo_organizer_folders() {
  "Every folder kept on this phone, the top one always among them.";
  "The top folder is the one every other sits inside, at any depth; it is under the key top, and sits inside nothing. A phone that has never kept a folder has none, so it is made here, empty - and kept only once something is put in it, since an empty top folder and a missing one show the same.";
  "Each folder holds its key, the key of the folder it sits inside, its name, and its photos, each photo a random name beside the picture itself.";
  arguments_assert(arguments, 0);
  let store = photo_organizer_store();
  let folders = await indexeddb_get_all_backend(
    photo_organizer_database,
    store,
  );
  let top_key = text_frozen("top");
  function top_is(folder) {
    let left = property_get(folder, "key");
    let eq = equal(left, top_key);
    return eq;
  }
  let b = list_any(folders, top_is);
  if (not(b)) {
    list_add(folders, {
      key: top_key,
      parent: "",
      name: "Photos",
      photos: [],
    });
  }
  return folders;
}
