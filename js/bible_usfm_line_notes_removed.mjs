import { arguments_assert } from "./arguments_assert.mjs";
import { usfm_spans_removed } from "./usfm_spans_removed.mjs";
export function bible_usfm_line_notes_removed(usfm_line) {
  arguments_assert(arguments, 1);
  ("$plain usfm_line");
  ("One line of a chapter of usfm with the translators' notes taken off it, leaving the words a person reading aloud would say.");
  ("★ EVERY QUESTION ASKED ABOUT HOW A LINE ENDS HAS TO BE ASKED OF THIS AND NOT OF THE LINE. A printing hangs its footnote and its cross reference on the end of the line they are about, so the last thing written on the line is a note's marks rather than the line's own punctuation. Asked of the line as it stands, a line that plainly comes to a full stop answers no.");
  ("Both kinds come off, a footnote and a cross reference, because a printing puts either one in that place and a caller cannot know which it got.");
  let unfootnoted = usfm_spans_removed(usfm_line, "f");
  let unreferenced = usfm_spans_removed(unfootnoted, "x");
  return unreferenced;
}
