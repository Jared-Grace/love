import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_abbreviation_label } from "./app_replace_abbreviation_label.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { each } from "./each.mjs";
export function app_replace_abbreviations_labels() {
  "Every abbreviation the replacing app explains anywhere, against the different things the exercises say it stands for.";
  "One entry each, so a short word every set agrees about arrives with a single thing beside it and one the sets disagree about arrives with several.";
  let rule_sets = app_replace_rule_sets();
  let labels = {};
  function lambda(rs) {
    let abbreviations = property_get_or_null(rs, "abbreviations");
    let missing = null_is(abbreviations);
    if (not(missing)) {
      let list = object_to_list(abbreviations);
      function lambda2(kv) {
        let key = property_get(kv, "key");
        let parts = property_get(kv, "value");
        let label = app_replace_abbreviation_label(parts);
        let said = property_get_or_null(labels, key);
        let first = null_is(said);
        if (first) {
          said = [];
          property_set(labels, key, said);
        }
        list_add_unique(said, label);
      }
      each(list, lambda2);
    }
  }
  each(rule_sets, lambda);
  return labels;
}
