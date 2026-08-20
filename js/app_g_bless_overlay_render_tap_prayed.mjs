import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_view_blessed } from "./bless_view_blessed.mjs";
import { app_g_bless_glows } from "./app_g_bless_glows.mjs";
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
  let rung = property_get(r2, "rung");
  let container_map = property_get(r2, "container_map");
  let bar = property_get(r2, "bar");
  let view_everyone = property_get(r2, "view_everyone");
  function render() {
    "the marks are worked out from the record on every step rather than left where they were";
    "laid, because the people wearing them are walking - and a light left behind on an empty";
    "square reads as the prayer having missed the person it was for";
    "they are worked out over the whole street and not over the cone, because a mark says";
    "this person has been prayed for and that stays true while the player looks away. The";
    "cone below decides what may be prayed for next, which is the question sight is the";
    "cost of - and the two are drawn as two layers because they answer two questions";
    let lit = bless_view_blessed(blessed, view_everyone);
    app_g_bless_glows(glows, lit);
    let cone = cone_get();
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
      let earned = bless_rung_earned_is(blessed, person, rung);
      if (earned) {
        rung = bless_rung_after(rung);
      }
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
