import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { http_local_json } from "./http_local_json.mjs";
import { properties_delete } from "./properties_delete.mjs";
export async function reply_dictionary() {
  let url =
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json";
  let project_url = firebase_storage_url_project_jg();
  let dictionary = await http_local_json(url, project_url);
  let excludes_letters = ["h", "e", "d", "l", "t", "w"];
  properties_delete(dictionary, excludes_letters);
  let excludes_pairs = ["ar", "ii", "ey", "ot", "pr", "re", "wa"];
  properties_delete(dictionary, excludes_pairs);
  let excludes = ["ware"];
  properties_delete(dictionary, excludes);
  let includes = [];
  return dictionary;
}
