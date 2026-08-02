import { round } from "./round.mjs";
import { math_min } from "./math_min.mjs";
import { floor } from "./floor.mjs";
import { math_max } from "./math_max.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { g_passage_match_count } from "./g_passage_match_count.mjs";
import { random_seed_from_text } from "./random_seed_from_text.mjs";
import { random_seed_generator } from "./random_seed_generator.mjs";
import { random_bell_low_middle_high } from "./random_bell_low_middle_high.mjs";
import { list_numbers_jitter } from "./list_numbers_jitter.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function g_plant_arcs(plant) {
  "Works out one plant's whole cast - how many people it holds and how many turns each of them is worth.";
  "The COUNT is drawn first and the turns are shared out to fit it, which is the opposite of the way this was built before. Deriving the count from the lengths made it about six people whatever the plant's size, because the longest arc was capped at a share of the budget: a bigger plant bought longer arcs and never more people. Drawing the count first makes the plant's size buy what it should, which is a fuller room.";
  "The leader is taken off the top, because the leader is the one person whose length is fixed by something outside the budget - an elder is formed over a set amount of time, and the rest of the plant has to fit around that rather than the leader fitting around the rest.";
  "The converts then split what is left evenly and are jittered apart. Even-then-jitter rather than a descent: a descent says the second person is always most of the first, which is a shape, and the shape shows. What is wanted is a room of people who are mostly comparable and occasionally not.";
  "Seeded on the plant's chapters, so a plant always has the same cast. This is authored content - worked out once and met by every player - so a run that differed each time would make a change in the output impossible to read.";
  let settings = g_generation_settings();
  let days = property_get(plant, "days");
  let chapters = property_get(plant, "chapters");
  let lines = multiply(days, settings.day_lines);
  let matches = g_passage_match_count(lines);
  let divided = multiply_divide(
    matches,
    settings.question_matches_percent,
    100,
  );
  let question_turns = round(divided);
  let arc_turns = subtract(matches, question_turns);
  let joined = list_join_comma(chapters);
  let seed = random_seed_from_text(joined);
  let next = random_seed_generator(seed);
  let npcs = random_bell_low_middle_high(
    next,
    settings.plant_npcs_minimum,
    settings.plant_npcs_mean,
    settings.plant_npcs_maximum,
  );
  ("The leader's share is a portion of the plant's DAYS, so a longer plant disciples the leader longer rather than visiting the same number of times more thinly.");
  let share_low = divide(settings.leader_days_percent_minimum, 100);
  let share_high = divide(settings.leader_days_percent_maximum, 100);
  let share = divide(share_low + share_high, 2);
  let left = multiply(days, share);
  let p = multiply(left, settings.conversation_turns_mean);
  let leader_wanted = round(p);
  let converts = subtract(npcs, 1);
  let shortest = settings.conversation_turns_low;
  let converts_least = multiply(converts, shortest);
  let leader_room = subtract(arc_turns, converts_least);
  let leader_turns = math_min(leader_wanted, leader_room);
  let leader_short = less_than(leader_turns, settings.leader_turns_minimum);
  ("Whatever the leader does not take is split evenly and then jittered, so the total and the head count both survive the variety.");
  let convert_turns = subtract(arc_turns, leader_turns);
  let divided2 = divide(convert_turns, converts);
  let evenly = floor(divided2);
  let right = multiply(evenly, converts);
  let over = subtract(convert_turns, right);
  let shares = [];
  for (let index = 0; less_than(index, converts); index++) {
    let extra = less_than(index, over);
    let amount = extra ? evenly + 1 : evenly;
    list_add(shares, amount);
  }
  let p2 = multiply(evenly, 2);
  let widest = math_max(p2, shortest);
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
