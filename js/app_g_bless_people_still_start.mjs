import { html_element_width } from "./html_element_width.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_person_still_start } from "./app_g_bless_person_still_start.mjs";
import { each } from "./each.mjs";
export function app_g_bless_people_still_start(people, player_img_c) {
  arguments_assert(arguments, 2);
  ("Holds the whole street still, each person exactly where their picture has got to, for");
  ("as long as a celebration lasts.");
  ("A prayer answered takes the camera somewhere, and taking the camera somewhere switches");
  ("sliding off for everything on the map so that a change of size lands exactly rather");
  ("than being walked to. Sliding switched off finishes every step that was under way in a");
  ("single frame, so the moment the camera sets off the whole crowd jumps - and it jumps");
  ("again on the way back. Held still first, there is no step under way to be finished and");
  ("nothing jumps.");
  ("Held for the whole celebration and not only for the journeys, because there are two");
  ("journeys with lights in between and the crowd would have to be caught twice. It also");
  ("says the right thing: a prayer being answered is a moment, and a moment is what a street");
  ("that has stopped to watch looks like.");
  ("How big a square is drawn is measured once, from the player's own picture, and handed to");
  ("everybody. It is one square by definition, it is measured rather than worked out so that");
  ("a phone that has already shrunk the map is read correctly, and reading it once keeps");
  ("this to a single measurement rather than one per person.");
  let square = html_element_width(player_img_c);
  function person_still(person) {
    app_g_bless_person_still_start(person, square);
  }
  each(people, person_still);
}
