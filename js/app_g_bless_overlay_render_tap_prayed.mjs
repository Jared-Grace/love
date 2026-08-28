import { list_difference } from "./list_difference.mjs";
import { bless_view_blessed } from "./bless_view_blessed.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { bless_blessed_tiles } from "./bless_blessed_tiles.mjs";
import { app_g_bless_lit_new } from "./app_g_bless_lit_new.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_g_bless_finished } from "./app_g_bless_finished.mjs";
import { bless_told_after_prayer_or_null } from "./bless_told_after_prayer_or_null.mjs";
import { app_g_bless_notice } from "./app_g_bless_notice.mjs";
import { app_g_bless_edge } from "./app_g_bless_edge.mjs";
import { app_g_bless_marks } from "./app_g_bless_marks.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_wash } from "./app_g_bless_wash.mjs";
import { bless_view_person_at } from "./bless_view_person_at.mjs";
import { not } from "./not.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { bless_rung_earned_is } from "./bless_rung_earned_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
import { app_g_bless_pray_overlay } from "./app_g_bless_pray_overlay.mjs";
export function app_g_bless_overlay_render_tap_prayed(
  r2,
  view_now,
  glows,
  wash,
) {
  arguments_assert(arguments, 4);
  let walking = property_get(r2, "walking");
  let world = property_get(r2, "world");
  let cone_get = property_get(r2, "cone_get");
  let blessed = property_get(r2, "blessed");
  let homes = property_get(r2, "homes");
  let blocks = property_get(r2, "blocks");
  let rung = property_get(r2, "rung");
  let container_map = property_get(r2, "container_map");
  let bar = property_get(r2, "bar");
  let view_everyone = property_get(r2, "view_everyone");
  let hold = property_get(r2, "hold");
  let hold_release = property_get(r2, "hold_release");
  let edge = property_get(r2, "edge");
  function render() {
    "Everything the record has to say about the street - who is lit, which houses are filled";
    "in, who is ringed - is drawn from the record on every step rather than remembered here,";
    "so a person covered by a prayer over their whole block lights up the moment they walk";
    "into view without anybody having gone back to write their name down.";
    let remaining = app_g_bless_marks(
      glows,
      homes,
      blocks,
      blessed,
      view_everyone,
    );
    ("The arrow at the edge of the screen is aimed here rather than with the marks on the");
    ("ground, because it is the one hint that is not about the street at all - it is about");
    ("where the screen ENDS, and so it has to be worked out from the frame and the strip of");
    ("buttons, neither of which anything drawing on the map has any business knowing about.");
    app_g_bless_edge(edge, container_map, bar, remaining);
    let cone = cone_get();
    ("The draw is also where the player is noticed to have MOVED, because every player action");
    ("ends in one - a step, a turn, a prayer - and the hold reads the cone to tell which. Told");
    ("from the outside instead, the two places that walk the player and the one that turns");
    ("them would each have to remember to say so, and the one that forgot would be a person");
    ("the player thought they were holding and were not.");
    hold();
    app_g_bless_wash(wash, cone);
  }
  function tap_prayed(target) {
    "Whether the tap landed on somebody, and so became a prayer instead of a walk.";
    let x = property_get(target, "x");
    let y = property_get(target, "y");
    let view = view_now();
    let person = bless_view_person_at(view, x, y);
    if (not(person)) {
      return false;
    }
    async function amen() {
      "The ground already prayed for is read once before this prayer and once after it, and";
      "the difference is what just lit up. Read that way rather than worked out from what";
      "was prayed, because a prayer names one rung and finishes off whatever that completed,";
      "which is never a fixed amount - and an empty difference is exactly the case where";
      "nothing was finished and there is nothing to celebrate.";
      let lit_before = bless_blessed_tiles(blessed, blocks);
      ("The same before-and-after is taken over the PEOPLE as well as over the ground, and for");
      ("the same reason: a prayer names one rung and covers whoever that rung reaches, which");
      ("is one face or a houseful or a street. Only the difference between the two pictures");
      ("knows which of those just happened.");
      ("It is asked over everybody rather than over who is in front of the player, because a");
      ("prayer that reached a whole block reached the far side of it too - and a celebration");
      ("that skipped the people round the corner would be quietly telling the player that the");
      ("prayer stopped where their eyes did.");
      let everyone_before = bless_view_blessed(blessed, view_everyone);
      let people_before = bless_view_people(everyone_before);
      let place = bless_person_place(person, rung);
      bless_blessed_add(blessed, rung, place);
      ("the reach is asked for AFTER the prayer is written down, because what was just prayed");
      ("is what might have finished the place off - asking first would always be one blessing");
      ("behind and the last unit of a block would never be the one that earned it");
      ("one prayer can never finish two rungs at once, so the reach is taken a single step");
      ("and no loop is wanted. The rung climbs the moment any place one size up is finished,");
      ("and that place always holds the person just prayed for - so before a block could be");
      ("completed, one of its buildings was completed earlier and handed the player the");
      ("building rung already. A step is therefore always the last one available");
      let rung_before = rung;
      let earned = bless_rung_earned_is(blessed, person, rung);
      if (earned) {
        rung = bless_rung_after(rung);
      }
      ("What just happened is said over the STREET rather than on the prayer panel, because by");
      ("now the panel is gone and the player is looking at the street again - and the street is");
      ("what the news is about: faces elsewhere on it just went bright, or every prayer from");
      ("here on reaches a whole household.");
      ("Worked out here but SAID further down, once the street has been redrawn, because where");
      ("it is said depends on what the prayer did. A prayer that finished a whole house off");
      ("hands its line to the panel that celebrates the house; one that finished nothing puts");
      ("the line up on its own.");
      let line = bless_told_after_prayer_or_null(rung_before, rung);
      ("The person prayed for is let go here, before the draw, so the draw sees them already");
      ("free. Being held was only ever the time the player needed to say this prayer, and it");
      ("is said - keeping them any longer would stand somebody already blessed in front of a");
      ("player who has moved on to the next face.");
      hold_release(person);
      render();
      ("Whether anything was FINISHED is asked after the draw rather than before it, because");
      ("the draw is what puts the newly lit house on the screen at all. The celebration then");
      ("flashes over ground that is already warm underneath, and the white coming back off it");
      ("reveals a finished house rather than an empty square.");
      let lit_after = bless_blessed_tiles(blessed, blocks);
      let lit_now = app_g_bless_lit_new(lit_before, lit_after);
      let everyone_after = bless_view_blessed(blessed, view_everyone);
      let people_after = bless_view_people(everyone_after);
      ("The people are told apart by WHO they are and not by where they are standing, which is");
      ("the one place these two questions differ. Ground holds still and so a square is its own");
      ("name; a person walks, and two readings of the street taken a breath apart can put the");
      ("same person on two squares and two different people on one. Asked by identity there is");
      ("nothing to go wrong, because these are the same objects both times.");
      let people_now = list_difference(people_after, people_before);
      ("Ground and faces are handed over as two lists because they are lit two different ways:");
      ("ground where it lies, faces on the light each person carries with them. That is also");
      ("what lets a prayer over a single person be celebrated at all - nothing was finished and");
      ("no house filled in, and the whole of what changed is one face.");
      ("They are shown in turn rather than at once, faces first. A prayer reaches a face where");
      ("that person happens to be standing and a house where the house is, and those are rarely");
      ("the same place - so a camera aimed at both together sits between them and shows");
      ("neither. Which order, and how each is held on the screen, is settled where they are");
      ("celebrated rather than here.");
      let anything = list_concat_multiple([lit_now, people_now]);
      let nothing = list_empty_is(anything);
      if (nothing) {
        app_g_bless_notice(line);
        return;
      }
      await app_g_bless_finished(r2, lit_now, people_now, line);
    }
    app_g_bless_pray_overlay(container_map, rung, amen);
    return true;
  }
  let r = {
    walking,
    world,
    bar,
    render,
    tap_prayed,
  };
  return r;
}
