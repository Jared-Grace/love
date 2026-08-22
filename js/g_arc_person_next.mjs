import { list_pop } from "./list_pop.mjs";
import { g_arc_written_indexes } from "./g_arc_written_indexes.mjs";
import { g_npc_cast_dealt } from "./g_npc_cast_dealt.mjs";
import { g_profiles_shares_distance } from "./g_profiles_shares_distance.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { null_is } from "./null_is.mjs";
export async function g_arc_person_next(chapter_code) {
  "Which person to write next for one chapter: the one whose profile leaves the arcs written so far closest to the spread the cast is supposed to have.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "THE DEAL IS BALANCED OVER ALL OF IT AND THE WRITING WILL STOP PART WAY, and that gap is the whole reason for this. The dealer weights every card against who the cast is still short of, so all two hundred and twenty-nine come out on target - but nobody is going to write all of them, and the first handful in pool order are whoever the deck happened to hand out first. Measured on this repo the first seven dealt are all married women and no man appears before the eighth, so a chapter written in pool order and stopped at seven is a chapter with no men in it.";
  "SO IT PICKS BY WHAT IS MISSING RATHER THAN BY WHAT COMES NEXT. Each unwritten person is scored as though they were written, and the one that leaves the written set nearest the target wins. That is not a rule about gender - gender is one of seven axes and comes out balanced as a consequence, along with age and marriage and servitude, none of which anybody has to remember.";
  "IT IS A SUGGESTION AND NOT A GATE. Nothing stops a person being written out of turn, and a chapter that wants a particular somebody next should have them; this answers the question of who to write when there is no reason to prefer anyone, which is nearly always.";
  "IT IS THE SAME ANSWER EVERY TIME for the same chapter and the same store, because the deal is seeded and ties go to the lower number. Two people asking what to write next have to be told the same thing or they write the same person twice under two different arcs.";
  "NOBODY LEFT ANSWERS NOTHING AT ALL. A chapter that has every dealt person written is finished rather than broken, and a refusal here would make the caller that walks a chapter to its end handle an error for the ordinary way of arriving.";
  let written = await g_arc_written_indexes(chapter_code);
  let cast = await g_npc_cast_dealt();
  let so_far = [];
  for (let index of written) {
    let profile = cast[index];
    list_add(so_far, profile);
  }
  let count = list_size(cast);
  let best = null;
  let best_distance = 0;
  for (let index = 0; less_than(index, count); index++) {
    let done = list_includes(written, index);
    if (done) {
      continue;
    }
    let profile = cast[index];
    list_add(so_far, profile);
    let distance = g_profiles_shares_distance(so_far);
    list_pop(so_far);
    let first = null_is(best);
    let closer = less_than(distance, best_distance);
    if (first || closer) {
      best = index;
      best_distance = distance;
    }
  }
  return best;
}
