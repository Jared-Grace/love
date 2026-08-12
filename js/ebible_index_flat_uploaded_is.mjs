import { ebible_firebase_folder_path } from "./ebible_firebase_folder_path.mjs";
import { ebible_index_upload_name } from "./ebible_index_upload_name.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { firebase_storage_list_jg } from "./firebase_storage_list_jg.mjs";
import { ebible_index_flat_upload_name } from "./ebible_index_flat_upload_name.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { list_includes } from "./list_includes.mjs";
export async function ebible_index_flat_uploaded_is(bible_folder) {
  "Whether this bible has a flat index of its own in storage yet.";
  "Asked by listing what is in its index folder rather than by downloading the file. The listing answers with names and nothing else, so this costs the same for a bible whose index runs to a megabyte and a half as for one that has none - and what is being asked is only whether it is there.";
  "Storage answers a listing only where what it was given ends in a slash, and refuses anything else outright rather than answering with nothing. So the folder is named with its slash on the end and the file is looked for among the answers, which is why an empty word is joined on: the joining puts a slash before it and nothing after.";
  let folder = ebible_firebase_folder_path(bible_folder);
  let index_name = ebible_index_upload_name();
  let prefix = list_join_slash_forward([folder, index_name, ""]);
  let found = await firebase_storage_list_jg(prefix);
  let file_name = ebible_index_flat_upload_name();
  let path = ebible_firebase_upload_path(bible_folder, file_name);
  let uploaded = list_includes(found, path);
  return uploaded;
}
