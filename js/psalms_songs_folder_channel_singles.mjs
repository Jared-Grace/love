import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_songs_folder_channel_compare } from "./psalms_songs_folder_channel_compare.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
import { equal } from "./equal.mjs";
export async function psalms_songs_folder_channel_singles(
  folder_audio,
  channel_id,
) {
  arguments_assert(arguments, 2);
  ("$plain folder_audio");
  ("$plain channel_id");
  ("The passages sung only once in a folder of recordings, highest psalm first, each with a mark when the passage is the whole chapter - plus how many passages still have more recordings than public videos.");
  ("★ A WHOLE-CHAPTER ROW IS ITS OWN PASSAGE, NOT A HALF THAT LOST ITS TAKES. Psalm 149 has three takes of 1-5 and four of 6-9, yet 149:1-9 read as one recording, and the human took that row for a miscount of the whole psalm. Marking it says which song needs a second take.");
  let compared = await psalms_songs_folder_channel_compare(
    folder_audio,
    channel_id,
  );
  function lambda(row) {
    let eq = equal(row.recordings.length, 1);
    return eq;
  }
  let singles_rows = compared.rows.filter(lambda);
  function lambda2(row) {
    let r = row.chapter;
    return r;
  }
  let chapters = singles_rows.map(lambda2);
  let verse_last_by_chapter = await psalms_chapters_verse_last(chapters);
  function lambda3(row) {
    let whole_passage =
      row.chapter + ":1-" + verse_last_by_chapter[row.chapter];
    let whole_chapter = equal(row.passage, whole_passage);
    let r2 = whole_chapter ? row.passage + " (whole chapter)" : row.passage;
    return r2;
  }
  let singles = singles_rows.map(lambda3);
  let result = {
    shortfall_count: compared.shortfall.length,
    singles,
  };
  return result;
}
