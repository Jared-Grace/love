import { multiply_floor } from "./multiply_floor.mjs";
import { multiply_divide_round } from "./multiply_divide_round.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { equal_not } from "./equal_not.mjs";
import { add } from "./add.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_sermon_chapter_lines } from "./g_sermon_chapter_lines.mjs";
import { g_passage_match_count } from "./g_passage_match_count.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { identity } from "./identity.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export async function g_arc_lengths(chapter) {
  "Works out how long each arc in one chapter should be, from the settings and the chapter's own sermon lines - so the npc count falls out as the length of the list rather than being chosen.";
  "Lengths are in TURNS, and this function deliberately says nothing about days or conversations. It CANNOT: which leader arcs are running and whether extra preaching has pushed the chapter out of sync are both unknown here, and both decide how the turns fall across days. So generation hands over turns, and a later scheduling pass - which knows those things - cuts them into conversations and places them.";
  "What generation may hand the scheduler besides the turns is a CONSTRAINT: this turn must land on a later day than that one, because the story needs time to pass. That is a fact about the writing rather than about the calendar, so it is the one scheduling-shaped thing that belongs here.";
  "One ceiling sits on the longest arc: a quarter of the arc budget, so no single person eats the chapter. The day count used to be a second ceiling and was wrong - it was this function scheduling.";
  "Lengths descend by one mean conversation at a time, and when the next step would fall under the shortest a conversation may be, the descent STARTS AGAIN from the ceiling. That spreads the budget across the whole range instead of pouring its remainder into a tail of the smallest arcs. The finished list is sorted longest first, because a long arc is the hardest thing to place and should be placed while the space is still empty.";
  "A one-conversation arc is wanted, not tolerated. It is somebody who hears and believes, and whose discipling happens through the other believers rather than on screen - and it always fits, which is what makes deriving the npc count safe rather than merely convenient.";
  let settings = g_generation_settings();
  let lines = await g_sermon_chapter_lines(chapter);
  let matches = g_passage_match_count(lines);
  let question_turns = multiply_divide_round(
    matches,
    settings.question_matches_percent,
    100,
  );
  let arc_turns = subtract(matches, question_turns);
  let cap = divide_floor(arc_turns, 4);
  let shortest = settings.conversation_turns_low;
  let step = settings.conversation_turns_mean;
  let lengths = [];
  let remaining = arc_turns;
  let length = cap;
  for (let emitted = 0; less_than(emitted, arc_turns); emitted++) {
    if (less_than(remaining, shortest)) {
      break;
    }
    let take = math_min(length, remaining);
    list_add(lengths, take);
    remaining = subtract(remaining, take);
    length = subtract(length, step);
    if (less_than(length, shortest)) {
      length = cap;
    }
  }
  ("Whatever is left is under the shortest conversation, so it cannot be an arc. It goes to the question pool, which has no length floor because a question is one turn.");
  let turns_unspent = remaining;
  ("Now nudge the lengths, so a cast does not read as an arithmetic sequence. Each nudge picks two arcs and moves ONE turn between them, which conserves the budget exactly and cannot change how many people there are - the two properties the descent had and would be a shame to lose. A move that would push either arc outside the range is simply skipped, which is why the count is a number of ATTEMPTS rather than a promise.");
  ("Seeded on the chapter code, so this chapter always lands the same way. Authored content is worked out once and reused by every playthrough, so a run that differed each time would make a change in the output impossible to read.");
  let next = random_seed_generator_from_text(chapter);
  let count = lengths.length;
  for (
    let attempt = 0;
    less_than(attempt, settings.arc_length_swaps);
    attempt++
  ) {
    let left = next();
    let giver = multiply_floor(left, count);
    let left2 = next();
    let taker = multiply_floor(left2, count);
    let given = subtract(lengths[giver], 1);
    let taken = add(lengths[taker], 1);
    let stays_above = greater_than_equal(given, shortest);
    let stays_below = less_than_equal(taken, cap);
    let different = equal_not(giver, taker);
    if (stays_above && stays_below && different) {
      lengths[giver] = given;
      lengths[taker] = taken;
    }
  }
  list_sort_number_mapper_reverse(lengths, identity);
  let npcs = lengths.length;
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
