import { app_g_bless_household_first_finished_is } from "./app_g_bless_household_first_finished_is.mjs";
import { or } from "./or.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_household_first_is } from "./app_g_bless_household_first_is.mjs";
import { not } from "./not.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { each } from "./each.mjs";
export function app_g_bless_blessed_head_start(blessed) {
  arguments_assert(arguments, 1);
  ("Writes into a brand new record the prayers an opening says have already been said, and");
  ("writes nothing at all when no opening asked.");
  ("The FIRST household, which is the three people the crowd is numbered from - and their");
  ("addresses are arithmetic, so which three they are can be worked out rather than looked");
  ("up. They live in the first building on the first block, a short walk from where the");
  ("player is set down outside the middle one.");
  ("The one left waiting is the LAST of the three, and it does not matter which: the arrow");
  ("at the edge of the screen already leans towards whoever the next prayer would make");
  ("progress with, and with two of a household lit that person is the only one there is. So");
  ("the game's own wayfinding walks the player to the prayer this opening exists for, and");
  ("nothing has to be explained.");
  ("Two of the three for the openings that leave the last prayer still to happen, and it is");
  ("written at the PERSON rung rather than as a finished household - a household already");
  ("down as blessed is a house already gold, and the finishing is the whole of what those");
  ("two openings are for.");
  ("All three AND the household itself for the opening that hands over the aftermath. The");
  ("house has to be written in as well as its residents, because the street is drawn from");
  ("the record and nothing else: with only the three people down, the ground under them is");
  ("still plain, which is the picture from just BEFORE the celebration rather than after.");
  let household = 0;
  let done = app_g_bless_household_first_finished_is();
  let two_thirds = app_g_bless_household_first_is();
  let asked = or(done, two_thirds);
  if (not(asked)) {
    return;
  }
  let members = bless_place_members("household", household);
  let waiting = list_last(members);
  function member_bless(member) {
    bless_blessed_add(blessed, "person", member);
  }
  if (done) {
    each(members, member_bless);
    bless_blessed_add(blessed, "household", household);
    return;
  }
  function member_bless_waiting_not(member) {
    let last = equal(member, waiting);
    if (last) {
      return;
    }
    bless_blessed_add(blessed, "person", member);
  }
  each(members, member_bless_waiting_not);
}
