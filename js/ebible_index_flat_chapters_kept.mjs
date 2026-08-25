import { property_in_list } from "./property_in_list.mjs";
import { list_filter } from "./list_filter.mjs";
export function ebible_index_flat_chapters_kept(list, chapter_codes) {
  "A flat index cut down to the chapters named, in the order the index had them.";
  "The order is the bible's own and nothing else here holds it, so it is kept rather than taken from the order the chapters were named in - a caller that learned its chapters from a folder listing has them alphabetically, which would put Amos before Genesis and send a reader going on to the next chapter somewhere else in the bible.";
  "Cutting the index is what makes one answer serve both pickers. The book list, the chapter list, and the chapter a chosen book opens at are all read off this same list further down, so a book with nothing left in it drops out of the first of them without that having to be said a second time.";
  function verse_kept_is(verse) {
    let named = property_in_list(verse, "chapter_code", chapter_codes);
    return named;
  }
  let kept = list_filter(list, verse_kept_is);
  return kept;
}
