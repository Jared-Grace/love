import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
import { giveaway_psalms_songs_rows_verses_unsung } from "./giveaway_psalms_songs_rows_verses_unsung.mjs";
export async function giveaway_psalms_songs_verses_unsung(rows) {
  arguments_assert(arguments, 1);
  ("$plain rows");
  ("How much of each psalm the sung rows of a giveaway record cover, with each chapter's length fetched from the text of the psalm.");
  ("★ ALL THIS DOES IS FETCH, AND THE JUDGING IS NEXT DOOR SO THAT THE JUDGING CAN BE SHOWN TO FIRE. Every gap this reports is a gap in somebody's singing rather than a fault in the record, so the answer over the real record is never empty and a reader cannot tell a working judge from a broken one by looking at it. The judge takes the chapter lengths as an argument, which is what lets a written case hand it a chapter, a length and a row with no machine to wait on.");
  ("Every chapter any row names is asked about. There is no narrowing to ask about here at all: a gap can be in any chapter that has singing in it, so the set to ask about is exactly the set the rows name.");
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
  let report = giveaway_psalms_songs_rows_verses_unsung(
    rows,
    verse_last_by_chapter,
  );
  return report;
}
