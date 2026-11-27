import { arguments_assert } from "./arguments_assert.mjs";
import { photo_organizer_storage_path } from "./photo_organizer_storage_path.mjs";
import { firebase_storage_list_browser_quiet } from "./firebase_storage_list_browser_quiet.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { equal } from "./equal.mjs";
import { list_any } from "./list_any.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function photo_organizer_folders() {
  "Every folder kept online, the top one always among them. Anybody may read them, signed in or not.";
  "The top folder is the one every other sits inside, at any depth; it is under the key top, and sits inside nothing. Before anything has been kept there is none, so it is made here, empty - and kept only once something is put in it, since an empty top folder and a missing one show the same.";
  "Each folder holds its key, the key of the folder it sits inside, its name, and its photos. Only each photo's name is kept with the folder; the address it is stored at is worked out from the name here, under url, so the photos show from storage.";
  "Every folder is asked for at the same time, since each is one wait on storage and nothing else.";
  arguments_assert(arguments, 0);
  let prefix = photo_organizer_storage_path("folders", "");
  let names = await firebase_storage_list_browser_quiet(prefix);
  let project_url = firebase_storage_url_project_jg();
  async function load(stored_path) {
    let url = firebase_storage_url(stored_path, project_url);
    let folder = await http_json_browser_quiet(url);
    for (let photo of property_get(folder, "photos")) {
      let name2 = property_get(photo, "name");
      let photo_path = photo_organizer_storage_path("photos", name2);
      let value = firebase_storage_url(photo_path, project_url);
      property_set(photo, "url", value);
    }
    return folder;
  }
  let folders = await list_map_unordered_async(names, load);
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
