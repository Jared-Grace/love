import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_notes } from "./lyric_video_picture_notes.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_picture_notes_write } from "./lyric_video_picture_notes_write.mjs";
export async function lyric_video_picture_note_add(key, field, note) {
  "$plain key";
  "$plain field";
  "$plain note";
  "Put one note against one background picture of a lyric video - what is wrong with the picture, not what to draw instead - keeping every note already standing.";
  "IT APPENDS AND NEVER REPLACES. A song is watched more than once and by more than one person, and the commonest thing a second watcher does is see again what the first one saw. Replacing would make the second watching quietly erase the first.";
  "WHAT IS WRONG AND NEVER WHAT TO DRAW. A note is read by whoever writes the next description of the picture, and a note that already says what to draw settles that question before they have looked at the verse. Saying only what is wrong leaves the drawing to the description and keeps the note true however the picture is redrawn.";
  arguments_assert(arguments, 3);
  let notes = await lyric_video_picture_notes(key);
  list_add(notes, {
    field,
    note,
  });
  let path = await lyric_video_picture_notes_write(key, notes);
  return path;
}
