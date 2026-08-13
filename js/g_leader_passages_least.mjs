import { g_generation_plan } from "./g_generation_plan.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
import { ceil } from "./ceil.mjs";
export function g_leader_passages_least() {
  "the fewest passages a leader arc may stand on without repeating itself - the width its pool is grown to and then stopped at";
  "IT IS THE BAND, TURNED AROUND. A plant asks a passage to answer four to six times; more than about six and the elder is saying the same thing again. Uses are turns divided by passages, so the top of the band in uses is the BOTTOM of it in passages: 216 turns over 36 passages is exactly 6. Below 36 an elder repeats, and this is that number, derived rather than typed so it moves when the plan does.";
  "IT IS A FLOOR THAT ACTS AS A CEILING, because the pool is grown backward one chapter at a time and stopped the moment it is met. Going wider was free while repetition was the only cost; it is not free now that the pool is sent to a model, and the far end of the band (54 passages, 4 uses) buys variety nobody can measure for half again the tokens. So the pool is grown to the least that works and no further.";
  "WHOLE CHAPTERS ONLY, so the answer overshoots - a chapter is not divisible and the one that crosses the line is taken entire. That is why this is a least and not a target.";
  let plan = g_generation_plan();
  let turns = property_get(plan, "leader_turns");
  let most_uses = 6;
  let exact = divide(turns, most_uses);
  let least = ceil(exact);
  return least;
}
