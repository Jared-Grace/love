import { fn_name } from "./fn_name.mjs";
export function g_day_matches() {
  "npc matches a player has in one in-game day; paired with the day-lines budget it fixes the matches-per-line rate";
  "Three conversations and about a dozen single-turn questions. A quarter of these go to the question pool, and what is left is three conversations at the usual length - one of them the leader, who is met every day.";
  "Forty-nine was measured as the number that says three, and it does not - it says two and a half. The sum behind it divides the arc share by a conversation's usual length and gets three, but conversations are indivisible and a day cannot be packed exactly, so about a seventh of the share is always left standing. Scheduling whole plants and counting the people actually met is what found that; no arithmetic was going to.";
  "So this is the sum with the loss put back in, and a scheduled plant now holds three people a day for real. Everything else stayed where it was - arcs at their usual length, the leader met every day - and plants came out fifteen to twenty-one days across four seeds, which is the range already written down for them.";
  ("It was rejected once at this number, on the ground that it put plants of seventeen past the sixteen-person ceiling. That objection STANDS. It was set aside on the ground that a plant's room is chosen now - and the chosen-room model only exists in ",
    fn_name("g_game_plants_whole"),
    ", which nothing calls, and in the scheduler's own report. The generator that actually runs still fills a plant from the pool until the turns come out near the budget, so a bigger day buys more people, and at this number it buys seventeen and eighteen of them.");
  ("Nothing catches it. The over_maximum a plant reports is about DAYS, and no reading anywhere compares a plant's people against plant_npcs_maximum.");
  ("It was answered by lengthening the arcs rather than by lowering this back down - see arc_turns_mean. A bigger day buying more people is only a fault while a person is worth too few turns to absorb it, and the turns bought are wanted; it is the headcount they were being spent on that was not.");
  let r = 56;
  return r;
}
