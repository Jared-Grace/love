import { app_g_bless_overlay_render_tap_prayed_person_id_is } from "./app_g_bless_overlay_render_tap_prayed_person_id_is.mjs";
import { app_g_bless_overlay_render_tap_prayed_render_ground } from "./app_g_bless_overlay_render_tap_prayed_render_ground.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_blessed_tiles } from "./bless_blessed_tiles.mjs";
import { bless_view_blessed } from "./bless_view_blessed.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { bless_rung_earned_is } from "./bless_rung_earned_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
import { app_g_bless_lit_new } from "./app_g_bless_lit_new.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_size } from "./list_size.mjs";
import { bless_told_after_prayer_or_null } from "./bless_told_after_prayer_or_null.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_g_bless_notice } from "./app_g_bless_notice.mjs";
import { app_g_bless_finished } from "./app_g_bless_finished.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { not } from "./not.mjs";
import { bless_view_person_at } from "./bless_view_person_at.mjs";
import { app_g_bless_prayer_skipped_is } from "./app_g_bless_prayer_skipped_is.mjs";
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
    ("The draw here leaves the GROUND out, and the house this prayer finished goes up later,");
    ("once the faces have been celebrated. As far as the record is concerned the last face");
    ("and the filled-in house happen at the same instant, but the player watches them one");
    ("after the other - and a house that turns gold while the person who finished it is still");
    ("being blessed has answered the question while they are still watching it asked.");
    ("Holding it back is safe rather than merely late. Nothing rubs a lit house out except a");
    ("later draw, so skipping this one leaves every house that was already lit exactly where");
    ("it was, and the only one missing is the one that has this moment been finished.");
    ("The faces are NOT held back. That light is the prayer that was just said, and it is the");
    ("thing the player is looking at.");
    app_g_bless_overlay_render_tap_prayed_render_ground(
      false,
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
    );
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
    ("What just happened is said over the STREET rather than on the prayer panel, because by");
    ("now the panel is gone and the player is looking at the street again - and the street is");
    ("what the news is about: faces elsewhere on it just went bright, or every prayer from");
    ("here on reaches a whole household.");
    ("Worked out HERE, after the faces have been counted, rather than up where the prayer was");
    ("written down. A line that says how many people a prayer reached has to be told how many");
    ("it reached, and the only honest source of that is the same difference the celebration");
    ("lights - so the sentence and the faces cannot disagree. Asked earlier it could only be");
    ("answered from the size of the rung, which is a fixed three or nine and stays three or");
    ("nine on the prayer that lights one new face because the other two were lit last week.");
    ("Worked out here and SAID further down, once the street has been redrawn, because where");
    ("it is said depends on what the prayer did. A prayer that finished a whole house off");
    ("hands its line to the panel that celebrates the house; one that finished nothing puts");
    ("the line up on its own.");
    let faces = list_size(people_now);
    let line = bless_told_after_prayer_or_null(rung_before, rung, faces);
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
    ("The draw that puts the finished house up is handed OVER rather than done here, because");
    ("only the celebration knows when the faces are done with. It also has to happen before");
    ("the ground celebration and not after it: that flash is white light coming back off the");
    ("street, and off a square with nothing underneath it what it reveals is an empty one.");
    await app_g_bless_finished(r2, lit_now, people_now, line, render);
  }
  function pray_person_id(id) {
    "Prays for whoever carries this person number, wherever they are standing and whether or";
    "not the player is looking at them.";
    "It exists for the dev openings, which set a street up in a particular state and then";
    "want the one prayer that state was built for said straight away. A test that has to be";
    "walked to is a test that is run less often than it should be.";
    "It is asked by NUMBER because that is what an opening can name. A person number is";
    "arithmetic - the third resident of the first household is a sum - while the person";
    "object itself only exists once the street has been built.";
    "Sight is not charged here, and that is the difference between this and a tap. A player";
    "may only pray for somebody they can see; this is not a player, it is the address bar,";
    "and it is behind the same dev gate as every other opening.";
    let everyone = bless_view_people(view_everyone);
    function person_id_is(someone) {
      let r3 = app_g_bless_overlay_render_tap_prayed_person_id_is(someone, id);
      return r3;
    }
    let person = list_find_or_null(everyone, person_id_is);
    if (not(person)) {
      return;
    }
    person_pray(person);
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
