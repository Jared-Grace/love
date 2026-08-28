import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_notes } from "./song_image_notes.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { song_image_notes_write } from "./song_image_notes_write.mjs";
export async function song_image_notes_done(key) {
  "Mark every note standing against one couplet's drawing as answered at once, for the end of a round where each of them has been worked through.";
  "IT IS THE WHOLE FILE AND NOT A NOTE AT A TIME, because a round is answered as a round. Pressing thirteen notes down one at a time is thirteen chances to miss one, and the one that is missed is then read next round as though it were still true.";
  "IT IS RUN AFTER THE REDRAWING AND NEVER BEFORE. A note is answered by the picture that comes after it, so running this first would retire a fault that is still on the screen.";
  arguments_assert(arguments, 1);
  let notes = await song_image_notes(key);
  function mark(one) {
    property_set(one, "done", true);
  }
  each(notes, mark);
  let path = await song_image_notes_write(key, notes);
  return path;
}
