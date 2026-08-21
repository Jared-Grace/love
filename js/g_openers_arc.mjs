import { lists_combine_unique } from "./lists_combine_unique.mjs";
import { g_openers_unbeliever } from "./g_openers_unbeliever.mjs";
import { g_openers_disciple_arc } from "./g_openers_disciple_arc.mjs";
export function g_openers_arc() {
  "Every opener a written arc may mark a turn with - the unbeliever doors and the disciple doors an arc is offered, in one list.";
  "THE PROMPT SHOWS THESE IN TWO GROUPS AND A CHECK ASKS ABOUT THEM AS ONE. The groups are how a writer is told which belief state each door belongs to; whether a turn's opener was offered at all does not care which group it came from, and asking that question by joining the two lists at the asking end would put the joining in every caller.";
  "A DOOR OPEN TO BOTH IS KEPT ONCE. Asking how somebody is is offered whatever they believe, so the two groups name it twice; left twice over, it would be a list that reads as though there were two of that door, and a refusal printing the list would show it as one.";
  let unbeliever = g_openers_unbeliever();
  let disciple = g_openers_disciple_arc();
  let openers = lists_combine_unique([unbeliever, disciple]);
  return openers;
}
