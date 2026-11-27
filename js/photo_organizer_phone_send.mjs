import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { photo_organizer_photos_upload } from "./photo_organizer_photos_upload.mjs";
import { photo_organizer_folder_put } from "./photo_organizer_folder_put.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function photo_organizer_phone_send(plan) {
  "$plain plan";
  ("Sends online what $fn ",
    fn_name("photo_organizer_phone_send_plan"),
    " found this phone still holding: every missing photo first, counted on the loading cover as one run, then each folder kept naming them, so a send stopped partway never leaves a folder pointing at a picture that is not there - only pictures sent again next time. The phone keeps its own copy.");
  arguments_assert(arguments, 1);
  let all = [];
  for (let item of plan) {
    let items = property_get(item, "added");
    list_add_multiple(all, items);
  }
  await photo_organizer_photos_upload(all);
  async function put(item) {
    let folder = property_get(item, "folder");
    let list = property_get(folder, "photos");
    let items2 = property_get(item, "added");
    list_add_multiple(list, items2);
    await photo_organizer_folder_put(folder);
  }
  await list_map_unordered_async(plan, put);
}
