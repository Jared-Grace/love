import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_bless_glows } from "./app_g_bless_glows.mjs";
import { app_g_bless_wash } from "./app_g_bless_wash.mjs";
import { app_g_bless_pray_overlay } from "./app_g_bless_pray_overlay.mjs";
import { bless_cone_view } from "./bless_cone_view.mjs";
import { bless_view_blessed } from "./bless_view_blessed.mjs";
import { bless_view_person_at } from "./bless_view_person_at.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_blessed_add } from "./bless_blessed_add.mjs";
import { bless_rung_earned_is } from "./bless_rung_earned_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
export function app_g_bless_overlay_render(r, npcs) {
  arguments_assert(arguments, 2);
  ("What is drawn every time the world moves, and what a tap on somebody does.");
  ("The two live together because they are the same closure: praying changes how far the");
  ("next prayer reaches, and that reach is a value neither of them could hold alone.");
  let div_map = property_get(r, "div_map");
  let wash = property_get(r, "wash");
  let player_img_c = property_get(r, "player_img_c");
  let glows = property_get(r, "glows");
  let bar = property_get(r, "bar");
  let container_map = property_get(r, "container_map");
  let rung = property_get(r, "rung");
  let blessed = property_get(r, "blessed");
  let cone_get = property_get(r, "cone_get");
  let r2 = property_get(r, "r2");
  let world = property_get(r2, "world");
  let walking = property_get(r2, "walking");
  function view_now() {
    ("who the player can see AT THIS MOMENT, asked again rather than remembered, because the");
    ("crowd walks between one question and the next");
    let cone = cone_get();
    let view = bless_cone_view(cone, npcs);
    return view;
  }
  function render() {
    let view = view_now();
    ("the marks are worked out from the record on every step rather than left where they were");
    ("laid, because the people wearing them are walking - and a light left behind on an empty");
    ("square reads as the prayer having missed the person it was for");
    let lit = bless_view_blessed(blessed, view);
    app_g_bless_glows(glows, lit);
    let cone = cone_get();
    app_g_bless_wash(wash, cone);
  }
  function tap_prayed(target) {
    ("Whether the tap landed on somebody, and so became a prayer instead of a walk.");
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
      let earned = bless_rung_earned_is(blessed, person, rung);
      if (earned) {
        rung = bless_rung_after(rung);
      }
      render();
    }
    app_g_bless_pray_overlay(container_map, rung, amen);
    return true;
  }
  let r3 = {
    div_map,
    player_img_c,
    bar,
    world,
    walking,
    render,
    tap_prayed,
  };
  return r3;
}
