import { bless_marks_climbed_cases } from "./bless_marks_climbed_cases.mjs";
import { bless_marks_climbed_case_play } from "./bless_marks_climbed_case_play.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function bless_marks_climbed_cases_gate_run() {
  "QA gate: a player who does exactly what the prayer game asks of them - pray for every";
  "dark face and never for a lit one - climbs as far as the crowd allows and leaves";
  "nobody behind.";
  "This is the one promise the game makes and the one it cannot say out loud. The ladder";
  "is meant to be discovered, so a player is never told what earns a rung; the mark over";
  "somebody's head is the whole of the guidance. If clearing every mark in sight does not";
  "earn the place they are standing in, the player has done everything they were shown to";
  "do and been given nothing, with no dark face left anywhere that could ever change it -";
  "and no way to find out why, because the rule was never displayed.";
  "It has already happened once. Earning asked whether a place had been prayed for BY";
  "NAME, while the mark asks whether a person is covered by anything at all, and those";
  "two part company the moment the player climbs a rung: a block whose every resident was";
  "lit was judged unfinished, every single time. Nothing went red, because nothing was";
  "watching. This is what is watching.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = bless_marks_climbed_cases();
  let r = cases_gate_run_generic(
    cases,
    bless_marks_climbed_case_play,
    "climbed",
    "why",
    "bless marks climbed",
  );
  return r;
}
