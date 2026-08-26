import { arguments_assert } from "./arguments_assert.mjs";
import { bless_people_hold_release } from "./bless_people_hold_release.mjs";
import { list_without } from "./list_without.mjs";
import { bless_world_walking_is } from "./bless_world_walking_is.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { bless_cone_people_wholly } from "./bless_cone_people_wholly.mjs";
import { bless_people_hold_replace } from "./bless_people_hold_replace.mjs";
import { bless_cone_view } from "./bless_cone_view.mjs";
import { bless_view_add_people } from "./bless_view_add_people.mjs";
export function app_g_bless_hold(world, cone_get, npcs) {
  arguments_assert(arguments, 3);
  ("Who the player is HOLDING - the people who were wholly inside the cone at the moment");
  ("the player last moved or turned, kept prayable until the player moves or turns again -");
  ("as the three things a caller does with them: take a hold, let one person go, and ask");
  ("who can be seen right now.");
  ("The three are one unit because they are one piece of remembered state read three ways,");
  ("and that state is the two lines below. Handed out separately they would each need it");
  ("passed in, which is the same as saying they were never separate.");
  ("Without a hold, praying for somebody walking was a chase. You tap empty ground to get");
  ("near them, you arrive, they are in front of you - and by the time you have looked at");
  ("them they have strolled out of the cone, so you walk again, and the street keeps");
  ("walking too. The wish was never for the player to catch anybody; it was to pray for the");
  ("person they went over to.");
  ("Sight is what a prayer costs, and it is charged once, at the moment of LOOKING and not");
  ("at the moment of praying. That is a real shift: it reads the way seeing a crowd reads -");
  ("you take them in, and then you pray for them, and they need not stand still for it.");
  let held = [];
  let held_cone = null;
  function hold_none() {
    "Holds nobody at all - everybody is let go and no view is remembered, so the next hold";
    "is taken fresh rather than compared against a view that is over.";
    bless_people_hold_release(held);
    held = [];
    held_cone = null;
  }
  function hold_release(person) {
    "Lets one person go, and they are then an ordinary passer-by again: free to walk out of";
    "the view, and no longer prayable once they have.";
    "Said after a prayer. What being held is FOR is giving the player time to pray for";
    "somebody they walked over to, and once that prayer is said there is nothing left to";
    "hold them for - keeping them would pin somebody already blessed in front of a player";
    "looking for the next person, which is the crowd standing still to no purpose.";
    bless_people_hold_release([person]);
    held = list_without(held, person);
  }
  function hold() {
    "Taken when the cone CHANGES rather than on every draw, because a draw also happens";
    "after a prayer - and a fresh snapshot there would drop the very people the player";
    "walked over to hold on to, the moment they prayed for the first of them. The cone is";
    "made of where the player stands, which way they face and how far they reach, so a cone";
    "that has not changed means the player has not acted.";
    "Nobody is held while the player is WALKING. The view swings and slides the whole way,";
    "so a hold taken mid-walk pins whoever happens to be in front of the player on that";
    "step and lets them go on the next - the street would clutch and release at the pace of";
    "the player's feet. Held only when the player has stopped, the rule is what it says it";
    "is: what you are looking at, once you are looking at it.";
    "Only people held WHOLLY, because the loose test would quietly annex whoever happened";
    "to have a foot on the cone's last square as the player stopped.";
    "Replaced and never added to. Grown instead, standing still would eventually hold the";
    "whole street, because everybody wanders through the cone sooner or later - and the";
    "game would have no edge in it at all.";
    let world_walking = bless_world_walking_is(world);
    if (world_walking) {
      hold_none();
      return;
    }
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
    ("something the player has to watch leave; kept where the player put their eyes, there");
    ("is nothing to watch and nothing to chase, and the player looks at a few faces and");
    ("prays for them.");
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
  let r = {
    hold,
    hold_release,
    view_now,
  };
  return r;
}
