import { arguments_assert } from "./arguments_assert.mjs";
import { usfm_continuation_lines_joined } from "./usfm_continuation_lines_joined.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { bible_usfm_lines_chapter_taken } from "./bible_usfm_lines_chapter_taken.mjs";
import { bible_usfm_lines_lone_markers_joined } from "./bible_usfm_lines_lone_markers_joined.mjs";
export function bible_usfm_chapter_lines(usfm, chapter_number) {
  arguments_assert(arguments, 2);
  ("$plain usfm");
  ("$plain chapter_number");
  ("One chapter of a book written in usfm, as lines of usfm ready to be read - still marked up, but put back together, cut down to the chapter asked for, and with every mark standing on the line it belongs to.");
  ("It is the three tidyings every reader of a chapter has to do before it can read anything at all, and none of them is about what the reader then wants. A reader laying the chapter out as writing and a reader cutting a passage out of it both need exactly this and differ only afterwards, so doing it in each of them would be the same three steps written twice, in the same order, with nothing to say if one of them ever changed.");
  ("The lines are put back together first, because an aligned bible writes one word to a line and a line is not a line until that is undone. Then the chapter is taken by its own mark rather than counted to. Then a mark left standing on a line of its own is moved down onto the line beneath it, because two of the four bibles here write the step and the verse apart and everything below reads the mark that opens a line.");
  let joined = usfm_continuation_lines_joined(usfm);
  let lines = text_split_newline(joined);
  let chapter_lines = bible_usfm_lines_chapter_taken(lines, chapter_number);
  let usfm_lines = bible_usfm_lines_lone_markers_joined(chapter_lines);
  return usfm_lines;
}
