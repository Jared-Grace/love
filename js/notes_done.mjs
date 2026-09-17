import { arguments_assert } from "./arguments_assert.mjs";
import { notes_read } from "./notes_read.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { notes_write } from "./notes_write.mjs";
export async function notes_done(store, key, words) {
  "$plain store";
  "$plain key";
  "$plain words";
  "Mark every note standing against one thing whose words are the ones given as answered, so it comes off the list a reviewer is shown.";
  "IT MARKS AND NEVER DELETES. The notes are the account of why a thing was changed, and a press that threw one away would leave whoever looks at it next with no account of it - and no way back, because the press is in a browser and the writing is on a disk nobody is watching.";
  "IT IS ADDRESSED BY THE NOTE'S OWN WORDS AND NEVER BY ITS PLACE IN THE LIST. Another note can be filed while the page is standing open, and a number would then name whichever note had slid into that place rather than the one that was pressed.";
  "MARKING WORDS THAT MATCH NOTHING IS NOT A FAILURE. The same words filed twice are answered together, which is right, and words answered already are answered again to no effect.";
  arguments_assert(arguments, 3);
  let notes = await notes_read(store, key);
  function mark(one) {
    let same = property_equals(one, "note", words);
    if (same) {
      property_set(one, "done", true);
    }
  }
  each(notes, mark);
  let path = await notes_write(store, key, notes);
  return path;
}
