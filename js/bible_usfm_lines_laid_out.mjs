import { bible_usfm_lines_laid_out_blank_line_add } from "./bible_usfm_lines_laid_out_blank_line_add.mjs";
import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { usfm_spans_removed } from "./usfm_spans_removed.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_marker_layout } from "./bible_usfm_marker_layout.mjs";
import { not } from "./not.mjs";
import { bible_usfm_verse_numbers_inlined } from "./bible_usfm_verse_numbers_inlined.mjs";
import { usfm_markers_removed } from "./usfm_markers_removed.mjs";
import { usfm_supplied_quotes_removed } from "./usfm_supplied_quotes_removed.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_repeated } from "./text_repeated.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function bible_usfm_lines_laid_out(usfm_lines, verse_numbers_shown) {
  arguments_assert(arguments, 2);
  ("$plain usfm_lines");
  ("$plain verse_numbers_shown");
  ("Lines of usfm turned into lines of plain writing - everything nobody said thrown away, the marks gone, each line stepped in as far as its mark asks, and a blank line wherever the printing breaks the passage.");
  ("What comes out is the words of the passage and nothing else. The notes go, the section titles the translators wrote go, the file's own bookkeeping goes. What is left is what a person would say reading the passage aloud, laid out the way the printing lays it out.");
  ("The notes come away before the marks, the same order the verse reader uses and for the same reason: a footnote carries marks of its own, so clearing the marks first would leave the note's words standing in the sentence with nothing to show they were ever a note.");
  ("A break arrives two ways and both are honoured here. Poetry says where its stanzas end with a break mark of its own; prose says nothing, and the only sign of a new paragraph is the mark that opens the line. Reading only the first of those left every gospel chapter as one unbroken block.");
  ("No blank line is ever laid on top of another, and none opens the passage. A blank at the top is invisible to whoever pastes this and shifts everything they paste down by a line; two together are a gap nobody asked for. Both are cheaper to refuse as they arrive than to tidy up afterwards, because afterwards there is no longer anything to say which blank came from where.");
  ("A line whose words all turn out to be a footnote leaves nothing behind rather than an empty line. That happens wherever the printing hangs a note on a line of its own, and a reader would see a hole in the poem and take it for a fault.");
  let out = [];
  for (let usfm_line of usfm_lines) {
    let unfootnoted = usfm_spans_removed(usfm_line, "f");
    let unreferenced = usfm_spans_removed(unfootnoted, "x");
    let split = bible_usfm_marker_rest(unreferenced);
    let marker_text = property_get(split, "marker");
    let rest = property_get(split, "rest");
    let layout = bible_usfm_marker_layout(marker_text);
    let kind = property_get(layout, "kind");
    let broken = equal(kind, "break");
    if (broken) {
      bible_usfm_lines_laid_out_blank_line_add(out);
    }
    let laid_out = equal_not(kind, "drop");
    if (broken) {
      laid_out = false;
    }
    if (laid_out) {
      let numbered = bible_usfm_verse_numbers_inlined(
        rest,
        verse_numbers_shown,
      );
      let words = usfm_markers_removed(numbered);
      let said = usfm_supplied_quotes_removed(words);
      let text = text_trim(said);
      let silent = text_empty_is(text);
      if (not(silent)) {
        let paragraph = equal(kind, "paragraph");
        if (paragraph) {
          bible_usfm_lines_laid_out_blank_line_add(out);
        }
        let indent = property_get(layout, "indent");
        let spaces = text_repeated(" ", indent);
        let stepped = text_combine_multiple([spaces, text]);
        list_add(out, stepped);
      }
    }
  }
  return out;
}
