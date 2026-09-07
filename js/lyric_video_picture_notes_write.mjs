import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_note_path } from "./lyric_video_picture_note_path.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function lyric_video_picture_notes_write(key, notes) {
  "$plain key";
  "$plain notes";
  "Put one background picture's whole note list back on the disk, the single place a lyric video picture's notes are written.";
  "EVERY CHANGE TO A NOTE LIST GOES THROUGH HERE, so adding a note and answering one cannot drift into two different ideas of what a note file holds.";
  "IT WRITES THE KEY BESIDE THE NOTES rather than trusting the file name, so a file that has been moved or copied still says which picture it is about.";
  arguments_assert(arguments, 2);
  let path = lyric_video_picture_note_path(key);
  let contents = json_format_to({
    key,
    notes,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}
