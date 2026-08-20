import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_readaloud_file_or_null } from "./ebible_chapter_readaloud_file_or_null.mjs";
import { ebible_chapter_readaloud_lines } from "./ebible_chapter_readaloud_lines.mjs";
import { null_is } from "./null_is.mjs";
export async function ebible_chapter_readaloud_heading_only_is(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  arguments_assert(arguments, 2);
  ("Whether one chapter's reading-aloud edition arrived naming the book and the chapter and then stopping, with no words of it at all.");
  ("This is what a chapter nobody published looks like. The file is there, so nothing is waiting to be fetched and fetching again brings the same two lines back; the words do not exist to be had. A chapter whose file never arrived looks the same to every reader downstream and is the opposite case, because for that one there is something to go and get.");
  ("Told apart by whether the file is there, because the reading that gives the lines answers nothing for both and cannot be asked which it meant. That is right of the reading - a caller wanting words has none either way - and it is exactly what has to be recovered by whoever is deciding what to do about it.");
  ("Habakkuk 3 in Burmese is the case that named this. Its page carries all nineteen verse marks with no words between them and its reading-aloud file carries the book name and the number three, so the chapter is absent on both sides at once. Deleting the cached copy and fetching it again from eBible brought back the same two lines, which is the proof that there is nothing further upstream to ask for.");
  let only = await ebible_chapter_readaloud_file_or_null(
    bible_folder,
    chapter_code,
  );
  let unwritten = null_is(only);
  if (unwritten) {
    return false;
  }
  let lines = await ebible_chapter_readaloud_lines(bible_folder, chapter_code);
  let heading_only = null_is(lines);
  return heading_only;
}
