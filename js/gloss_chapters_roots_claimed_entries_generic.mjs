import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { gloss_chapters_entries_explained_generic } from "./gloss_chapters_entries_explained_generic.mjs";
export async function gloss_chapters_roots_claimed_entries_generic(
  fn,
  entry_read,
) {
  "$plain fn";
  "Walks every entry of one gloss store that carries an explanation, works out which roots that explanation states outright, and hands each entry to the caller with those roots already found.";
  "Nine readings had this walk written out inside them a line at a time - the stored chapters, the two keys, the pass-everything collector, the chapter loop, the explanation lookup and the skip when there is none - and then differed only in what they did with the roots. That is one walk and nine questions, so the walk is elsewhere and the questions stay where they are.";
  "What is left here is the one line that makes this reading of the store different from its sibling: which reader the explanation is put to. The walk itself is shared with that sibling, which asks the wider question of the same sentences, so a reading can be moved from one to the other by changing the name it calls and nothing else.";
  "The whole entry is handed over beside the roots rather than the word pulled out of it here, because the readings do not agree about what a missing word means: most of them read the word with a reader that throws when it is not there and one with a reader that answers nothing. Pulling it out here would have to pick one of those and would quietly change the other. The key it is read by costs the caller one line and keeps the difference visible.";
  "How many chapters were walked comes back, and beside it how many entries were met, both exactly as the shared walk reported them.";
  arguments_assert(arguments, 2);
  function entry_look(found) {
    let chapter_code = property_get(found, "chapter_code");
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let claimed = gloss_explain_roots_claimed(explain);
    let row = {
      chapter_code,
      entry,
      explain,
      claimed,
    };
    entry_read(row);
  }
  let walked = await gloss_chapters_entries_explained_generic(fn, entry_look);
  return walked;
}
