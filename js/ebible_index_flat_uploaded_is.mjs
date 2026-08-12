import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { ebible_index_flat_upload_name } from "./ebible_index_flat_upload_name.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function ebible_index_flat_uploaded_is(bible_folder) {
  "Whether this bible has a flat index of its own in storage yet.";
  "Asked by listing the one name rather than by downloading it. The listing answers with the names and nothing else, so this costs the same for a bible whose index runs to a megabyte and a half as for one that has none - and what is being asked is only whether it is there.";
  let file_name = ebible_index_flat_upload_name();
  let path = ebible_firebase_upload_path(bible_folder, file_name);
  let found = await firebase_storage_list_jg(path);
  let uploaded = list_empty_not_is(found);
  return uploaded;
}
