import { gloss_entries_explains_groups } from "./gloss_entries_explains_groups.mjs";
import { property_get } from "./property_get.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
export function gloss_entries_explains_repeated_groups(entries) {
  "Every explanation in a list that some other word in the same list was given word for word, each one carried beside the words that were handed it.";
  "The counter next door says how many words share a wording and nothing about which. That is the right answer for a gate, which only has to decide, and the wrong one for a person about to rewrite a sentence - they need to see the words standing under it, because whether the wording was lazy or genuinely the same fact is a judgment nobody can make without them.";
  "The gathering itself is done next door and the whole of what is left here is the word 'repeated': a group standing over one word is dropped. Keeping the two apart is what let a store-wide reading be written at all, because store-wide the dropped groups are the bulk of the answer rather than noise.";
  let groups = gloss_entries_explains_groups(entries);
  function group_shared_is(group) {
    let words = property_get(group, "words");
    let shared = list_size_greater_than(words, 1);
    return shared;
  }
  let repeated = list_filter(groups, group_shared_is);
  return repeated;
}
