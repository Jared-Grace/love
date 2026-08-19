import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_roots_disagreeing_classes } from "./gloss_roots_disagreeing_classes.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_ceb_bible_gloss_roots_shallower() {
  "Every disagreement where a Cebuano explanation handed the reader a word built out of the root as though it were the root, named once each however many times it was met.";
  "One of the five readings of a disagreeing pair, and the only one that is plainly a fault. The other four are the explanation stopping at a different layer of the same word, or spelling a vowel the other way, and repairing those would make the prose worse rather than better.";
  "Named by the pair rather than counted, because a count cannot be refused with anything a reader can act on. One word met once a verse counts as hundreds, so the number moves whenever a chapter is authored and says nothing about whether anything got worse; the pair is the fault itself, and a pair that was not there before is the thing worth stopping.";
  "How many there are is asked for first and then asked for again with that number as the limit, because the gathering takes a count of how many to show and has no word for all of them. The slow part is the sweep across the chapters and it has already happened by then - gathering is arithmetic over a list already in hand.";
  arguments_assert(arguments, 0);
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let counted = gloss_roots_disagreeing_classes(offenders, "shallower", 0);
  let selected_total = property_get(counted, "selected_total");
  let gathered = gloss_roots_disagreeing_classes(
    offenders,
    "shallower",
    selected_total,
  );
  let classes = property_get(gathered, "classes");
  function class_named(one_class) {
    let claimed = property_get(one_class, "claimed");
    let root = property_get(one_class, "root");
    let named = text_combine_multiple([claimed, " for ", root]);
    return named;
  }
  let names = list_map(classes, class_named);
  let sorted = list_sort_text(names);
  return sorted;
}
