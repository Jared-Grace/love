import { g_npc_path_clear_places_cases } from "./g_npc_path_clear_places_cases.mjs";
import { g_npc_path_clear_places } from "./g_npc_path_clear_places.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function g_npc_path_clear_places_cases_gate_run() {
  "QA gate: every patch of dry land the corpus writes down stands the people and puts the tap where it says.";
  "TWO PEOPLE ON ONE TILE is the failure worth catching here and it is entirely silent. A person's picture and the cross over them are remembered by where that person is standing, so a second person arriving on a tile takes over the first one's drawer - and the first one afterwards drags somebody else's picture about the map. Nothing throws, nothing is logged, and what the player sees is a stranger wearing the wrong face.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = g_npc_path_clear_places_cases();
  function answer(c) {
    let land = property_get(c, "land");
    let land_index = g_coordinates_index(land);
    let situation = property_get(c, "situation");
    let player = property_get(c, "player");
    let places = g_npc_path_clear_places(situation, player, land_index);
    return places;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "places",
    "why",
    "g npc path clear places",
  );
  return r;
}
