import { song_image_notes_write } from "./song_image_notes_write.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_notes } from "./song_image_notes.mjs";
import { list_add } from "./list_add.mjs";
export async function song_image_note_add(key, field, note, attempt) {
  "$plain field";
  "$plain note";
  "$plain attempt";
  "Put one note against one couplet's drawing - what is wrong with the picture, not what to draw instead - keeping every note already standing.";
  "IT APPENDS AND NEVER REPLACES. Two people may fault one picture for two different things, and a store keeping one note a picture would let the second silently erase the first.";
  "WHAT IS WRONG AND NEVER WHAT TO DRAW. A note saying what the picture should be has done the drawing, so whoever wrote it is needed again for the next picture and the one after; a note saying what is wrong with this one leaves the drawing where it belongs and teaches whoever reads it something that fires on pictures nobody has looked at yet.";
  "IT RECORDS WHICH ATTEMPT WAS ON SCREEN, because a note without one cannot be read a day later. A couplet accumulates dozens of drawings and the page can be arrowed to any of them, so the same words mean opposite things depending on which was showing - and a round of notes filed against fresh drawings is indistinguishable from a round filed against the ones they replaced. Measured 2026-09-08: nine pictures were redrawn, the page opened on the older kept one for every one of them, and the notes that came back could not be sorted into the two piles at all until the reader started typing the number in by hand.";
  arguments_assert(arguments, 4);
  let notes = await song_image_notes(key);
  list_add(notes, {
    field,
    note,
    attempt,
  });
  let path = await song_image_notes_write(key, notes);
  return path;
}
