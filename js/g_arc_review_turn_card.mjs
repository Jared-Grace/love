import { g_arc_turn_scripture_named } from "./g_arc_turn_scripture_named.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_review_notes_turn } from "./g_arc_review_notes_turn.mjs";
export function g_arc_review_turn_card(entry, passages, notes, index) {
  "One turn of a written arc gathered into everything a screen has to show for it: the number it is addressed by, what the person said, the passage the answer named with that passage's own words, the reaction, whether they came to believe there, and the notes already standing against it.";
  "IT IS THE SAME TURN THE REVIEW PAGE PRINTS, gathered rather than written out. The page a person reads on paper and the page they read on a screen are asking one question, so the Scripture is found the same way and the number is the same number - two gatherings of a turn would let a note filed from a screen point at a different line than the same note filed from the page.";
  "THE SCRIPTURE IS ASKED FOR RATHER THAN FOUND HERE, and it is the same asking the printed page makes - which is what carries the check that a reference naming a passage nobody offered stops the reading rather than being handed on.";
  arguments_assert(arguments, 4);
  let number = property_get(entry, "number");
  let turn = property_get(entry, "turn");
  let conversation = property_get(entry, "conversation");
  let conversation_number = property_get(entry, "conversation_number");
  let conversation_first = property_get(entry, "conversation_first");
  let catch_up = property_get(conversation, "catch_up");
  let opener = property_get(turn, "opener");
  let before = property_get(turn, "before");
  let answered = g_arc_turn_scripture_named(turn, passages);
  let reference = property_get(answered, "reference");
  let scripture = property_get(answered, "scripture");
  let after = property_get(turn, "after");
  let believes = property_get(turn, "believes");
  let standing = g_arc_review_notes_turn(notes, index, number);
  let r = {
    number,
    conversation_number,
    conversation_first,
    catch_up,
    opener,
    before,
    reference,
    scripture,
    after,
    believes,
    notes: standing,
  };
  return r;
}
