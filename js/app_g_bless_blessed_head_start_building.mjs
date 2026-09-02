import { arguments_assert } from "./arguments_assert.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_last } from "./list_last.mjs";
import { bless_rungs } from "./bless_rungs.mjs";
import { list_first } from "./list_first.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
export function app_g_bless_blessed_head_start_building(blessed, done) {
  arguments_assert(arguments, 2);
  ("Writes the first building into a brand new record - either as far as one family short of finished, or the whole of it with the house itself down as blessed - and hands back the rung that record has earned.");
  ("The FIRST building, because its address is arithmetic and its families are its number times four. It stands a short walk from where the player is set down, and it is the same house the family openings work on, so the two sets of openings do not describe different streets.");
  ("ONE FAMILY SHORT is the opening for watching a building get finished. The one left waiting is the LAST family of the house, and it does not matter which: the arrow at the edge of the screen leans towards whoever the next prayer would make the most progress with, and with the rest of the building lit that family is the only candidate there is. So the game walks the player to the prayer this opening exists for.");
  ("That family is left EMPTY rather than part prayed, because by then the player reaches a whole family in one prayer. Half of it written in would be half a prayer already said, and the count the game reports afterwards would be short of what actually got blessed.");
  ("THE WHOLE OF IT is the opening for what comes after, and there the house itself has to be written in as well as everyone living in it. The street is drawn from the record and nothing else, so residents alone leaves the ground under them still plain - which is the picture from just before the celebration rather than from after it.");
  ("The rung is asked of the LADDER rather than spelled out, one step up for a building part done and two for a building finished. Completing a family is what earns the rung above person and completing every family in a house is what earns the one above that, so an opening cannot disagree with the game about what was won. It also matters more here than anywhere: a player handed a finished building and left praying one family at a time never sees the thing that building bought them.");
  let building = 0;
  let families = bless_place_members("building", building);
  let waiting = list_last(families);
  let rungs = bless_rungs();
  let bottom = list_first(rungs);
  let reached = bless_rung_after(bottom);
  function person_bless(person) {
    bless_blessed_add(blessed, "person", person);
  }
  function family_bless(family) {
    let people = bless_place_members("family", family);
    each(people, person_bless);
    bless_blessed_add(blessed, "family", family);
  }
  function family_bless_waiting_not(family) {
    let last = equal(family, waiting);
    if (last) {
      return;
    }
    family_bless(family);
  }
  if (done) {
    each(families, family_bless);
    bless_blessed_add(blessed, "building", building);
    let climbed = bless_rung_after(reached);
    return climbed;
  }
  each(families, family_bless_waiting_not);
  return reached;
}
