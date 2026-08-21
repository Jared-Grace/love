import { g_openers_unbeliever } from "./g_openers_unbeliever.mjs";
import { g_openers_disciple_arc } from "./g_openers_disciple_arc.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function g_openers_arc() {
  "Every opener a written arc may mark a turn with - the unbeliever doors and the disciple doors an arc is offered, in one list.";
  "THE PROMPT SHOWS THESE IN TWO GROUPS AND A CHECK ASKS ABOUT THEM AS ONE. The groups are how a writer is told which belief state each door belongs to; whether a turn's opener was offered at all does not care which group it came from, and asking that question by joining the two lists at the asking end would put the joining in every caller.";
  let openers = [];
  let unbeliever = g_openers_unbeliever();
  let disciple = g_openers_disciple_arc();
  list_add_multiple(openers, unbeliever);
  list_add_multiple(openers, disciple);
  return openers;
}
