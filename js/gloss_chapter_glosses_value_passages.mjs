import { gloss_chapter_passages_counted_generic } from "./gloss_chapter_passages_counted_generic.mjs";
import { gloss_entries_glosses_value_count } from "./gloss_entries_glosses_value_count.mjs";
export async function gloss_chapter_glosses_value_passages(
  chapter_code,
  fn,
  value,
) {
  "Every passage of one authored gloss chapter carrying a named wording as the whole of the short English under a word, each named by the verses it covers and by how many of its words carry it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain value";
  "the value is a wording to match whole. It names text to read and nothing that runs.";
  "It is the twin of the reading over the prose, asked of the other half of a word's row. What the reader meets is the word, then this, then the prose, and the two halves go wrong in different ways: prose goes wrong by saying something it should not, and this goes wrong by being a marker rather than a meaning, which is a whole wording and not a run of letters inside one.";
  function entries_read(entries) {
    let count = gloss_entries_glosses_value_count(entries, value);
    return count;
  }
  let r = await gloss_chapter_passages_counted_generic(
    chapter_code,
    fn,
    entries_read,
  );
  return r;
}
