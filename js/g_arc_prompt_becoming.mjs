import { not } from "./not.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function g_arc_prompt_becoming(leader) {
  "The part of the arc prompt that says where this person ends up, as one block of lines.";
  "A leader's arc is not a longer arc of the same kind, and the turn count alone does not say so - it hands the writing call five times the turns with no reason for them, which reads as one very long conversation instead of a discipling.";
  "The elder qualifications are asked for HERE rather than in the profile deck, because they are character proven over time and a deck of circumstances holds neither. The deck can only say who is not a teenager.";
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
    "",
    "1 Timothy 3 and Titus 1 say who an elder may be, and most of it is character rather than circumstance - so write it into what they say and do rather than into who they are.",
    "A one-woman man (the Greek of 1 Timothy 3 verse 2 is mias gynaikos andra): faithful to one, whether they are married, widowed, or unmarried. Not somebody who has been faithless and moved on.",
    "Proven over time, not a recent convert. Whatever household or work they have, they have kept it well - so let their trouble be one that tests that, and let them come through it.",
    "Hospitable, gentle, not quarrelsome, not greedy, well thought of by outsiders. Sober in a hard place.",
    "Write these as things that SHOW. Never have them announce that they are qualified.",
  ];
  let lines = belief.concat(elder);
  let r = list_join_newline(lines);
  return r;
}
