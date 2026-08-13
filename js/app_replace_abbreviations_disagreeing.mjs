import { app_replace_abbreviations_labels } from "./app_replace_abbreviations_labels.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_replace_abbreviations_disagreeing() {
  "Every abbreviation two exercises explain as standing for different words.";
  "A short word is worth learning because it carries the same meaning the next time it is met. Teach one thing by it here and another there and the learner has two words to hold and no way to tell from the rules which is in front of them - so the words stay the words even where the letter they are shortened to has to change.";
  let labels = app_replace_abbreviations_labels();
  let list = object_to_list(labels);
  let disagreeing = [];
  function lambda(kv) {
    let said = property_get(kv, "value");
    let several = list_size_greater_than(said, 1);
    if (several) {
      let key = property_get(kv, "key");
      let joined = list_join(said, " / ");
      let name = text_combine_multiple([key, " means ", joined]);
      list_add(disagreeing, name);
    }
  }
  each(list, lambda);
  return disagreeing;
}
