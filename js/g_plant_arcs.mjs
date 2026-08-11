import { fn_name } from "./fn_name.mjs";
import { divide_round } from "./divide_round.mjs";
import { multiply_divide_round } from "./multiply_divide_round.mjs";
import { random_seed_generator_from_text } from "./random_seed_generator_from_text.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { math_max } from "./math_max.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_passage_match_count } from "./g_passage_match_count.mjs";
import { list_numbers_jitter } from "./list_numbers_jitter.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function g_plant_arcs(plant) {
  "Works out one plant's whole cast - how many people it holds and how many turns each of them is worth.";
  "The budget is worked out from the plant's LINES, which the plant carries, and never from its days multiplied back out. Those are not the same number: a chapter's days are its lines rounded UP, so rebuilding lines from days hands back a whole day of sermon for every part-day rounded, once per chapter, and a plant of three chapters can be paid for preaching that was never written. Lines are the fact and days are the rounding of it, so anything scaled by how much preaching there is reads the lines.";
  "The COUNT is DERIVED from what the leader leaves - as many people as those turns buy at the usual arc length. Nothing is drawn and nothing is clamped, so a plant with twice the preaching holds twice the people rather than the same people talking twice as long.";
  "This is the third arrangement, and why the FIRST one failed is worth keeping, because it is not the reason it looks like. Deriving the count came out at about six people whatever the plant's size - but the fault was never the deriving. It was that the leader's length was CAPPED AT A SHARE OF THE BUDGET, and a share grows with the thing it is a share of, so every extra turn a bigger plant won went straight back to the leader and none of it reached the room.";
  "Drawing the count from a bell fixed that symptom and paid for it in coupling. Measured over the eighteen plants in the supply, turns per person ran from 24 to 65, and two plants fell under the elder floor purely because their chapter was short. Cutting the cap is what lets deriving work: the leader is worked out from the plant's DAYS alone, so what is left over genuinely tracks how much preaching there is.";
  "The floor that guaranteed every convert a minimum length is GONE and nothing replaced it, because the ordering makes it unreachable - a cast sized by what the turns afford cannot be a cast the turns cannot afford. It was already unreachable: across all eighteen plants that cap never once bound, and the tightest of them wanted 81 turns for its leader against 210 available.";
  ("There is no clamp on the count, and the range is a MEASUREMENT rather than a sum. It cannot be a sum: two plants of the same length hold different amounts of sermon, because a chapter's days are its lines rounded up and the rounding differs. Over the supply as it stands, the plants inside the intended fifteen to twenty-one days come out at eleven to fifteen in the cast - the range a clamp would have been written to hold, so it would have nothing to do. A plant landing outside that is saying its book could not be divided into anything the right size, and ",
    fn_name("g_game_plant_passages"),
    " has already said so through floor_met and over_maximum. Clamping here would be that same finding suppressed rather than heard twice.");
  ("The leader is taken off the top, because the leader is the one person whose length is fixed by something outside the budget - an elder is formed over a set amount of time, and the rest of the plant has to fit around that rather than the leader fitting around the rest.");
  ("The converts then split what is left evenly and are jittered apart. Even-then-jitter rather than a descent: a descent says the second person is always most of the first, which is a shape, and the shape shows. What is wanted is a room of people who are mostly comparable and occasionally not.");
  ("A plant always has the same cast, because the seed is the plant's own address rather than the clock. This is authored content - worked out once and met by every player - so a run that differed each time would make a change in the output impossible to read.");
  let settings = g_generation_settings();
  let days = property_get(plant, "days");
  let chapters = property_get(plant, "chapters");
  let lines = property_get(plant, "lines");
  let matches = g_passage_match_count(lines);
  let question_turns = multiply_divide_round(
    matches,
    settings.question_matches_percent,
    100,
  );
  let arc_turns = subtract(matches, question_turns);
  ("Seeded on the plant's START and END passages rather than on its chapters, because chapters no longer identify a plant - a plant may begin and end mid-chapter, so two plants of the same book can both name the chapter they share and would then draw the same cast. The two addresses are unique by construction.");
  let start = property_get(plant, "start");
  let end = property_get(plant, "end");
  let joined = list_join_comma([start, end]);
  let next = random_seed_generator_from_text(joined);
  ("The leader's share is a portion of the plant's DAYS, so a longer plant disciples the leader longer rather than visiting the same number of times more thinly. It is worked out from the days ALONE - nothing about the cast reaches it - and that is what lets the count below be derived rather than guessed.");
  let share_low = divide(settings.leader_days_percent_minimum, 100);
  let share_high = divide(settings.leader_days_percent_maximum, 100);
  let share = divide(share_low + share_high, 2);
  let left = multiply(days, share);
  let leader_turns = multiply_round(left, settings.conversation_turns_mean);
  let leader_short = less_than(leader_turns, settings.leader_turns_minimum);
  ("The cast is what the leftover turns will pay for at the usual arc length. One person at the least, because a plant with a leader and nobody in it is not a plant.");
  let convert_turns = subtract(arc_turns, leader_turns);
  let afforded = divide_round(convert_turns, settings.arc_turns_mean);
  let converts = math_max(1, afforded);
  let npcs = converts + 1;
  let shortest = settings.conversation_turns_low;
  ("Whatever the leader does not take is split evenly and then jittered, so the total and the head count both survive the variety.");
  let evenly = divide_floor(convert_turns, converts);
  let right = multiply(evenly, converts);
  let over = subtract(convert_turns, right);
  let shares = [];
  for (let index = 0; less_than(index, converts); index++) {
    let extra = less_than(index, over);
    let amount = extra ? evenly + 1 : evenly;
    list_add(shares, amount);
  }
  let p = multiply(evenly, 2);
  let widest = math_max(p, shortest);
  let jittered = list_numbers_jitter(
    shares,
    next,
    settings.arc_length_swaps,
    shortest,
    widest,
  );
  let spent = list_sum(jittered) + leader_turns;
  let r = {
    book: property_get(plant, "book"),
    chapters,
    start,
    end,
    lines,
    days,
    matches,
    question_turns,
    arc_turns,
    npcs,
    leader_turns,
    leader_short,
    convert_lengths: jittered,
    spent,
    balanced: equal(spent, arc_turns),
  };
  return r;
}
