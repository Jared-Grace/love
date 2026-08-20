import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_chapter_readaloud_file_or_null } from "./ebible_chapter_readaloud_file_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_skip_map } from "./list_skip_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { file_read } from "./file_read.mjs";
export async function ebible_chapter_readaloud_lines(
  bible_folder,
  chapter_code,
) {
  "One chapter of a bible as it is written for reading aloud: a line of words for each verse, in the order the verses come, with nothing saying which number each one is.";
  "This is the one place in the repo where a chapter arrives already divided. Everywhere else a chapter is one unbroken run of words and the dividing has to be worked out, so what a line is here is worth having on its own rather than only inside the one reader that first wanted it.";
  "The first two lines are the name of the book and the number of the chapter rather than words of it, so they are stepped over.";
  "Nothing is answered for a chapter that is not read aloud in that bible at all, because there is no text to divide. That is a real state rather than a fault - see the reading that looks for the writing - and every caller here already knows what to do with a chapter it can be told nothing about.";
  "A file holding its two heading lines and nothing else is that same state wearing a file. It names a book and a chapter and then stops, so it says which chapter it would have been rather than any of it, and there is no more text to divide than if the file had never been written. Answering nothing for it says the true thing once, in the one word every caller already reads.";
  "Some bibles write such a file for the first chapter of a book they do not carry, and a reader that took the empty list instead would set no words at all against however many verse marks the page carries and call the disagreement a fault.";
  let only = await ebible_chapter_readaloud_file_or_null(
    bible_folder,
    chapter_code,
  );
  let unread = null_is(only);
  if (unread) {
    return null;
  }
  let contents = await file_read(only);
  let lines = text_split_newline(contents);
  let mapped = list_skip_map(lines, 2, text_trim);
  let filtered = list_filter_text_empty_not_is(mapped);
  let heading_only = list_empty_is(filtered);
  if (heading_only) {
    return null;
  }
  return filtered;
}
