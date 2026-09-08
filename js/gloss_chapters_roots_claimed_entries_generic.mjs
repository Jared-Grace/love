import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_roots_claimed_entries_generic(
  fn,
  entry_read,
) {
  "$plain fn";
  "Walks every entry of one gloss store that carries an explanation, works out which roots that explanation states outright, and hands each entry to the caller with those roots already found.";
  "Four readings had this walk written out inside them a line at a time - the stored chapters, the two keys, the pass-everything collector, the chapter loop, the explanation lookup and the skip when there is none - and then differed only in what they did with the roots. That is one walk and four questions, so the walk is here and the questions stay where they are.";
  "The whole entry is handed over beside the roots rather than the word pulled out of it here, because the four readings do not agree about what a missing word means: three of them read the word with a reader that throws when it is not there and one with a reader that answers nothing. Pulling it out here would have to pick one of those and would quietly change the other. The key it is read by costs the caller one line and keeps the difference visible.";
  "★ THE CHAPTERS ARE WALKED ONE AFTER ANOTHER AND A READER MAY STOP THE WALK. The walker underneath ends the loop when a chapter comes back true, and nothing here returns anything from a chapter, so this walk always finishes. A later reading wanting to stop early must be given a way to say so rather than finding one.";
  "How many chapters were walked is what comes back, because every caller reported that and nothing else about the walk itself. What each of them counted about the entries, they count for themselves.";
  arguments_assert(arguments, 2);
  let chapter_codes = await gloss_chapters_stored(fn);
  let explain_key = gloss_entry_explain_key();
  function entries_pass(entries) {
    return entries;
  }
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_pass,
    );
    function entry_look(entry) {
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let claimed = gloss_explain_roots_claimed(explain);
      let row = {
        chapter_code,
        entry,
        explain,
        claimed,
      };
      entry_read(row);
    }
    each(entries, entry_look);
  }
  await each_async(chapter_codes, chapter_read);
  let chapters = list_size(chapter_codes);
  let r = {
    chapters,
  };
  return r;
}
