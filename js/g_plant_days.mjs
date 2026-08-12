import { random_bell_low_middle_high } from "./random_bell_low_middle_high.mjs";
import { error_json } from "./error_json.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { multiply_divide } from "./multiply_divide.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { list_map } from "./list_map.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { random_index } from "./random_index.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_filter_list_empty_not_is } from "./list_filter_list_empty_not_is.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function g_plant_days(conversation_lists, next) {
  "Lays every npc's conversations onto the days of a plant, filling what a day cannot spend on conversations with questions - so a plant's shape is worked out from what its people are worth rather than from a day count decided in advance.";
  "A day is a TURN BUDGET and nothing else. Conversations are indivisible pieces laid into it until the next one will not fit, so how many a day holds is an OUTCOME - six on a day of short ones, two on a day of long ones. Nothing caps it, because a conversation's own low end already stops a piece being too small to be worth walking over for.";
  "Questions take the remainder exactly, because a question is one turn and has no floor. That is why no day has to come out even and why there is no slack to leave.";
  "One person is met at most once a day, which is the only reason a day needs more than one person in it.";
  ("Who is met is drawn, not ordered, so two saves of the same cast meet them in a different sequence. The generator is received for the same reason it is in ",
    fn_name("g_arc_conversation_lengths"),
    " - this is per-game and must come off the save.");
  ("A person's own conversations stay in the order they were written, because an arc is a story and its second conversation answers its first.");
  ("The lists are COPIED before anything is taken off them, so scheduling a plant cannot reach back and empty the caller's own arcs.");
  ("Conversations are laid into the ARC share of a day rather than into the whole of it, and the questions take everything that share does not reach. Filling the whole day with conversations was tried and made the question percentage fiction - it fell to twelve where the settings said twenty-five, because a remainder is whatever is left rather than a share of anything. Reserving it is what makes ");
  (fn_name("g_arc_conversations_a_day"),
    " true of a played day and not only of the sizing sum behind it.");
  let s = g_generation_settings();
  let kept = subtract(100, s.question_matches_percent);
  let budget = multiply_divide(s.day_matches, kept, 100);
  let left = list_map(conversation_lists, list_copy);
  let count = list_size(left);
  ("The LEADER is not one of the lists and has no arc waiting to be spent. Everybody else is written once and then runs out, which is what ends a plant; the leader is whoever is discipling the player and goes on for as long as the plant does. So their conversation is DRAWN on the day rather than taken off a pile, and how many turns they come to is an outcome of the plant's length instead of a number that had to be guessed before it.");
  ("They are placed FIRST on their days, before anybody is drawn, because a share of days is a promise and a random pick keeps no promise. Which days those are is still drawn, so the leader is not simply always the first person met.");
  let share_low = s.leader_days_percent_minimum;
  let share_high = s.leader_days_percent_maximum;
  let share = divide(share_low + share_high, 2);
  let days = [];
  while (true) {
    let remaining = list_filter_list_empty_not_is(left);
    let spent_out = list_empty_is(remaining);
    if (spent_out) {
      break;
    }
    let conversations = [];
    let met = [];
    let rolled = next();
    let b = divide(share, 100);
    let comes = less_than(rolled, b);
    let drawn = random_bell_low_middle_high(
      next,
      s.conversation_turns_low,
      s.conversation_turns_mean,
      s.conversation_turns_high,
    );
    let leader = comes ? drawn : 0;
    let spent = leader;
    while (true) {
      let room = subtract(budget, spent);
      let fitting = g_plant_day_fitting(left, met, room);
      let nobody = list_empty_is(fitting);
      if (nobody) {
        break;
      }
      let size = list_size(fitting);
      let at = random_index(next, size);
      let npc = fitting[at];
      let lengths = left[npc];
      let turns = lengths[0];
      list_remove_at(lengths, 0);
      list_add(met, npc);
      let conversation = {
        npc,
        turns,
      };
      list_add(conversations, conversation);
      spent = spent + turns;
    }
    ("A day where the leader stayed away and nobody fit is a day that spent nothing, and arcs are still waiting - so the next day would be the same day again, forever. It cannot happen while the longest conversation a person can hold stays under a day's arc budget, and this is what makes that a fact rather than a hope. A day holding only the leader is fine and is NOT this: their conversation can take enough of the budget that nobody else fits, and the plant still moved.");
    let none_met = list_empty_is(conversations);
    if (none_met) {
      let no_leader = equal(leader, 0);
      if (no_leader) {
        error_json({
          hint: "no conversation fits a day, so the plant cannot move; the longest a conversation may run has passed the turns a day gives to arcs",
          budget,
          remaining,
        });
      }
    }
    let questions = subtract(s.day_matches, spent);
    let day = {
      leader,
      conversations,
      questions,
    };
    list_add(days, day);
  }
  return days;
}
