import { arguments_assert } from "./arguments_assert.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_last } from "./list_last.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { bless_rungs } from "./bless_rungs.mjs";
import { list_first } from "./list_first.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
export function app_g_bless_blessed_head_start_building(blessed) {
  arguments_assert(arguments, 1);
  ("Writes the first building into a brand new record as far as one family short of finished - every other family in it prayed for, people and family alike - and hands back the rung that record has earned.");
  ("The FIRST building, because its address is arithmetic and its families are its number times four. It stands a short walk from where the player is set down, and it is the same house the household openings work on, so the two sets of openings do not describe different streets.");
  ("The one left waiting is the LAST family of the house, and it does not matter which: the arrow at the edge of the screen leans towards whoever the next prayer would make the most progress with, and with the rest of the building lit that family is the only candidate there is. The game's own wayfinding walks the player to the prayer this opening exists for.");
  ("The family left waiting is left EMPTY rather than part-prayed, because by now the player reaches a whole family in one prayer. Half of it written in would be half a prayer already said, and the count the game reports afterwards would be short of what actually got blessed.");
  ("The building itself is deliberately not written in. It is what the last prayer earns, and a house already down as blessed is a house already gold - which is the picture this opening exists to arrive at rather than to start from.");
  ("The rung is one step up from the bottom, and it is asked of the ladder rather than spelled out. Completing a family is exactly what earns the rung above person, and two of them have been completed here - so the ladder's own answer cannot disagree with the record underneath it.");
  let building = 0;
  let families = bless_place_members("building", building);
  let waiting = list_last(families);
  function person_bless(person) {
    bless_blessed_add(blessed, "person", person);
  }
  function family_bless(family) {
    let last = equal(family, waiting);
    if (last) {
      return;
    }
    let people = bless_place_members("household", family);
    each(people, person_bless);
    bless_blessed_add(blessed, "household", family);
  }
  each(families, family_bless);
  let rungs = bless_rungs();
  let bottom = list_first(rungs);
  let climbed = bless_rung_after(bottom);
  return climbed;
}
