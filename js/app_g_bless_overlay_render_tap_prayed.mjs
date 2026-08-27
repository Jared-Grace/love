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
    function amen() {
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
      ("Said before the person is let go and before the draw, so the line is already on screen");
      ("as the marks change underneath it and the player sees the two as one event.");
      let line = bless_told_after_prayer_or_null(rung_before, rung);
      app_g_bless_notice(line);
      ("The person prayed for is let go here, before the draw, so the draw sees them already");
      ("free. Being held was only ever the time the player needed to say this prayer, and it");
      ("is said - keeping them any longer would stand somebody already blessed in front of a");
      ("player who has moved on to the next face.");
      hold_release(person);
      render();
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
