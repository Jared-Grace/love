import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { bless_person_blessed_is } from "./bless_person_blessed_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function bless_view_aimed(blessed, started, discerned) {
  arguments_assert(arguments, 3);
  ("Who the arrows point at: the house that should be finished next, or - when there is no");
  ("such house - whoever the last prayer for discernment named.");
  ("The two answers never compete. Somebody left in a house the player has opened is always");
  ("the better place to pray, because that house is on its way to earning a rung and a");
  ("stranger is not, so the discerned person is only ever shown when there is nothing to");
  ("finish. That is also the only moment the player has any reason to ask: the street has");
  ("gone quiet, every house they opened is closed, and nothing on the map says where to go.");
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
  let people = bless_view_people(started);
  let none = list_empty_is(people);
  if (not(none)) {
    return started;
  }
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
