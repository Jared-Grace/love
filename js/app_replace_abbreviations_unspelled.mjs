import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_abbreviation_bold_spelling } from "./app_replace_abbreviation_bold_spelling.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_abbreviations_unspelled() {
  "Every explanation whose bold letters do not spell the abbreviation they explain.";
  "The bold letters are the whole of how an abbreviation is remembered - read them off the words and you have the short word, which is what makes it worth learning rather than looking up. An explanation whose bold letters spell something else is a mnemonic for a word that is not there.";
  "Said once for each explanation rather than once for each set that shows it. One set borrows another's explanations wholesale, so the same wrong spelling can appear a dozen times while there is only one place to put it right.";
  let rule_sets = app_replace_rule_sets();
  let unspelled = [];
  function lambda(rs) {
    let abbreviations = property_get_or_null(rs, "abbreviations");
    let missing = null_is(abbreviations);
    if (not(missing)) {
      let list = object_to_list(abbreviations);
      function lambda2(kv) {
        let key = property_get(kv, "key");
        let parts = property_get(kv, "value");
        let spelled = app_replace_abbreviation_bold_spelling(parts);
        let same = equal(spelled, key);
        if (not(same)) {
          let name = text_combine_multiple([key, " spelled ", spelled]);
          list_add(unspelled, name);
        }
      }
      each(list, lambda2);
    }
  }
  each(rule_sets, lambda);
  let unique = list_unique(unspelled);
  return unique;
}
