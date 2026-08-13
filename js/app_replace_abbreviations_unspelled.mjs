import { app_replace_abbreviations } from "./app_replace_abbreviations.mjs";
import { app_replace_abbreviation_bold_spelling } from "./app_replace_abbreviation_bold_spelling.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_abbreviations_unspelled() {
  "Every explanation whose bold letters do not spell the abbreviation they explain.";
  "The bold letters are the whole of how an abbreviation is remembered - read them off the words and you have the short word, which is what makes it worth learning rather than looking up. An explanation whose bold letters spell something else is a mnemonic for a word that is not there.";
  let abbreviations = app_replace_abbreviations();
  let list = object_to_list(abbreviations);
  let unspelled = [];
  function lambda(kv) {
    let key = property_get(kv, "key");
    let parts = property_get(kv, "value");
    let spelled = app_replace_abbreviation_bold_spelling(parts);
    let same = equal(spelled, key);
    if (not(same)) {
      let name = text_combine_multiple([key, " spelled ", spelled]);
      list_add(unspelled, name);
    }
  }
  each(list, lambda);
  return unspelled;
}
