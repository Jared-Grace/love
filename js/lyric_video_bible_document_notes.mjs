import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_read } from "./lyric_video_bible_document_read.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_picture_note_key } from "./lyric_video_picture_note_key.mjs";
import { lyric_video_picture_notes } from "./lyric_video_picture_notes.mjs";
import { list_filter_property_exclude_if_exists } from "./list_filter_property_exclude_if_exists.mjs";
import { list_map_unordered_async_filter_property_list_empty_not_is } from "./list_map_unordered_async_filter_property_list_empty_not_is.mjs";
export async function lyric_video_bible_document_notes(
  version,
  book_code,
  chapter_number,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "Every background picture of one chapter's lyric video that somebody has said something about and nobody has answered yet, in the order they appear in the song.";
  "IT IS WHAT A REDRAW RUN IS MADE FROM. Notes are written one at a time while a psalm plays, against whichever picture is on the screen; drawing is paid for in whole batches. So the writing is spread over a listening and the acting on it has to be gathered into one list, and that is this.";
  "A PICTURE NOBODY COMPLAINED ABOUT IS LEFT OUT ENTIRELY. Most pictures in a psalm are watched and found to be right, so an answer that named all thirteen would say the same thing on a clean psalm as on a broken one, and only reading every line of it would tell them apart. Left out, an empty answer means there is nothing to redraw.";
  "AN ANSWERED NOTE IS LEFT OUT AND THE PICTURE GOES WITH IT once that was its only note. The stores keep an answered note forever, so nothing anybody wrote is lost; it is only this list that stops offering it, which is what keeps a psalm gone through twice from asking for the same redraw again.";
  "IT CARRIES THE KEY AS WELL AS THE PATH. Whatever acts on this list has to be able to mark a note answered when the redraw lands, and the key is the one thing the store will take.";
  "A PASSAGE WITH NO DOCUMENT IS AN EMPTY LIST AND NOT A FAILURE, the same answer as a psalm nobody has complained about - because in both cases there is nothing to redraw, which is the only question being asked.";
  arguments_assert(arguments, 3);
  let document = await lyric_video_bible_document_read(
    version,
    book_code,
    chapter_number,
  );
  let none = null_is(document);
  if (none) {
    let empty = [];
    return empty;
  }
  let pictures = property_get(document, "pictures");
  async function picture_standing(picture) {
    let key = lyric_video_picture_note_key(picture);
    let held = await lyric_video_picture_notes(key);
    let open = list_filter_property_exclude_if_exists(held, "done", true);
    let path = property_get(picture, "path");
    let scene = property_get(picture, "scene");
    let start = property_get(picture, "start");
    let standing = {
      key,
      path,
      scene,
      start,
      notes: open,
    };
    return standing;
  }
  let wanted = await list_map_unordered_async_filter_property_list_empty_not_is(
    pictures,
    picture_standing,
    "notes",
  );
  return wanted;
}
