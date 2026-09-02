import { app_g_bless_building_first_completed_is } from "./app_g_bless_building_first_completed_is.mjs";
import { app_g_bless_blessed_head_start_building } from "./app_g_bless_blessed_head_start_building.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_rungs } from "./bless_rungs.mjs";
import { list_first } from "./list_first.mjs";
import { app_g_bless_household_first_finished_is } from "./app_g_bless_household_first_finished_is.mjs";
import { app_g_bless_household_first_is } from "./app_g_bless_household_first_is.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_last } from "./list_last.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { each } from "./each.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
import { equal } from "./equal.mjs";
export function app_g_bless_blessed_head_start(blessed) {
  arguments_assert(arguments, 1);
  ("Writes into a brand new record the prayers an opening says have already been said, and");
  ("hands back the rung the player stands on once they are written - which for a new game");
  ("with no opening asked is the bottom of the ladder and nothing written at all.");
  ("THE RUNG IS HANDED BACK because a record and a rung are two halves of one state and a");
  ("head start that wrote only the record was a half-finished world. The rung is EARNED by");
  ("completing, and this writes completions in wholesale - so an opening that hands over a");
  ("finished household and leaves the player praying one person at a time is handing over a");
  ("street that has forgotten what happened on it. Measured on the phone: the aftermath");
  ("opening prayed for one face at a time when the whole point of it is what comes after.");
  ("The FIRST household, which is the people the crowd is numbered from - and their");
  ("addresses are arithmetic, so which three they are can be worked out rather than looked");
  ("up. They live in the first building on the first block, a short walk from where the");
  ("player is set down outside the middle one.");
  ("The one left waiting is the LAST of them, and it does not matter which: the arrow");
  ("at the edge of the screen already leans towards whoever the next prayer would make");
  ("progress with, and with the rest of a household lit that person is the only one there is. So");
  ("the game's own wayfinding walks the player to the prayer this opening exists for, and");
  ("nothing has to be explained.");
  ("All but one of them for the openings that leave the last prayer still to happen, and it is");
  ("written at the PERSON rung rather than as a finished household - a household already");
  ("down as blessed is a house already gold, and the finishing is the whole of what those");
  ("two openings are for. Nothing has been completed, so the rung is still the bottom one,");
  ("and the prayer those openings exist to watch is the one that climbs it.");
  ("All of them AND the household itself for the opening that hands over the aftermath. The");
  ("house has to be written in as well as its residents, because the street is drawn from");
  ("the record and nothing else: with only the residents down, the ground under them is");
  ("still plain, which is the picture from just BEFORE the celebration rather than after.");
  ("The rung there is one step up, which is the ladder's own answer rather than a word");
  ("written out: a household finished is exactly what earns the rung above person, and");
  ("asking the ladder means an opening cannot disagree with the game about what was won.");
  let rungs = bless_rungs();
  let bottom = list_first(rungs);
  let household = 0;
  ("The BUILDING opening is answered first and on its own. It writes a different shape of record - whole families rather than people, and a rung already climbed - so it has nothing to share with the two below it, and folding it in would make a run of conditions where each one has to be read only to find out it does not apply.");
  let building_first = app_g_bless_building_first_completed_is();
  if (building_first) {
    let climbed_building = app_g_bless_blessed_head_start_building(blessed);
    return climbed_building;
  }
  let done = app_g_bless_household_first_finished_is();
  let two_thirds = app_g_bless_household_first_is();
  let asked = or(done, two_thirds);
  if (not(asked)) {
    return bottom;
  }
  let members = bless_place_members("household", household);
  let waiting = list_last(members);
  function member_bless(member) {
    bless_blessed_add(blessed, "person", member);
  }
  if (done) {
    each(members, member_bless);
    bless_blessed_add(blessed, "household", household);
    let climbed = bless_rung_after(bottom);
    return climbed;
  }
  function member_bless_waiting_not(member) {
    let last = equal(member, waiting);
    if (last) {
      return;
    }
    bless_blessed_add(blessed, "person", member);
  }
  each(members, member_bless_waiting_not);
  return bottom;
}
