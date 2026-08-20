import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { ebible_firebase_folder_path } from "./ebible_firebase_folder_path.mjs";
import { firebase_storage_list_page } from "./firebase_storage_list_page.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export async function ebible_version_uploaded_is(bible_folder) {
  "$plain bible_folder";
  "Whether storage holds anything at all for this bible - which is what stands between a reader on a phone and the text that is already built on this machine.";
  "Asked of storage rather than of any record here. What is up there is the only thing a reader ever reaches, and a record of what was sent is a record of what somebody meant to send: a bible whose chapters were worked out as nothing was uploaded as nothing, faithfully, and both the sending and the record of it came out looking like a success.";
  "One page is asked for and no more. A bible whose text is up there answers with tens of thousands of names and the question is only whether there is one, so reading every page of them would cost the whole listing to learn what the first line of it already said. A bible with nothing up there answers with an empty page in the same breath, which is the case this exists to find.";
  "Storage answers a listing only where what it was given ends in a slash, so the folder is named with an empty word joined on after it - the joining puts the slash there and nothing else.";
  let project_url = firebase_storage_url_project_jg();
  let folder = ebible_firebase_folder_path(bible_folder);
  let prefix = list_join_slash_forward([folder, ""]);
  let page = await firebase_storage_list_page(project_url, prefix, null);
  let uploaded = property_list_empty_not_is(page, "names");
  return uploaded;
}
