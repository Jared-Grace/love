import { app_g_bless_homes } from "./app_g_bless_homes.mjs";
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
  let homes = property_get(r2, "homes");
  let blocks = property_get(r2, "blocks");
  let rung = property_get(r2, "rung");
  let container_map = property_get(r2, "container_map");
  let bar = property_get(r2, "bar");
  let view_everyone = property_get(r2, "view_everyone");
  let hold = property_get(r2, "hold");
  let hold_release = property_get(r2, "hold_release");
  function render() {
    "who is marked is worked out from the record on every step rather than remembered here,";
    "so a person covered by a prayer over their whole block lights up the moment they walk";
    "into view without anybody having gone back to write their name down";
    "the mark itself is not redrawn, though. everybody was given one when the street was";
    "drawn and praying only SHOWS theirs, because a person's square is written the moment";
    "their step begins - so a light placed from that square arrives at the tile they are";
    "walking towards while they are still crossing the one before it, and runs on ahead of";
    "them. made before anybody had moved, it is carried by their steps instead of placed by";
    "them, which is why the whole street is handed over here and not only the prayed-for";
    "they are worked out over the whole street and not over the cone, because a mark says";
    "this person has been prayed for and that stays true while the player looks away. The";
    "cone below decides what may be prayed for next, which is the question sight is the";
    "cost of - and the two are drawn as two layers because they answer two questions";
    let lit = bless_view_blessed(blessed, view_everyone);
    app_g_bless_glows(glows, view_everyone, lit);
    ("The houses are lit from the same record and on the same step as the faces, so a prayer");
    ("that finished a household shows on the ground the moment it is said - and a house whose");
    ("thirds were filled in one at a time turns whole at the very prayer that finished it.");
    ("It is worked out over the whole world rather than over what the player can see, for the");
    ("reason the marks are: a lit house is a fact about that house and stays true while the");
    ("player is round the corner. Drawn only where the player was looking, the street would go");
    ("dark behind them and the map would forget where the work had reached.");
    app_g_bless_homes(homes, blessed, blocks);
    ("The people left in a house the player has started are ringed on the same step, from");
    ("the same record, so the ring appears on the prayer that started the house and the last");
    ("of them goes out on the prayer that finishes it.");
    ("It is worked out over the whole street rather than over the cone, like the lights and");
    ("the houses, because who lives with whom stays true while the player looks elsewhere -");
    ("and a ring that only existed inside the cone would be a hint that vanished the moment");
    ("the player turned to walk towards it.");
    ("Drawn onto the layer the lights are on, because a ring and a light are the same kind of");
    ("thing: a mark under a person, made once and carried by their steps.");
    let remaining = bless_view_household_started(blessed, view_everyone);
    app_g_bless_rings(glows, view_everyone, remaining);
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
      let earned = bless_rung_earned_is(blessed, person, rung);
      if (earned) {
        rung = bless_rung_after(rung);
      }
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
