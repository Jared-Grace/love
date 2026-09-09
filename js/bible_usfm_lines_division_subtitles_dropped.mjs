import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_lines_ascriptions_numbered_is } from "./bible_usfm_lines_ascriptions_numbered_is.mjs";
import { not } from "./not.mjs";
import { bible_usfm_line_descriptive_title_is } from "./bible_usfm_line_descriptive_title_is.mjs";
import { bible_usfm_line_verse_numbered_is } from "./bible_usfm_line_verse_numbered_is.mjs";
import { and } from "./and.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_lines_division_subtitles_dropped(
  usfm_lines,
  book_lines,
) {
  arguments_assert(arguments, 2);
  ("$plain usfm_lines");
  ("$plain book_lines");
  ("The lines of one chapter with the printing's own division subtitles taken out of them - a line set as a psalm ascription that the printing does not count as scripture, such as the range a book of the Psalter covers standing under the words BOOK V.");
  ("THE ASCRIPTION AND THE SUBTITLE ARE WRITTEN WITH THE SAME MARK, AND THAT IS THE WHOLE DIFFICULTY. The ascription is in the hebrew and a hundred and seventeen psalms number it as verse one, so it is scripture and is deliberately kept where every other heading is thrown away. The Berean writes the words Psalms 107-150 with that same mark, under BOOK V, and a person copying Psalm 107 out to sing it was handed that line as its opening.");
  ("Where the line stands cannot tell them apart, and this was tried: the World English Bible sets a real ascription directly under BOOK 2, BOOK 3 and BOOK 4, in exactly the place the Berean sets its subtitle. A rule reading position alone would take three ascriptions out of scripture.");
  ("What tells them apart is the printing's own counting, read off the printing. The Berean numbers all hundred and sixteen of its ascriptions as verse one and numbers these five lines as nothing, so in that book an unnumbered ascription is the printing saying itself that these words are not part of the psalm. Every other bible on the shelf numbers no ascription at all, so the question is never asked of them and not one line is taken from them.");
  ("It fails towards keeping words rather than losing them. A printing that wrote the ascription and its verse mark on two lines would read as numbering none, the rule would stay silent, and the reader would keep a subtitle it might have dropped - which is a line too many, not a line of scripture too few.");
  let numbered_is = bible_usfm_lines_ascriptions_numbered_is(book_lines);
  if (not(numbered_is)) {
    return usfm_lines;
  }
  let out = [];
  for (let usfm_line of usfm_lines) {
    let described = bible_usfm_line_descriptive_title_is(usfm_line);
    let versed = bible_usfm_line_verse_numbered_is(usfm_line);
    let unnumbered = not(versed);
    let subtitle = and(described, unnumbered);
    let kept = not(subtitle);
    if (kept) {
      list_add(out, usfm_line);
    }
  }
  return out;
}
