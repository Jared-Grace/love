import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_entries_explained_generic(fn, entry_read) {
  "$plain fn";
  "Walks every entry of one gloss store, hands over the ones that carry an explanation with the chapter they stand in, and says how many chapters were walked and how many entries were met.";
  "It knows nothing about roots, and that is the whole of what it is for. The readings sitting on top of this ask two different questions of an explanation - which roots it states outright, and which roots it names in any wording at all - and each of those had the walk written out underneath it. One walk and two questions is one unit and two thin ones, so the walk is here and each question is a named unit of its own that calls this.";
  "The whole entry is handed over rather than the word pulled out of it here, because the readings do not agree about what a missing word means: some read the word with a reader that throws when it is not there and some with a reader that answers nothing. Pulling it out here would have to pick one of those and would quietly change the other.";
  "★ THE CHAPTERS ARE WALKED ONE AFTER ANOTHER AND A READER MAY STOP THE WALK. The walker underneath ends the loop when a chapter comes back true, and nothing here returns anything from a chapter, so this walk always finishes. A later reading wanting to stop early must be given a way to say so rather than finding one.";
  "How many entries were met counts every entry the store holds and not only the ones handed over, which is the one number a reader cannot work out for itself afterwards. A reading wanting to say what share of the store explains anything needs the whole of it as the denominator, and a reading that counted only what reached it would quietly report the wrong whole.";
  arguments_assert(arguments, 2);
  let chapter_codes = await gloss_chapters_stored(fn);
  let explain_key = gloss_entry_explain_key();
  let entries_seen = 0;
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
      entries_seen = add(entries_seen, 1);
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let row = {
        chapter_code,
        entry,
        explain,
      };
      entry_read(row);
    }
    each(entries, entry_look);
  }
  await each_async(chapter_codes, chapter_read);
  let chapters = list_size(chapter_codes);
  let r = {
    chapters,
    entries_seen,
  };
  return r;
}
