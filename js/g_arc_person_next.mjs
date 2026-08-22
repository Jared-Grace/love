import { g_arc_written_indexes } from "./g_arc_written_indexes.mjs";
import { g_npc_cast_dealt } from "./g_npc_cast_dealt.mjs";
import { g_profiles_balance_next } from "./g_profiles_balance_next.mjs";
export async function g_arc_person_next(chapter_code) {
  "Which person to write next for one chapter: the one whose profile leaves the arcs written so far closest to the spread the cast is supposed to have.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "THE DEAL IS BALANCED OVER ALL OF IT AND THE WRITING WILL STOP PART WAY, and that gap is the whole reason for this. The dealer weights every card against who the cast is still short of, so all two hundred and twenty-nine come out on target - but nobody is going to write all of them, and the first handful in pool order are whoever the deck happened to hand out first. Measured on this repo the first seven dealt are all married women and no man appears before the eighth, so a chapter written in pool order and stopped at seven is a chapter with no men in it.";
  "SO IT PICKS BY WHAT IS MISSING RATHER THAN BY WHAT COMES NEXT. Each unwritten person is scored as though they were written, and the one that leaves the written set nearest the target wins. That is not a rule about gender - gender is one of seven axes, weighed against age and marriage and servitude and the rest, none of which anybody has to remember.";
  "IT IS NOT A PROMISE THAT ANY ONE AXIS IS BALANCED AT ANY ONE MOMENT. All seven are added up into a single number, so an axis whose target is split several ways can outvote gender's two, and on a handful of people written it regularly does. What the picker is short of overall decides, and a chapter reading oddly on one axis part way through is the metric working rather than failing.";
  "IT IS A SUGGESTION AND NOT A GATE. Nothing stops a person being written out of turn, and a chapter that wants a particular somebody next should have them; this answers the question of who to write when there is no reason to prefer anyone, which is nearly always.";
  "IT IS THE SAME ANSWER EVERY TIME for the same chapter and the same store, because the deal is seeded and ties go to the lower number. Two people asking what to write next have to be told the same thing or they write the same person twice under two different arcs.";
  "NOBODY LEFT ANSWERS NOTHING AT ALL. A chapter that has every dealt person written is finished rather than broken, and a refusal here would make the caller that walks a chapter to its end handle an error for the ordinary way of arriving.";
  "THE CHOOSING IS NOT DONE HERE. All this does is find the two lists and hand them over, because a function that reads a store cannot be shown a made-up store to answer about - and the thing worth checking is the choice.";
  let written = await g_arc_written_indexes(chapter_code);
  let cast = await g_npc_cast_dealt();
  let r = g_profiles_balance_next(cast, written);
  return r;
}
