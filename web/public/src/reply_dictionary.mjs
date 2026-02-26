import { firebase_storage_url_project_jg } from "../../../love/public/src/firebase_storage_url_project_jg.mjs";
import { http_local_json } from "../../../love/public/src/http_local_json.mjs";
import { property_delete_multiple } from "../../../love/public/src/property_delete_multiple.mjs";
export async function reply_dictionary() {
  const url =
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json";
  let project_url = firebase_storage_url_project_jg();
  let dictionary = await http_local_json(url, project_url);
  let excludes_letters = ["h", "e", "d", "l", "t", "w"];
  property_delete_multiple(dictionary, excludes_letters);
  let excludes_pairs = ["ar", "ii", "ey", "ot", "pr", "re", "wa"];
  property_delete_multiple(dictionary, excludes_pairs);
  let excludes = ["ware"];
  property_delete_multiple(dictionary, excludes);
  let includes = [];
  return dictionary;
}
