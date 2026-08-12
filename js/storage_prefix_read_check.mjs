import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_list_page } from "./firebase_storage_list_page.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { http } from "./http.mjs";
export async function storage_prefix_read_check(prefix) {
  "Whether a page with nobody signed in can actually read out of one top folder of the file store, tried on a real file that is really in there.";
  "It is tried rather than reasoned about. What the rules in this repo say is what somebody meant; whether it was ever sent to the store is a separate question, and the store answers it in the only way that matters - by handing the file over or refusing it.";
  "The file to try is asked of the store rather than named here, so this works for a folder nobody has looked in before and cannot come to rest on a file that has since been deleted.";
  "A folder holding nothing at all is neither allowed nor refused, and it says so by naming no file, because failing on it would be complaining that there is nothing to complain about.";
  "The asking carries no sign of who is asking, which is the whole point - it is the same empty-handed request a browser makes.";
  let project_url = firebase_storage_url_project_jg();
  let folder = text_combine(prefix, "/");
  let page = await firebase_storage_list_page(project_url, folder, null);
  let names = property_get(page, "names");
  let empty = list_empty_is(names);
  if (empty) {
    let untried = {
      prefix,
      name: null,
      readable: null,
    };
    return untried;
  }
  let name = list_first(names);
  let url = firebase_storage_url(name, project_url);
  async function lambda() {
    let bytes = await http(url);
    return bytes;
  }
  let got = await catch_null_async(lambda);
  let readable = null_not_is(got);
  let r = {
    prefix,
    name,
    readable,
  };
  return r;
}
