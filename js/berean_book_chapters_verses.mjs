import { arguments_assert } from "./arguments_assert.mjs";
import { berean_book_path } from "./berean_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { usfm_chapters_verses } from "./usfm_chapters_verses.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { em_dashes_closed } from "./em_dashes_closed.mjs";
import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
export async function berean_book_chapters_verses(book_code) {
  arguments_assert(arguments, 1);
  ("$plain book_code");
  ("One book of the Berean release, cut into its chapters and each chapter into its verses.");
  ("A book that cannot be found is a fault here rather than an answer. The other usfm shelf this repo reads answers nothing for a missing book, because many translations on it are the New Testament alone and asking one of those for Genesis should be told no. This is a whole bible of sixty-six, so a gap in it means the fetch went wrong and saying so is the useful answer.");
  ("The em dashes are closed up on the way out, and this is the one place that may do it. The marked-up release spaces them and the publisher's own plain-text edition does not - thirteen hundred lines of it carry an em dash and not one of them is spaced - so the spaces are what the converter that made the marked-up files left behind rather than anything the printing says. Closed here rather than in the reader every translation shares, because a bible in French sets its dashes open on purpose and the reader has no way of knowing whose text it is holding.");
  ("Left alone the spacing is not a small thing. It parted a thousand and sixty-nine verses from the text they are word for word identical to, which is enough noise to hide the eleven hundred verses the printing really did change.");
  let file_path = berean_book_path(book_code);
  let usfm = await file_read(file_path);
  let chapters = usfm_chapters_verses(usfm);
  function chapter_closed(chapter) {
    let chapter_number = property_get(chapter, "chapter_number");
    let verses = property_get(chapter, "verses");
    let closed = list_map(verses, verse_closed);
    let v = {
      chapter_number,
      verses: closed,
    };
    return v;
  }
  function verse_closed(verse) {
    let verse_number = property_get(verse, "verse_number");
    let text = property_get(verse, "text");
    let closed = em_dashes_closed(text);
    let v = ebible_verse_new_text(closed, verse_number);
    return v;
  }
  let mapped = list_map(chapters, chapter_closed);
  return mapped;
}
