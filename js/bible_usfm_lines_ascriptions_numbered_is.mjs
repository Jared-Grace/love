import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_line_descriptive_title_is } from "./bible_usfm_line_descriptive_title_is.mjs";
import { bible_usfm_line_verse_numbered_is } from "./bible_usfm_line_verse_numbered_is.mjs";
import { and } from "./and.mjs";
export function bible_usfm_lines_ascriptions_numbered_is(book_lines) {
  arguments_assert(arguments, 1);
  ("$plain book_lines");
  ("Whether this book of usfm numbers its psalm ascriptions as verses - true as soon as one descriptive title in it is found carrying a verse mark of its own.");
  ("This is a question about the printing rather than about a line, and it can only be answered from the whole book, which is why it is asked here and not where a chapter is laid out. The Berean numbers every ascription it prints as verse one; the World English Bible and the others number none of them. Both are ordinary and neither can be told from a single line.");
  ("One ascription is enough to settle it, because a printing that numbers them numbers them throughout. Asking for more would be asking the same question again.");
  for (let usfm_line of book_lines) {
    let described = bible_usfm_line_descriptive_title_is(usfm_line);
    let versed = bible_usfm_line_verse_numbered_is(usfm_line);
    let numbered = and(described, versed);
    if (numbered) {
      return true;
    }
  }
  return false;
}
