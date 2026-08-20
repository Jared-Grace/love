import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_firebase_folder_prefix } from "./ebible_firebase_folder_prefix.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_list_page } from "./firebase_storage_list_page.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function ebible_bible_folder_storage_first_page(bible_folder) {
  "$plain bible_folder";
  "One page of the names storage holds for a bible, handed back with the folder opening they are spelled under and with whether there are more pages behind this one.";
  "THE READING THE TWO BESIDE IT SHARE. What storage holds for a bible is asked the same way whether the answer wanted is its books or its chapters - the difference is only in what is read off each name afterwards. Written out in both, the request drifts: a page size, a starting point or a folder opening improved in one is not improved in the other, and nothing goes red when the two disagree about what is there.";
  "THE FOLDER OPENING IS HANDED BACK AND NOT ONLY USED, because the caller has to cut it off the front of every name to see what is inside, and working it out a second time is the same spelling twice over.";
  arguments_assert(arguments, 1);
  let prefix = ebible_firebase_folder_prefix(bible_folder);
  let project_url = firebase_storage_url_project_jg();
  let page = await firebase_storage_list_page(project_url, prefix, null);
  let names = property_get(page, "names");
  let next = property_get(page, "next");
  let more = null_not_is(next);
  let r = {
    prefix,
    names,
    more,
  };
  return r;
}
