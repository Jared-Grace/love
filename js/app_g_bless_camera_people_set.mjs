import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_bless_camera_people_set(container_map, people) {
  arguments_assert(arguments, 2);
  ("Tells the map who is walking about on it, so that a camera journey can hold them still");
  ("while it travels.");
  ("The crowd is left ON the map rather than handed down through every caller. A journey is");
  ("asked for from four or five places, each of which was handed a map and a screen and has");
  ("no business knowing there are people on it - and threading a crowd through all of them");
  ("would mean every future caller had to be told about a problem that is not theirs. Said");
  ("once here, every journey ever made from this map is covered, including the ones nobody");
  ("has written yet.");
  ("It is written onto the map's own element, which is where this game already keeps the");
  ("note saying which camera move is the current one. A fact about a particular map belongs");
  ("on that map.");
  ("A map nobody told is a map with nobody on it as far as a journey is concerned, and that");
  ("is the honest answer for the dev screens that draw ground and no walkers.");
  let element = html_component_element_get(container_map);
  element.bless_camera_people = people;
}
