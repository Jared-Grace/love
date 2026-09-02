import { arguments_assert } from "./arguments_assert.mjs";
import { bless_blessed_tiles } from "./bless_blessed_tiles.mjs";
import { bless_view_blessed } from "./bless_view_blessed.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { bless_rung_earned_is } from "./bless_rung_earned_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
import { app_g_bless_lit_new } from "./app_g_bless_lit_new.mjs";
import { list_difference } from "./list_difference.mjs";
export function app_g_bless_overlay_render_tap_prayed_prayer_said(
  person,
  blessed,
  blocks,
  view_everyone,
  rung,
  hold_release,
) {
  "One prayer said over one person, written into the record, with everything it reached read back off the record afterwards: the ground it just lit, the faces it just reached, and the rung the player stands on once it is said.";
  "THE GROUND IS READ ONCE BEFORE THE PRAYER AND ONCE AFTER IT, and the difference is what just lit up. Read that way rather than worked out from what was prayed, because a prayer names one rung and finishes off whatever that completed, which is never a fixed amount - and an empty difference is exactly the case where nothing was finished and there is nothing to celebrate.";
  "THE SAME BEFORE-AND-AFTER IS TAKEN OVER THE PEOPLE, and for the same reason: a prayer names one rung and covers whoever that rung reaches, which is one face or a houseful or a street. Only the difference between the two pictures knows which of those just happened.";
  "It is asked over everybody rather than over who is in front of the player, because a prayer that reached a whole block reached the far side of it too - and a celebration that skipped the people round the corner would be quietly telling the player that the prayer stopped where their eyes did.";
  "THE PEOPLE ARE TOLD APART BY WHO THEY ARE and not by where they are standing, which is the one place these two questions differ. Ground holds still and so a square is its own name; a person walks, and two readings of the street taken a breath apart can put the same person on two squares and two different people on one. Asked by identity there is nothing to go wrong, because these are the same objects both times.";
  "THE REACH IS ASKED FOR AFTER THE PRAYER IS WRITTEN DOWN, because what was just prayed is what might have finished the place off - asking first would always be one blessing behind and the last unit of a block would never be the one that earned it.";
  "One prayer can never finish two rungs at once, so the reach is taken a single step and no loop is wanted. The rung climbs the moment any place one size up is finished, and that place always holds the person just prayed for - so before a block could be completed, one of its buildings was completed earlier and handed the player the building rung already. A step is therefore always the last one available.";
  "THE PERSON PRAYED FOR IS LET GO HERE, before any draw, so the draw sees them already free. Being held was only ever the time the player needed to say this prayer, and it is said - keeping them any longer would stand somebody already blessed in front of a player who has moved on to the next face.";
  arguments_assert(arguments, 6);
  let lit_before = bless_blessed_tiles(blessed, blocks);
  let everyone_before = bless_view_blessed(blessed, view_everyone);
  let people_before = bless_view_people(everyone_before);
  let place = bless_person_place(person, rung);
  bless_blessed_add(blessed, rung, place);
  let rung_after = rung;
  let earned = bless_rung_earned_is(blessed, person, rung);
  if (earned) {
    rung_after = bless_rung_after(rung);
  }
  hold_release(person);
  let lit_after = bless_blessed_tiles(blessed, blocks);
  let lit_fresh = app_g_bless_lit_new(lit_before, lit_after);
  let lit_now = bless_lit_buildings_whole(blessed, blocks, lit_fresh);
  let everyone_after = bless_view_blessed(blessed, view_everyone);
  let people_after = bless_view_people(everyone_after);
  let people_now = list_difference(people_after, people_before);
  let r = {
    lit_now,
    people_now,
    rung_after,
  };
  return r;
}
