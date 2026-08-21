import { bible_folder_key } from "./bible_folder_key.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_map } from "./list_map.mjs";
import { list_second } from "./list_second.mjs";
import { property_set } from "./property_set.mjs";
export function ebible_languages_from_rows(rows) {
  "Reads the generated half of the languages list back out of the short form it is stored in - three words to a language, in the order a language record spells them: what it is called, the folder its chapters sit in, and its short code.";
  "Stored short because this list is carried by every page that offers a reader a choice of language, and a record spells each of its three words twice - once as the name of the slot and once as the thing in it. Three hundred and twelve languages of that is twenty one KiB of source, of which half is the same three slot names written over and over. The same list as rows is nine.";
  "The names are put back on here rather than left off, so nothing downstream of this ever meets a row: everything asking the list a question goes on asking it by name, and the short form is a way the list is written down rather than a second shape of it.";
  let folder_key = bible_folder_key();
  let code_key = language_code_key();
  function row_language(row) {
    let name = list_first(row);
    let language = {
      name,
    };
    let bible_folder = list_second(row);
    property_set(language, folder_key, bible_folder);
    let language_code = list_last(row);
    property_set(language, code_key, language_code);
    return language;
  }
  let languages = list_map(rows, row_language);
  return languages;
}
