import { arguments_assert } from "./arguments_assert.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
export function wordings_distinct(wordings) {
  "$plain wordings";
  "The same passage read out of many translations, collapsed to the wordings that actually differ - each set of words once, against the names of every translation that uses exactly those words.";
  "READING TWENTY-ONE TRANSLATIONS OF ONE VERSE IS NOT TWENTY-ONE DECISIONS. Most English translations descend from the same few, so a verse that reads the same in six of them is one wording offered six times, and a person choosing has to notice that themselves before they can see how many real options they have. Collapsed, the choice is as large as it really is and no larger.";
  "Exactly the same words, letter for letter, rather than nearly the same. A comparison exists to show differences, so deciding for the reader that a difference is too small to mention would be deciding the very thing they came to decide.";
  "The wordings keep the order their translations were read in, and within each wording the translations do too, so the same comparison run twice reads the same way twice.";
  arguments_assert(arguments, 1);
  let grouped = list_group_by_property(wordings, "text");
  function collapsed(group) {
    let text = property_get(group, "key");
    let items = property_get(group, "items");
    let names = list_map_property(items, "name");
    let bible_folders = list_map_property(items, "bible_folder");
    let v = {
      text,
      names,
      bible_folders,
    };
    return v;
  }
  let distinct = list_map(grouped, collapsed);
  return distinct;
}
