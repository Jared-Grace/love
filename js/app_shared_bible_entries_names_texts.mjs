import { arguments_assert } from "./arguments_assert.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_get } from "./list_get.mjs";
export function app_shared_bible_entries_names_texts(names, texts) {
  "The verse as the pieces a page draws it from: one entry per bible, each carrying the words and the name of the bible they came out of.";
  "A single bible is left unnamed. There is nothing to tell it apart from, so a name over it is a label answering a question nobody asked - and the same name repeated over every verse on the page at that.";
  "The two lists stand in the same order, so what a name is the name of is which place it holds rather than anything written down beside it.";
  arguments_assert(arguments, 2);
  let named = list_multiple_is(names);
  function to_entry(text, index) {
    let name = "";
    if (named) {
      name = list_get(names, index);
    }
    let entry = {
      name: name,
      text: text,
    };
    return entry;
  }
  let entries = list_map_index(texts, to_entry);
  return entries;
}
