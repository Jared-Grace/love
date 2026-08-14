import { g_npc_path_clear_facing_best_cases } from "./g_npc_path_clear_facing_best_cases.mjs";
import { g_npc_path_clear_facing_best } from "./g_npc_path_clear_facing_best.mjs";
import { g_coordinates_member_is } from "./g_coordinates_member_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function g_npc_path_clear_facing_best_cases_gate_run() {
  "QA gate: every patch of dry land the corpus writes down turns the arrangement the way it says, judged by where the tap ends up.";
  "It fails SILENTLY on the screen. A turning decided wrongly does not throw and does not stop - it lays a row of people and a gold tile out over water, and what the player sees is an empty stretch of sea with a gold square on it and nothing that answers a tap.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = g_npc_path_clear_facing_best_cases();
  function answer(c) {
    let land = property_get(c, "land");
    let land_is = g_coordinates_member_is(land);
    let situation = property_get(c, "situation");
    let place = property_get(c, "place");
    let best = g_npc_path_clear_facing_best(situation, place, land_is);
    let tap = property_get(best, "tap");
    return tap;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "tap",
    "why",
    "g npc path clear facing best",
  );
  return r;
}
