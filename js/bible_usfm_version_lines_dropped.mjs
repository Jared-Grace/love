import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_books } from "./bible_usfm_version_books.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_version_book_text } from "./bible_usfm_version_book_text.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { usfm_spans_removed } from "./usfm_spans_removed.mjs";
import { bible_usfm_marker_rest } from "./bible_usfm_marker_rest.mjs";
import { bible_usfm_marker_layout } from "./bible_usfm_marker_layout.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { usfm_markers_removed } from "./usfm_markers_removed.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_usfm_version_lines_dropped(version) {
  arguments_assert(arguments, 1);
  ("$plain version");
  ("Every line of one usfm bible that the reader throws away because the mark on it says nobody said these words, gathered under the mark that condemned it, with how many lines each mark took and the words of each one.");
  ("★ IT LOOKS FOR THE FAULT THE OTHER CHECKS CANNOT SEE, WHICH IS SCRIPTURE GOING MISSING. A word wrongly added is loud - it stands in the passage looking wrong and every check catches it. A line wrongly dropped is silent: what is handed to the reader is shorter and reads perfectly, and nothing anywhere complains, because a reader who never saw the line has no way to miss it. Habakkuk ended at He makes me walk upon the heights for exactly that reason, and it was found by accident.");
  ("THE MARK IS WHAT DECIDES, SO THE MARK IS WHAT THIS IS SORTED BY. A mark carrying eight hundred lines is the ordinary section title the translators wrote over each passage, and reading one of those is reading them all. A mark carrying one line is the interesting one - a printing reached for a mark it uses nowhere else, and there is no habit to check it against. That is what the Habakkuk line was, and counting is what makes it stand out without anybody having to guess in advance which mark to suspect.");
  ("The notes and cross references come off before the mark is read, in the same order the reader takes them off, so a line is judged exactly as the reader judges it and not nearly.");
  let books = await bible_usfm_version_books(version);
  let markers = {};
  for (let book of books) {
    let book_code = property_get(book, "book_code");
    let usfm = await bible_usfm_version_book_text(version, book_code);
    let usfm_lines = text_split_newline(usfm);
    for (let usfm_line of usfm_lines) {
      let unfootnoted = usfm_spans_removed(usfm_line, "f");
      let unreferenced = usfm_spans_removed(unfootnoted, "x");
      let split = bible_usfm_marker_rest(unreferenced);
      let marker_text = property_get(split, "marker");
      let rest = property_get(split, "rest");
      let layout = bible_usfm_marker_layout(marker_text);
      let kind = property_get(layout, "kind");
      let dropped = equal(kind, "drop");
      if (not(dropped)) {
        continue;
      }
      let words = usfm_markers_removed(rest);
      let text = text_trim(words);
      let silent = text_empty_is(text);
      if (silent) {
        continue;
      }
      let known = property_exists(markers, marker_text);
      if (not(known)) {
        property_set(markers, marker_text, []);
      }
      let lines = property_get(markers, marker_text);
      let row = {
        book_code,
        text,
      };
      list_add(lines, row);
    }
  }
  let counts = {};
  let marker_texts = object_property_names(markers);
  for (let marker_text of marker_texts) {
    let lines = property_get(markers, marker_text);
    let count = list_size(lines);
    property_set(counts, marker_text, count);
  }
  let r = {
    counts,
    markers,
  };
  return r;
}
