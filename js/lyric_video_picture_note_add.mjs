import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_add } from "./notes_add.mjs";
export async function lyric_video_picture_note_add(key, field, note) {
  "$plain key";
  "$plain field";
  "$plain note";
  "Put one note against one background picture of a lyric video - what is wrong with the picture, not what to draw instead - keeping every note already standing.";
  "WHAT IS WRONG AND NEVER WHAT TO DRAW. A note is read by whoever writes the next description of the picture, and a note that already says what to draw settles that question before they have looked at the verse. Saying only what is wrong leaves the drawing to the description and keeps the note true however the picture is redrawn.";
  arguments_assert(arguments, 3);
  let store = fn_name("lyric_video_picture_note_add");
  let path = await notes_add(store, key, {
    field,
    note,
  });
  return path;
}
