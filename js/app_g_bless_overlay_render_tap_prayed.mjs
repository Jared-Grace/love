import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { app_g_bless_overlay_render_tap_prayed_render_ground } from "./app_g_bless_overlay_render_tap_prayed_render_ground.mjs";
import { bless_blessed_tiles } from "./bless_blessed_tiles.mjs";
import { bless_view_blessed } from "./bless_view_blessed.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { bless_rung_earned_is } from "./bless_rung_earned_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
import { app_g_bless_lit_new } from "./app_g_bless_lit_new.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_bless_overlay_render_tap_prayed_celebrate } from "./app_g_bless_overlay_render_tap_prayed_celebrate.mjs";
import { app_g_bless_overlay_render_tap_prayed_person_id_pray } from "./app_g_bless_overlay_render_tap_prayed_person_id_pray.mjs";
import { app_g_bless_overlay_render_tap_prayed_person_at } from "./app_g_bless_overlay_render_tap_prayed_person_at.mjs";
import { app_g_bless_prayer_skipped_is } from "./app_g_bless_prayer_skipped_is.mjs";
import { app_g_bless_pray_overlay } from "./app_g_bless_pray_overlay.mjs";
export function app_g_bless_overlay_render_tap_prayed(
  r2,
  view_now,
  glows,
  wash,
) {
  "THREE PIECES OF THIS ARE WRITTEN NEXT DOOR, and each of them is a piece that needs to remember nothing from one prayer to the next: who a tap landed on, praying by person number, and everything a prayer comes to once what it reached is known. What is kept here is what cannot be handed anywhere - the three things one street has to remember between one prayer and the next.";
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
  ("Two things the picture is allowed to be behind the record on while a celebration runs:");
  ("the house that prayer just filled in, and the quiet gold on the faces it just reached.");
  ("Both are kept as STATE here rather than decided at each draw, and that is the whole");
  ("repair. The street is redrawn on its own clock all through a celebration - every step");
  ("every walking person takes asks for a draw - so a hold that was one skipped draw was");
  ("undone by the next of those within a breath. A player saw the house light up while the");
  ("camera was still travelling to it, which is the answer arriving before the question.");
  ("Kept HERE rather than inside the draw, because a draw is asked for from everywhere and");
  ("only the prayer knows what is being celebrated. One answer that every draw reads is one");
  ("that no two draws can disagree about.");
  let held_ground = false;
  let held_people = [];
  function render() {
    "A draw of the street from the record, less whatever a celebration is still holding back.";
    let ground = not(held_ground);
    app_g_bless_overlay_render_tap_prayed_render_ground(
      ground,
      glows,
      homes,
      blocks,
      blessed,
      view_everyone,
      edge,
      container_map,
      bar,
      cone_get,
      hold,
      wash,
      held_people,
    );
  }
  function ground_show() {
    "Lets the finished house go up on the map. The celebration says when, and it is after";
    "the camera has arrived and the street has been held still long enough for the player to";
    "have seen it as it was.";
    held_ground = false;
    render();
  }
  function faces_show() {
    "Lets the quiet gold go up on the faces just prayed for, once the arriving light on them";
    "is over. The two marks land on the same few pixels, so shown together they read as one";
    "mark brightening slightly rather than as a light arriving and a light left behind.";
    held_people = [];
    render();
  }
  async function person_pray(person) {
    "Saying the prayer over one person and showing everything it reached. It is the whole of";
    "what praying DOES, and it is written here rather than inside the tap because a tap is";
    "only one of the ways it can be asked for - a dev opening asks for it with no tap at all.";
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
    ("The person prayed for is let go here, before the draw, so the draw sees them already");
    ("free. Being held was only ever the time the player needed to say this prayer, and it");
    ("is said - keeping them any longer would stand somebody already blessed in front of a");
    ("player who has moved on to the next face.");
    hold_release(person);
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
    ("What this prayer just lit is now held back from the picture, and the street is drawn");
    ("with it held. Both halves of the celebration will hand it over in their own time: the");
    ("faces once the arriving light on them is spent, the house once the camera has reached");
    ("it. Until then the map keeps saying what it said a moment ago.");
    ("The ground is held only when there IS a house to hold. Held on a prayer that finished");
    ("nothing, the map would sit a draw behind for no reason and the release would be a line");
    ("somebody had to remember to reach.");
    ("The faces are held by NAME, and the ground by a plain yes or no, because they are");
    ("undone differently. A house is either drawn or not; a face has to be told apart from");
    ("the ninety other faces whose gold must stay exactly where it is.");
    ("The draw is asked for HERE, after the holds are set and not before them, or it would");
    ("be the one draw in the whole celebration that showed everything.");
    held_ground = list_empty_not_is(lit_now);
    held_people = people_now;
    render();
    await app_g_bless_overlay_render_tap_prayed_celebrate(
      r2,
      lit_now,
      people_now,
      rung_before,
      rung,
      ground_show,
      faces_show,
    );
  }
  function pray_person_id(id) {
    let r4 = app_g_bless_overlay_render_tap_prayed_person_id_pray(
      id,
      view_everyone,
      person_pray,
    );
    return r4;
  }
  function tap_prayed(target) {
    "Whether the tap landed on somebody, and so became a prayer instead of a walk.";
    let person = app_g_bless_overlay_render_tap_prayed_person_at(
      target,
      view_now,
    );
    if (not(person)) {
      return false;
    }
    function amen() {
      person_pray(person);
    }
    ("An opening can ask for the panel to be left out, and then the tap IS the amen - the same");
    ("thing the button would have called, called by the tap that would have put the button up.");
    ("Nothing between them is skipped, because there is nothing between them: the panel reads");
    ("out the prayer and waits, and everything this screen is worked on for happens after it.");
    let skipped = app_g_bless_prayer_skipped_is();
    if (skipped) {
      amen();
      return true;
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
    pray_person_id,
  };
  return r;
}
