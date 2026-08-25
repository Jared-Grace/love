import { bless_people_hold_replace } from "./bless_people_hold_replace.mjs";
import { bless_cone_people_wholly } from "./bless_cone_people_wholly.mjs";
import { bless_view_add_people } from "./bless_view_add_people.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_cone_view } from "./bless_cone_view.mjs";
export function app_g_bless_overlay_render_view_now(r, npcs) {
  arguments_assert(arguments, 2);
  let bar = property_get(r, "bar");
  let container_map = property_get(r, "container_map");
  let rung = property_get(r, "rung");
  let blessed = property_get(r, "blessed");
  let cone_get = property_get(r, "cone_get");
  let r2 = property_get(r, "r2");
  let world = property_get(r2, "world");
  let walking = property_get(r2, "walking");
  ("Who the player is HOLDING - the people who were wholly inside the cone at the moment");
  ("the player last moved or turned, kept prayable until the player moves or turns again.");
  ("Without it, praying for somebody walking was a chase. You tap empty ground to get near");
  ("them, you arrive, they are in front of you - and by the time you have looked at them");
  ("they have strolled out of the cone, so you walk again, and the street keeps walking");
  ("too. The wish was never for the player to catch anybody; it was to pray for the person");
  ("they went over to.");
  ("It is what the player LOOKED at, so it is taken when the player looks and not when they");
  ("pray. That is a real shift: sight used to be charged at the instant of praying, and now");
  ("it is charged at the instant of arriving. It reads the way seeing a crowd reads - you");
  ("take them in, and then you pray for them, and they need not stand still for it.");
  ("Only people held WHOLLY, because the loose test would quietly annex whoever happened to");
  ("have a foot on the cone's last square as the player stopped.");
  ("Replaced and never added to. Grown instead, standing still would eventually hold the");
  ("whole street, because everybody wanders through the cone sooner or later - and the game");
  ("would have no edge in it at all.");
  let held = [];
  let held_cone = null;
  function hold() {
    "Taken when the cone CHANGES rather than on every draw, because a draw also happens";
    "after a prayer - and a fresh snapshot there would drop the very people the player";
    "walked over to hold on to, the moment they prayed for the first of them. The cone is";
    "made of where the player stands, which way they face and how far they reach, so a cone";
    "that has not changed means the player has not acted.";
    let cone = cone_get();
    let text = json_to(cone);
    let same = equal(text, held_cone);
    if (same) {
      return;
    }
    held_cone = text;
    let held_before = held;
    held = bless_cone_people_wholly(cone, npcs);
    ("Held people are also kept from walking OUT of the view, so the promise is true in the");
    ("picture and not only in the rules. Prayable while strolling away, somebody is still");
    ("something the player has to watch leave; kept where the player put their eyes, there is");
    ("nothing to watch and nothing to chase, and the player looks at a few faces and prays");
    ("for them.");
    ("It lets go the instant the player moves or turns, which is the same instant this is");
    ("asked again - so nobody is held by a glance the player has already finished.");
    bless_people_hold_replace(held_before, held, cone);
  }
  function view_now() {
    "who the player can see AT THIS MOMENT, asked again rather than remembered, because the";
    "crowd walks between one question and the next";
    let cone = cone_get();
    let view = bless_cone_view(cone, npcs);
    let view_held = bless_view_add_people(view, held);
    return view_held;
  }
  ("everybody on the street, whether the player is facing them or not - what the marks are");
  ("drawn from, while the cone above decides what may be prayed for.");
  ("Sight is what a prayer costs, and it is charged once, at the moment of praying. Whether");
  ("somebody has been prayed for is a fact about them and not about where the player is");
  ("looking now, so turning away cannot unsay it. Marking only the cone would charge the");
  ("cost again every time the player looked elsewhere, and the mark exists to be a map: walk");
  ("to the edge of your own work and the crowd goes dark, which is where to pray next. A map");
  ("that is only ever as wide as one glance shows no edge, because dark is what everywhere");
  ("already looks like.");
  ("Asked once rather than again per step, because who is on the street does not change -");
  ("only where they are standing, and each of them is read for that at the moment of drawing.");
  let view_everyone = bless_view_of_people(npcs);
  let r3 = {
    bar,
    container_map,
    rung,
    blessed,
    cone_get,
    world,
    walking,
    view_now,
    view_everyone,
    hold,
  };
  return r3;
}
