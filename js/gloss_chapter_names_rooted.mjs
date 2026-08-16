import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_names_rooted } from "./gloss_entries_names_rooted.mjs";
export async function gloss_chapter_names_rooted(
  chapter_code,
  fn,
  capitalised,
) {
  "Every explanation in one gloss chapter that tells a reader what a name is built from, where the name is a word the book never once writes in small letters.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are.";
  "Which words the book only ever capitalises is handed in rather than worked out here, because that reading is over a whole book and this is over one chapter of it - worked out here it would be worked out again for every chapter of the same book, and it would be worked out from the wrong evidence besides.";
  function found_of(entries) {
    let found = gloss_entries_names_rooted(entries, capitalised);
    return found;
  }
  let rooted = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    found_of,
  );
  return rooted;
}
