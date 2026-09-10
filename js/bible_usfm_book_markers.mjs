import { arguments_assert } from "./arguments_assert.mjs";
import { usfm_continuation_lines_joined } from "./usfm_continuation_lines_joined.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { bible_usfm_lines_lone_markers_joined } from "./bible_usfm_lines_lone_markers_joined.mjs";
import { usfm_spans_removed } from "./usfm_spans_removed.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function bible_usfm_book_markers(usfm) {
  arguments_assert(arguments, 1);
  ("$plain usfm");
  ("Every distinct line mark one whole book of usfm hands to the reader that decides how a line is laid out, once each and in order.");
  ("It is asked of a whole book rather than of a chapter on purpose, so that a check standing on it covers the marks a chapter reading never reaches as well as the ones it does. The introduction marks before the first chapter are the case: no reading meets them today, and a list of marks that quietly left them out would say a shelf was fully named when it was not.");
  ("The preparation is the readers own two steps rather than a second reading of the file, because the marks that arrive at the layout are not the marks written in the file. An aligned bible writes one word to a line, and a book read line by line off the disk would report a mark for every word of scripture in it; the notes are taken off first for the same reason, since a line that is nothing but a footnote hands over no mark at all.");
  let joined = usfm_continuation_lines_joined(usfm);
  let lines = text_split_newline(joined);
  let usfm_lines = bible_usfm_lines_lone_markers_joined(lines);
  let markers = [];
  for (let usfm_line of usfm_lines) {
    let unfootnoted = usfm_spans_removed(usfm_line, "f");
    let unreferenced = usfm_spans_removed(unfootnoted, "x");
    let split = bible_usfm_marker_rest(unreferenced);
    let marker_text = property_get(split, "marker");
    list_add(markers, marker_text);
  }
  let distinct = list_unique(markers);
  return distinct;
}
