import { g_arc_lengths_question_turns } from "./g_arc_lengths_question_turns.mjs";
import { property_get } from "./property_get.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
import { math_max } from "./math_max.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
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
  let npcs = property_get(r2, "npcs");
  let turns_unspent = property_get(r2, "turns_unspent");
  let lengths = property_get(r2, "lengths");
  let cap = property_get(r2, "cap");
  let arc_turns = property_get(r2, "arc_turns");
  let matches = property_get(r5, "matches");
  let lines = property_get(r5, "lines");
  let v = divide_ceil(settings.day_matches, settings.conversation_turns_mean);
  let npcs_minimum = math_max(v, settings.npcs_available_minimum);
  let npcs_floor_met = greater_than_equal(npcs, npcs_minimum);
  let r = {
    chapter,
    lines,
    matches,
    question_turns,
    arc_turns,
    cap,
    lengths,
    turns_unspent,
    npcs,
    npcs_minimum,
    npcs_floor_met,
  };
  return r;
}
