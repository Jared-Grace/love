import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_notes } from "./song_image_notes.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { song_image_notes_write } from "./song_image_notes_write.mjs";
export async function song_image_note_done(key, words) {
  "$plain words";
  "Mark every note standing against one couplet's drawing whose words are the ones given as answered, so it comes off the list a reviewer is shown.";
  "IT MARKS AND NEVER DELETES. The notes are the account of why a symbol clause reads the way it does, and a press that threw one away would leave whoever reads that clause next with no account of it at all - and no way back, because the press is in a browser and the writing is on a disk nobody is watching.";
  "IT IS ADDRESSED BY THE NOTE'S OWN WORDS AND NEVER BY ITS PLACE IN THE LIST. Another note can be filed while the review page is standing open, and a number would then name whichever note had slid into that place rather than the one that was pressed.";
  "MARKING WORDS THAT MATCH NOTHING IS NOT A FAILURE. The same words filed twice are answered together, which is right, and words answered already are answered again to no effect.";
  arguments_assert(arguments, 2);
  let notes = await song_image_notes(key);
  function mark(one) {
    let held = property_get(one, "note");
    let same = equal(held, words);
    if (same) {
      property_set(one, "done", true);
    }
  }
  each(notes, mark);
  let path = await song_image_notes_write(key, notes);
  return path;
}
