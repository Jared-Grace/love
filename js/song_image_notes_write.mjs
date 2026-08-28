import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_note_path } from "./song_image_note_path.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function song_image_notes_write(key, notes) {
  "Put one couplet's whole note list back on the disk, the single place a picture's notes are written.";
  "EVERY CHANGE TO A NOTE LIST GOES THROUGH HERE - filing one, answering one, answering a whole round of them - because each of those is the same write of the same shape, and three copies of that shape would let the file drift into whatever the most recently edited copy thought it was.";
  "IT WRITES THE KEY BESIDE THE NOTES rather than trusting the file name, so a file that has been moved or copied still says which picture it is about.";
  arguments_assert(arguments, 2);
  let path = song_image_note_path(key);
  let contents = json_format_to({
    key,
    notes,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}
