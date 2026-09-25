import { arguments_assert } from "./arguments_assert.mjs";
import { notes_read } from "./notes_read.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { notes_write } from "./notes_write.mjs";
export async function notes_reply(store, key, words, reply) {
  "$plain store";
  "$plain key";
  "$plain words";
  "$plain reply";
  "Put a short reply under every note standing against one thing whose words are the ones given, so whoever left the note reads the answer beside it rather than in a separate report they have to map back.";
  "IT IS ADDRESSED BY THE NOTE'S OWN WORDS AND NEVER BY ITS PLACE IN THE LIST, for the same reason answering is: a note filed while the page stands open would slide another into that place.";
  "A NEWER REPLY REPLACES THE OLDER ONE, because a reply says what was done about the note as it stands now, and two of them would make the reader work out which is current.";
  "IT ANSWERS WITH HOW MANY NOTES IT REACHED, so words that matched nothing are seen as a zero rather than looking like a reply that landed.";
  arguments_assert(arguments, 4);
  let notes = await notes_read(store, key);
  let reached = 0;
  function mark(one) {
    let same = property_equals(one, "note", words);
    if (same) {
      property_set(one, "reply", reply);
      reached = reached + 1;
    }
  }
  each(notes, mark);
  await notes_write(store, key, notes);
  return reached;
}
