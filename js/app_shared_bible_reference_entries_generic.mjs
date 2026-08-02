import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { each_async } from "./each_async.mjs";
export async function app_shared_bible_reference_entries_generic(
  reference,
  languages_chosen,
  text_get_fn,
) {
  "one entry per language named and left in the order the reader chose so the colours run the same way the chapter reader runs them - the language chosen first leads in the strong blue";
  "where the words come from is the caller's to say - straight out of the bible files or out of an offline package - since everything around that is the same either way";
  let multiple = list_multiple_is(languages_chosen);
  let entries = [];
  async function language_each(language) {
    let bible_folder = property_get(language, bible_folder_key());
    let text = await text_get_fn(bible_folder, reference);
    let none = null_is(text);
    if (none) {
      return;
    }
    ("a lone language needs no label since there is nothing to tell it apart from");
    let name = "";
    if (multiple) {
      name = property_get(language, "name");
    }
    let entry = {
      name,
      text,
    };
    list_add(entries, entry);
  }
  await each_async(languages_chosen, language_each);
  return entries;
}
