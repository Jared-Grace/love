import { not } from "./not.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function g_arc_prompt_becoming(leader) {
  "The part of the arc prompt that says where this person ends up, as one block of lines.";
  "A leader's arc is not a longer arc of the same kind, and the turn count alone does not say so - it hands the writing call five times the turns with no reason for them, which reads as one very long conversation instead of a discipling.";
  let belief = [
    "All npcs begin not yet believing, and eventually they believe. So the arc will have unbeliever first, then disciple.",
    "Belief only moves forward. Once they believe, they never go back.",
  ];
  if (not(leader)) {
    let r = list_join_newline(belief);
    return r;
  }
  let elder = [
    "",
    "THIS PERSON IS THE LEADER.",
    "The player will leave. This is the person the others are left with, so the arc goes further than belief: not yet believing, then a disciple, then somebody who can teach the rest and hold them together.",
    "That is what the turns are for. It is a discipling over many days, not one long conversation.",
    "So the later conversations turn outward. Early on they ask about their own trouble. Later they ask how to answer somebody else's, what to do when one of them falls away, and how to keep going once the player is gone.",
    "They still need answering from these passages. Do not write them as somebody who has outgrown Scripture.",
  ];
  let lines = belief.concat(elder);
  let r = list_join_newline(lines);
  return r;
}
