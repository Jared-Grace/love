import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_songs_folder_channel_compare } from "./psalms_songs_folder_channel_compare.mjs";
import { equal } from "./equal.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
export async function psalms_songs_folder_channel_singles(
  folder_audio,
  channel_id,
) {
  arguments_assert(arguments, 2);
  ("$plain folder_audio");
  ("$plain channel_id");
  ("The passages sung only once in a folder of recordings whose verses are not all sung at least twice by the other recordings, highest psalm first, each with a mark when the passage is the whole chapter - plus how many passages still have more recordings than public videos.");
  ("★ A WHOLE-CHAPTER ROW IS ITS OWN PASSAGE, NOT A HALF THAT LOST ITS TAKES. Psalm 149 has three takes of 1-5 and four of 6-9, yet 149:1-9 read as one recording, and the human took that row for a miscount of the whole psalm. Marking it says which song needs a second take.");
  ("★ A PASSAGE IS COVERED WHEN EVERY VERSE IS SUNG TWICE, BY ANY RECORDINGS. The human, on 149:1-9: isn't it covered by other songs? Every verse of it already sits in two or more recordings, so asking for a second whole-chapter take asks for nothing new. A verse is counted once per recording whose range holds it.");
  let compared = await psalms_songs_folder_channel_compare(
    folder_audio,
    channel_id,
  );
  function range_of(row) {
    let verses = row.passage.split(":")[1];
    let ends = verses.split("-");
    let first = parseInt(ends[0], 10);
    let last = parseInt(ends[ends.length - 1], 10);
    return {
      first,
      last,
    };
  }
  let sung_by_verse = {};
  for (let row of compared.rows) {
    let range = range_of(row);
    for (let verse = range.first; verse <= range.last; verse++) {
      let key = row.chapter + ":" + verse;
      let before = sung_by_verse[key] === undefined ? 0 : sung_by_verse[key];
      sung_by_verse[key] = before + row.recordings.length;
    }
  }
  function verse_short_any(row) {
    let range = range_of(row);
    for (let verse = range.first; verse <= range.last; verse++) {
      let key = row.chapter + ":" + verse;
      if (sung_by_verse[key] < 2) {
        return true;
      }
    }
    return false;
  }
  function single_short(row) {
    let one = equal(row.recordings.length, 1);
    return one && verse_short_any(row);
  }
  let singles_rows = compared.rows.filter(single_short);
  function chapter_of(row) {
    return row.chapter;
  }
  let chapters = singles_rows.map(chapter_of);
  let verse_last_by_chapter = await psalms_chapters_verse_last(chapters);
  function label(row) {
    let whole_passage =
      row.chapter + ":1-" + verse_last_by_chapter[row.chapter];
    let whole_chapter = equal(row.passage, whole_passage);
    return whole_chapter ? row.passage + " (whole chapter)" : row.passage;
  }
  let singles = singles_rows.map(label);
  let result = {
    shortfall_count: compared.shortfall.length,
    singles,
  };
  return result;
}
