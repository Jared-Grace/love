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
  ("Written at the PERSON rung rather than as a finished household, because a household");
  ("that is already down as blessed is a house already gold - and the finishing is the whole");
  ("of what this opening is for.");
  let asked = app_g_bless_household_first_is();
  if (not(asked)) {
    return;
  }
  let household = 0;
  let members = bless_place_members("household", household);
  let waiting = list_last(members);
  function member_bless(member) {
    let last = equal(member, waiting);
    if (last) {
      return;
    }
    bless_blessed_add(blessed, "person", member);
  }
  each(members, member_bless);
}
