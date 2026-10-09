import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
import { giveaway_psalms_songs_rows_whole_chapter_parts } from "./giveaway_psalms_songs_rows_whole_chapter_parts.mjs";
export async function giveaway_psalms_songs_whole_chapter_parts(rows) {
  arguments_assert(arguments, 1);
  ("$plain rows");
  ("Every row of a giveaway record whose verse range covers the whole of its chapter, with each chapter's length fetched from the text of the psalm.");
  ("★ ALL THIS DOES IS FETCH, AND THE JUDGING IS NEXT DOOR SO THAT THE JUDGING CAN BE SHOWN TO FIRE. The record on this disk has no row that offends, so a check that did both would pass by printing nothing - and a check that had stopped working would pass in exactly the same way. The judge takes the chapter lengths as an argument, which is what lets a written case hand it a chapter, a length and a row with no machine to wait on.");
  ("★ EVERY CHAPTER ANY ROW NAMES IS ASKED ABOUT, NOT ONLY THE ONES THAT COULD POSSIBLY OFFEND. Narrowing the asking to the rows that start at verse one would be the same judgment the judge makes, made twice, in two places, from one of which it cannot be seen - and a narrowing that drifted would quietly stop asking about the chapter where the fault was. Asking wide costs a fetch each, paid once because the reading keeps what it fetches on this disk.");
  ("The chapters are asked about together rather than one to a row, because each one is a wait and none of the waits depends on another.");
  ("A name the reading cannot place contributes no chapter and is left for the judge to pass over, so that which rows are skipped is decided in one place.");
  function chapter_or_null(row) {
    let read = psalms_song_file_read_or_null(row.file_name);
    if (equal(read, null)) {
      return null;
    }
    let chapter = read.chapter;
    return chapter;
  }
  let chapters_all = list_map_filter_null_not_is(rows, chapter_or_null);
  let chapters = list_unique(chapters_all);
  let verse_last_by_chapter = await psalms_chapters_verse_last(chapters);
  let found = giveaway_psalms_songs_rows_whole_chapter_parts(
    rows,
    verse_last_by_chapter,
  );
  return found;
}
