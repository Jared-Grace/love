import { app_g_bless_family_first_celebrate_is } from "./app_g_bless_family_first_celebrate_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_last } from "./list_last.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_bless_family_first_pray(r) {
  arguments_assert(arguments, 1);
  ("Says the one prayer that finishes the first household off, when the address asked for");
  ("that, and does nothing at all otherwise.");
  ("Which person it is can be worked out rather than looked up: the first household's");
  ("members are arithmetic, all but one were written into the record as the street was");
  ("built, and the one left is the last of them. So this and the head start name the");
  ("same person without either of them being told who it is.");
  ("It prays rather than taps, so the player's cone is not consulted. They are set down");
  ("outside the middle of that building and may well be facing the wrong way; a tap would");
  ("then walk them instead of praying, which is right for a player and useless here.");
  ("Not waited on. What it sets off is half a minute of celebration, and the street is");
  ("already up behind it - so there is nothing after this that the celebration is holding");
  ("up.");
  let asked = app_g_bless_family_first_celebrate_is();
  if (not(asked)) {
    return;
  }
  let household = 0;
  let members = bless_place_members("household", household);
  let waiting = list_last(members);
  let pray_person_id = property_get(r, "pray_person_id");
  pray_person_id(waiting);
}
