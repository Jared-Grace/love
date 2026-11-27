import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { photo_organizer_photo_upload } from "./photo_organizer_photo_upload.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { photo_organizer_folder_put } from "./photo_organizer_folder_put.mjs";
export async function photo_organizer_phone_send(plan) {
  "$plain plan";
  ("Sends online what $fn ",
    fn_name("photo_organizer_phone_send_plan"),
    " found this phone still holding: each folder's missing photos first, then the folder kept naming them, so a send stopped partway never leaves a folder pointing at a picture that is not there. The phone keeps its own copy.");
  arguments_assert(arguments, 1);
  for (let item of plan) {
    let folder = property_get(item, "folder");
    let added = property_get(item, "added");
    for (let photo of added) {
      let name = property_get(photo, "name");
      let file = property_get(photo, "file");
      await photo_organizer_photo_upload(name, file);
    }
    let list = property_get(folder, "photos");
    list_add_multiple(list, added);
    await photo_organizer_folder_put(folder);
  }
}
