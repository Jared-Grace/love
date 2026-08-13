import { app_g_player_walk_cases } from "./app_g_player_walk_cases.mjs";
import { app_g_player_walk_case_play } from "./app_g_player_walk_case_play.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function app_g_player_walk_cases_gate_run() {
  "QA gate: every order walks can be set off and finished in is answered the way the corpus says it is.";
  "This decides what a tap on the player means, and it is wrong silently. Say nobody is walking while somebody still is and the menu opens over a player sliding across the map, with nothing left able to stop them; say somebody is walking when everybody has finished and the menu never opens again for the rest of the day. Neither raises anything, and no other gate reads these counts.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = app_g_player_walk_cases();
  let r = cases_gate_run_generic(
    cases,
    app_g_player_walk_case_play,
    "after",
    "why",
    "app g player walk",
  );
  return r;
}
