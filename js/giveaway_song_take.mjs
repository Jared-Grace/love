import { arguments_assert } from "./arguments_assert.mjs";
import { path_basename } from "./path_basename.mjs";
import { psalms_song_file_part_or_null } from "./psalms_song_file_part_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { psalms_song_file_chapter_take } from "./psalms_song_file_chapter_take.mjs";
import { null_not_is_assert } from "./null_not_is_assert.mjs";
export async function giveaway_song_take(path_audio) {
  arguments_assert(arguments, 1);
  ("$plain path_audio");
  ("Which singing of a passage a recording on this disk is, as the number the recording itself carries.");
  ("★ IT IS READ BACK OFF THE FILE NAME RATHER THAN CARRIED ALONG, BECAUSE THE TWO FOLDER READERS THROW THE NUMBER AWAY AND FOURTEEN THINGS CALL THEM. Both readers do know it - they sort by it - and then their last step builds a row without it. Adding it to those rows would be the shorter change and would reach every one of those fourteen callers, in the area where the lyric videos are being worked on right now. Reading the name a second time reaches nothing, costs one more look at a string, and asks the very function that worked the number out in the first place, so the two answers cannot drift apart.");
  ("★ THE NUMBER IS THE ONE IN ROUND BRACKETS, AND IT IS A COUNTER AND NOT AN IDENTITY. The browser that saved these files numbered them in the order they were downloaded, so the same number can mean a different singing if the set is ever fetched again. That is exactly why a name built on it has to be written down once and kept, rather than worked out again at the moment of uploading - see the song-mark function for what the number becomes and why it is kept all the same.");
  ("Both readings are tried because a psalm is sung whole and also sung in parts, and the part reader deliberately refuses a whole-chapter name while the whole-chapter reader deliberately refuses a part's. Neither refusal is a fault; between them they cover every song, and the part is tried first because its name is the more particular of the two.");
  ("A name that neither reading accepts stops here rather than being given a number. Something that is not one of these songs would otherwise be handed a take of nothing and quietly published as the first singing of whatever passage the caller happened to be holding.");
  let file_name = await path_basename(path_audio);
  let part = psalms_song_file_part_or_null(file_name);
  let part_missing = null_is(part);
  if (part_missing) {
    let whole = psalms_song_file_chapter_take(file_name);
    null_not_is_assert(whole);
    let r = whole.take;
    return r;
  }
  let r2 = part.take;
  return r2;
}
