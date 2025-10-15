import { object_property_delete_multiple } from "../../../love/public/src/object_property_delete_multiple.mjs";
import { json_from } from "../../../love/public/src/json_from.mjs";
import { http_local_text } from "../../../love/public/src/http_local_text.mjs";
export async function reply_dictionary() {
  let text = await http_local_text(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json",
  );
  let dictionary = json_from(text);
  let excludes_letters = ["h", "e", "d", "l", "w"];
  object_property_delete_multiple(dictionary, excludes_letters);
  let excludes_pairs = ["ar", "ey", "re", "wa"];
  object_property_delete_multiple(dictionary, excludes_pairs);
  let excludes = ["ware"];
  object_property_delete_multiple(dictionary, excludes);
  let includes = [];
  return dictionary;
}
