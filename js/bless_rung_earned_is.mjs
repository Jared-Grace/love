import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { bless_blessed_is } from "./bless_blessed_is.mjs";
export function bless_rung_earned_is(blessed, person, rung) {
  arguments_assert(arguments, 3);
  ("Whether the prayer just said finished a place off - every unit at this rung, inside the");
  ("one container above, now prayed for.");
  ("This is the whole earning rule. A rung is not bought and it is not given for praying a");
  ("certain number of times; it is earned by COMPLETING - every household in the building,");
  ("every building on the block. That is why depth is worked once at home and breadth is");
  ("the reward: the player finishes one small thing entirely, and is handed the reach to");
  ("bless a larger thing anywhere in the world.");
  ("The container is found through the person, like everything else here. The player is");
  ("looking at somebody; the block being finished is theirs, not the ground's.");
  ("At the top there is nothing above to complete, so nothing is earned. That is the game");
  ("being finished rather than a case to guard - once the world itself has been prayed for,");
  ("there is no further out to reach.");
  let above = bless_rung_after(rung);
  let top = not(above);
  if (top) {
    return false;
  }
  let container = bless_person_place(person, above);
  let members = bless_place_members(above, container);
  function member_blessed(place) {
    let is = bless_blessed_is(blessed, rung, place);
    return is;
  }
  let earned = list_all_is(members, member_blessed);
  return earned;
}
