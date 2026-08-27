import { arguments_assert } from "./arguments_assert.mjs";
import { usfm_spans_removed } from "./usfm_spans_removed.mjs";
import { usfm_markers_removed } from "./usfm_markers_removed.mjs";
import { usfm_supplied_quotes_removed } from "./usfm_supplied_quotes_removed.mjs";
export function usfm_verse_text(raw) {
  arguments_assert(arguments, 1);
  ("$plain raw");
  ("One verse of usfm read down to the words a person would say aloud.");
  ("The notes come away first and the marks second, and that order is the whole of it. A footnote holds marks of its own, so clearing the marks first would leave the footnote's words behind with nothing left to show they were ever a note - the note would be read as scripture, in the middle of the sentence it was a note about.");
  ("Footnotes and cross references are the two kinds taken away. Both are a translator writing to the reader rather than the book speaking, and both are already kept elsewhere for anyone who wants them.");
  ("The bracketed quote marks go last, once the marks are off and what is left is the sentence. They are the printing telling a typesetter where a speech would close, not a word anyone says.");
  let unfootnoted = usfm_spans_removed(raw, "f");
  let unreferenced = usfm_spans_removed(unfootnoted, "x");
  let marks_gone = usfm_markers_removed(unreferenced);
  let words = usfm_supplied_quotes_removed(marks_gone);
  return words;
}
