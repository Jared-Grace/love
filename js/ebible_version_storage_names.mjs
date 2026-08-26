import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_firebase_folder_path } from "./ebible_firebase_folder_path.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { firebase_storage_list } from "./firebase_storage_list.mjs";
export async function ebible_version_storage_names(bible_folder) {
  "$plain bible_folder";
  "Every file storage actually holds for one bible, named in full.";
  "Asked of storage rather than worked out from what is on this disk. What was sent is a record of what somebody meant to send, and the only thing a reader ever reaches is what is up there - so a question about what is published has to be put to the place it is published.";
  "Storage answers a listing only where what it was given ends in a slash, so the folder is named with an empty word joined on after it - the joining puts the slash there and nothing else.";
  let project_url = firebase_storage_url_project_jg();
  let folder = ebible_firebase_folder_path(bible_folder);
  let prefix = list_join_slash_forward([folder, ""]);
  let names = await firebase_storage_list(project_url, prefix);
  return names;
}
