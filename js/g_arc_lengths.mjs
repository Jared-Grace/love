import { g_arc_lengths_r } from "./g_arc_lengths_r.mjs";
import { g_arc_lengths_npcs_floor_met } from "./g_arc_lengths_npcs_floor_met.mjs";
import { g_arc_lengths_npcs_minimum } from "./g_arc_lengths_npcs_minimum.mjs";
import { g_arc_lengths_v } from "./g_arc_lengths_v.mjs";
import { g_arc_lengths_question_turns } from "./g_arc_lengths_question_turns.mjs";
import { property_get } from "./property_get.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export async function g_arc_lengths(chapter) {
  "Works out how long each arc in one chapter should be, from the settings and the chapter's own sermon lines - so the npc count falls out as the length of the list rather than being chosen.";
  "Lengths are in TURNS, and this function deliberately says nothing about days or conversations. It CANNOT: which leader arcs are running and whether extra preaching has pushed the chapter out of sync are both unknown here, and both decide how the turns fall across days. So generation hands over turns, and a later scheduling pass - which knows those things - cuts them into conversations and places them.";
  "What generation may hand the scheduler besides the turns is a CONSTRAINT: this turn must land on a later day than that one, because the story needs time to pass. That is a fact about the writing rather than about the calendar, so it is the one scheduling-shaped thing that belongs here.";
  "One ceiling sits on the longest arc: a quarter of the arc budget, so no single person eats the chapter. The day count used to be a second ceiling and was wrong - it was this function scheduling.";
  "Lengths descend by one mean conversation at a time, and when the next step would fall under the shortest a conversation may be, the descent STARTS AGAIN from the ceiling. That spreads the budget across the whole range instead of pouring its remainder into a tail of the smallest arcs. The finished list is sorted longest first, because a long arc is the hardest thing to place and should be placed while the space is still empty.";
  "A one-conversation arc is wanted, not tolerated. It is somebody who hears and believes, and whose discipling happens through the other believers rather than on screen - and it always fits, which is what makes deriving the npc count safe rather than merely convenient.";
  let settings = g_generation_settings();
  let r2 = await g_arc_lengths_question_turns(chapter, settings);
  let question_turns = property_get(r2, "question_turns");
  let r5 = property_get(r2, "r5");
  let r3 = g_arc_lengths_v(r2, r5, settings);
  let r4 = g_arc_lengths_npcs_minimum(r3, settings);
  let r6 = g_arc_lengths_npcs_floor_met(r4);
  let npcs_floor_met = property_get(r6, "npcs_floor_met");
  let r = g_arc_lengths_r(r6, chapter, question_turns, npcs_floor_met);
  return r;
}
