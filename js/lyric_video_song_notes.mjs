import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_song_document_read } from "./lyric_video_song_document_read.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_picture_note_key } from "./lyric_video_picture_note_key.mjs";
import { lyric_video_picture_notes } from "./lyric_video_picture_notes.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function lyric_video_song_notes(name) {
  "$plain name";
  "Every note anybody has written against any background picture of one song, gathered into one answer in the order the pictures are shown.";
  "IT IS ONE QUESTION BECAUSE REVIEWING IS ONE SITTING. Somebody goes through a song's pictures and writes against the ones that are wrong; whoever acts on that has to read all of it, and asking picture by picture is fourteen questions asked to find the two that were answered.";
  "A PICTURE WITH NOTHING AGAINST IT IS LEFT OUT. What comes back is a list of work to do, and an entry saying there is no work here is the same as no entry, except that it has to be read.";
  "THE PICTURE'S NAME COMES BACK BESIDE ITS NOTES. The notes are filed under the picture's path, which is exact and unreadable; the name is what the document calls it and what a redraw has to be told.";
  "THE PICTURES ARE ASKED ABOUT ALL AT ONCE AND STILL COME BACK IN ORDER. Each one is a small file that may not be there, so asking them one after another would spend fourteen waits on a question that is one wait wide; mapping the asking keeps the order the document put them in, which is the order somebody watched them in.";
  arguments_assert(arguments, 1);
  let document = await lyric_video_song_document_read(name);
  let none = null_is(document);
  if (none) {
    let nothing = null;
    return nothing;
  }
  let pictures = property_get(document, "pictures");
  async function picture_entry(picture) {
    let key = lyric_video_picture_note_key(picture);
    let notes = await lyric_video_picture_notes(key);
    let picture_name = property_get(picture, "name");
    let entry = {
      name: picture_name,
      notes,
    };
    return entry;
  }
  let asked = list_map(pictures, picture_entry);
  let entries = await Promise.all(asked);
  function noted(entry) {
    let notes = property_get(entry, "notes");
    let empty = list_empty_is(notes);
    let any = not(empty);
    return any;
  }
  let against = list_filter(entries, noted);
  return against;
}
