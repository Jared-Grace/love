import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { photo_organizer_folder_path } from "./photo_organizer_folder_path.mjs";
import { json_to } from "./json_to.mjs";
import { firebase_upload_text_browser_quiet } from "./firebase_upload_text_browser_quiet.mjs";
export async function photo_organizer_folder_put(folder) {
  "$plain folder";
  "Keep one folder online as it now stands - its name, the folder it sits inside, and its photos - written over the one kept under the same key, so the last change is the one kept. Only the owner, signed in, may; storage refuses anybody else.";
  "Only each photo's name is kept: the picture itself is sent on its own, and its address is worked out from the name when the folder is read. Nothing is drawn over the page here; whoever asks covers the screen for the whole change it is part of.";
  arguments_assert(arguments, 1);
  let key = property_get(folder, "key");
  function stored(photo) {
    let name = property_get(photo, "name");
    let r = {
      name,
    };
    return r;
  }
  let list = property_get(folder, "photos");
  let photos = list_map(list, stored);
  let kept = {
    key,
    parent: property_get(folder, "parent"),
    name: property_get(folder, "name"),
    photos,
  };
  let path = photo_organizer_folder_path(key);
  let content = json_to(kept);
  await firebase_upload_text_browser_quiet(path, content);
}
