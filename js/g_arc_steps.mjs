import { g_arc_turns } from "./g_arc_turns.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_add } from "./list_add.mjs";
export function g_arc_steps(arc) {
  "One written arc as the bare sequence of moves it is made of - for each turn, the opener the player chose and the passage that answered it, joined into one word.";
  "WHAT THE PERSON SAYS IS DELIBERATELY LEFT OUT. Two arcs written from the same prompt say different words almost by construction, so comparing their words says they differ and stops there. What repeats between two people is the SHAPE - the same opener answered by the same passage, in the same order - and that survives being said in two entirely different voices.";
  "So this is the thing to compare when asking whether one person was written twice. It is not a judgement about either arc; it is the arc reduced to what a comparison can honestly see.";
  "The conversations are flattened away because a scene written twice does not have to fall in the same conversation of each arc, and a run that spans the end of one conversation and the start of the next is still one run of the same moves.";
  let steps = [];
  let turns = g_arc_turns(arc);
  for (let turn of turns) {
    let opener = property_get(turn, "opener");
    let reference = property_get(turn, "reference");
    let step = list_join_empty([opener, " / ", reference]);
    list_add(steps, step);
  }
  return steps;
}
