import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { bless_place_done_is } from "./bless_place_done_is.mjs";
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
  ("A unit counts as done however it was done - by its own name, or by everything inside it");
  ("being done. That is not a leniency, it is the only reading that matches what the player");
  ("is shown. A prayer names exactly one rung and the player climbs, so the households of a");
  ("building are usually finished person by person, before the word household is ever said.");
  ("Counting only the name, the building would never be done - and every one of its people");
  ("is already lit, so no further prayer could ever change that. Measured before this was");
  ("fixed: a player following the marks earned the household and the building rungs and");
  ("then ran out of dark faces with the block still unearned, every time.");
  let above = bless_rung_after(rung);
  let top = not(above);
  if (top) {
    return false;
  }
  let container = bless_person_place(person, above);
  let members = bless_place_members(above, container);
  function member_done(place) {
    let is = bless_place_done_is(blessed, rung, place);
    return is;
  }
  let earned = list_all_is(members, member_done);
  return earned;
}
