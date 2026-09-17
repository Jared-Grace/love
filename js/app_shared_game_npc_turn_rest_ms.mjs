import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_game_npc_turn_rest_ms() {
  arguments_assert(arguments, 0);
  ("How long somebody on the street waits between turns, for every quarter of the bigger of the two turns.");
  ("So a quarter turn follows a quarter turn after this long, and a turn right about comes at least twice this long after any other turn - and holds off any other turn for twice this long after it. A turn about straight after a quarter turn, or a quarter turn straight after a turn about, is a person twirling.");
  ("Counted in time and not in steps. A step is as long as a person's pace and a moment of standing about is one to three of those, so a rest counted in steps was a different length depending on what they were doing - and for the quickest walkers it was short enough to spin in.");
  let r = 1500;
  return r;
}
