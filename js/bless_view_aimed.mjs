import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_person_blessed_is } from "./bless_person_blessed_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function bless_view_aimed(blessed, discerned) {
  arguments_assert(arguments, 2);
  ("Who the arrows point at: whoever the last prayer for discernment named, and nobody");
  ("else.");
  ("The game does not point on its own. It used to aim at the rest of any house the player");
  ("had opened, so after one prayer an arrow was already telling them who was next - and");
  ("the question the discernment prayer exists to ask had been answered before anybody");
  ("asked it. The ring on the ground still says a house was started; only the pointing is");
  ("reserved for the answer to a prayer.");
  ("A discerned person who has since been prayed for is dropped. The answer is remembered");
  ("until the next one is asked for, and it easily outlives its own usefulness - the player");
  ("may walk to somebody else first, or a prayer over a block may cover the discerned");
  ("person without the player ever reaching them. Left in, the arrow would hang over");
  ("somebody already lit, telling the player to do again what they have done.");
  ("It is checked here rather than being cleared when the prayer is said, because the");
  ("record is what decides it and the record is read on every draw anyway. Cleared from the");
  ("prayer instead, every path that can bless somebody - by name, by house, by block, from");
  ("a dev opening - would have to remember to look, and the one that forgot would leave a");
  ("stale arrow up with nothing red.");
  let named = bless_view_people(discerned);
  function person_left_is(person) {
    let prayed = bless_person_blessed_is(blessed, person);
    let remaining = not(prayed);
    return remaining;
  }
  let left = list_filter(named, person_left_is);
  let view = bless_view_of_people(left);
  return view;
}
