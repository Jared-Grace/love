import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_unsent_all } from "./app_shared_unsent_all.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { browser_online_is } from "./browser_online_is.mjs";
import { not } from "./not.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url_metadata } from "./firebase_storage_url_metadata.mjs";
import { http_json_browser_quiet } from "./http_json_browser_quiet.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
import { json_from } from "./json_from.mjs";
export async function app_chapter_group_splits_load(app_name, path) {
  "$plain app_name";
  "$plain path";
  "How a chapter is divided, as the verses that begin a group after the first - none when it has never been divided, which is the whole chapter in one group.";
  "Storage is asked first, so a division made on another device given the same folder code is the one shown. It is read from what storage says about the file, not from inside it, because a page opened at an address the store does not know may ask about a file but not read it.";
  "A division still waiting on this device to be sent is the newer one, so then storage is not asked and what is kept here answers.";
  "With no internet, or a chapter storage has never been sent, what this device kept answers as well.";
  arguments_assert(arguments, 2);
  let unsent = await app_shared_unsent_all();
  let waiting = list_map_property(unsent, "key");
  let waiting_is = list_includes(waiting, path);
  let online = browser_online_is();
  let json = null;
  if (online && not(waiting_is)) {
    async function ask() {
      let project_url = firebase_storage_url_project_jg();
      let url = firebase_storage_url_metadata(path, project_url);
      let about = await http_json_browser_quiet(url);
      let custom = property_get_or(about, "metadata", {});
      let key = text_frozen("splits");
      let sent = property_get_or(custom, key, null);
      return sent;
    }
    json = await catch_null_async(ask);
  }
  if (null_is(json)) {
    json = storage_local_name_get(app_name, path);
  }
  if (null_is(json)) {
    let r = [];
    return r;
  }
  let splits = json_from(json);
  return splits;
}
